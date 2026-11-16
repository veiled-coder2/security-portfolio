const API = "/api/profiles";

const grid = document.getElementById("peopleGrid");
const modal = document.getElementById("modalBackdrop");
const form = document.getElementById("profileForm");
const modalTitle = document.getElementById("modalTitle");
const saveButton = document.getElementById("saveButton");
const searchInput = document.getElementById("searchInput");
const toast = document.getElementById("toast");

let profiles = [];
let editingId = null;
let newestFirst = true;
let toastTimer;

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase() || "?";
}

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.toggle("error", isError);
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

async function request(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Something went wrong.");
  return data;
}

function updateSummary() {
  const recentCutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const recent = profiles.filter(p => new Date(p.createdAt).getTime() >= recentCutoff).length;
  const locations = new Set(profiles.map(p => p.location.trim().toLowerCase()).filter(Boolean));
  document.getElementById("totalCount").textContent = profiles.length;
  document.getElementById("recentCount").textContent = recent;
  document.getElementById("locationCount").textContent = locations.size;
  document.getElementById("navCount").textContent = profiles.length;
  document.getElementById("sectionCount").textContent = profiles.length;
}

function renderProfiles() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = profiles
    .filter(p => [p.name, p.role, p.email, p.location].join(" ").toLowerCase().includes(query))
    .sort((a, b) => newestFirst
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : new Date(a.createdAt) - new Date(b.createdAt));

  if (!filtered.length) {
    grid.innerHTML = query
      ? `<div class="empty-state"><div class="empty-icon">⌕</div><strong>No matches just yet.</strong><span>Try another name, role or location.</span></div>`
      : `<div class="empty-state"><div class="empty-icon">✳</div><strong>Your people will feel at home here.</strong><span>Add your first profile to get started.</span><button class="primary-button" data-action="add">＋ Add your first person</button></div>`;
    return;
  }

  grid.innerHTML = filtered.map(profile => `
    <article class="person-card">
      <div class="card-top">
        <div class="person-avatar avatar-${escapeHTML(profile.avatarColor || "violet")}">${escapeHTML(initials(profile.name))}</div>
        <button class="card-menu" aria-label="Profile actions" title="Profile actions">···</button>
      </div>
      <h3 class="person-name">${escapeHTML(profile.name)}</h3>
      <p class="person-role">${escapeHTML(profile.role || "No role added")}</p>
      <p class="person-bio">${escapeHTML(profile.bio || "A new connection. Add a note to remember the little things.")}</p>
      <div class="person-meta">
        <div class="meta-line"><span class="meta-icon">✉</span><span>${escapeHTML(profile.email)}</span></div>
        <div class="meta-line"><span class="meta-icon">⌖</span><span>${escapeHTML(profile.location || "Location not added")}</span></div>
      </div>
      <div class="card-actions">
        <button class="small-action" data-action="edit" data-id="${profile._id}">Edit profile</button>
        <button class="small-action delete" data-action="delete" data-id="${profile._id}">Remove</button>
      </div>
    </article>
  `).join("");
}

async function loadProfiles() {
  try {
    profiles = await request(API);
    updateSummary();
    renderProfiles();
  } catch (error) {
    grid.innerHTML = `<div class="empty-state"><strong>We couldn't reach the server.</strong><span>${escapeHTML(error.message)} Check that MongoDB and the app server are running, then refresh.</span></div>`;
  }
}

function openModal(profile = null) {
  editingId = profile?._id || null;
  form.reset();
  form.elements.avatarColor.value = profile?.avatarColor || "violet";
  if (profile) {
    for (const key of ["name", "role", "email", "location", "bio"]) {
      form.elements[key].value = profile[key] || "";
    }
  }
  modalTitle.innerHTML = profile ? 'Edit profile<span class="heading-period">.</span>' : 'Add a person<span class="heading-period">.</span>';
  saveButton.innerHTML = profile ? 'Save changes <span>↗</span>' : 'Save profile <span>↗</span>';
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => form.elements.name.focus(), 50);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  editingId = null;
}

document.getElementById("addProfileBtn").addEventListener("click", () => openModal());
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("cancelModal").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("open")) closeModal(); });
searchInput.addEventListener("input", renderProfiles);

document.getElementById("sortButton").addEventListener("click", event => {
  newestFirst = !newestFirst;
  event.currentTarget.innerHTML = newestFirst ? "<span>↕</span> Newest" : "<span>↕</span> Oldest";
  renderProfiles();
});

form.addEventListener("submit", async event => {
  event.preventDefault();
  const payload = Object.fromEntries(new FormData(form).entries());
  saveButton.disabled = true;
  saveButton.textContent = "Saving...";
  try {
    await request(editingId ? `${API}/${editingId}` : API, {
      method: editingId ? "PATCH" : "POST",
      body: JSON.stringify(payload)
    });
    closeModal();
    await loadProfiles();
    showToast(editingId ? "Profile updated." : "A new person has been added.");
  } catch (error) {
    showToast(error.message, true);
  } finally {
    saveButton.disabled = false;
    saveButton.innerHTML = editingId ? 'Save changes <span>↗</span>' : 'Save profile <span>↗</span>';
  }
});

grid.addEventListener("click", async event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "add") return openModal();
  const profile = profiles.find(p => p._id === button.dataset.id);
  if (!profile) return;
  if (action === "edit") return openModal(profile);
  if (action === "delete") {
    if (!window.confirm(`Remove ${profile.name} from your people?`)) return;
    try {
      await request(`${API}/${profile._id}`, { method: "DELETE" });
      await loadProfiles();
      showToast("Profile removed.");
    } catch (error) {
      showToast(error.message, true);
    }
  }
});

loadProfiles();
