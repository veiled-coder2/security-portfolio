

# 🔎 Nmap TCP Port Scan Lab

> A hands-on cybersecurity lab demonstrating TCP port scanning, service detection, and operating system fingerprinting using Nmap.


# 🎯 Objective

Perform a TCP port scan against a Linux target machine using Nmap to identify:

- 🔓 Open TCP ports
- 🌐 Running services
- 💻 Operating system
- 🔍 Service versions

---

# 🖥️ Lab Environment

## 🛡️ Attacker Machine

- 🐉 Kali Linux
- 🔎 Nmap

## 🎯 Target Machine

- 🟠 Ubuntu Desktop
- 🔐 OpenSSH Server
- 🌍 Apache2 Web Server

---

# ⚙️ Target Preparation

Started the required services on the Ubuntu target.

```bash
sudo systemctl start ssh
sudo systemctl start apache2
```

Verified they were listening on their default ports.

### 🔐 SSH

```bash
sudo ss -tln | grep :22
```

### 🌍 Apache

```bash
sudo ss -tln | grep :80
```

---

# ✅ Local Validation

Verified that the services were detectable from the target machine itself.

```bash
nmap 127.0.0.1
```

Expected output:

```text
22/tcp open ssh
80/tcp open http
```

---

# 🌐 Target IP Address

Example:

```text
10.0.2.15
```

---

# 🔍 Scans Performed

## 1️⃣ TCP Connect Scan

```bash
nmap -v -sT 10.0.2.15
```

**Purpose**

- Performs a complete TCP three-way handshake.
- Identifies open TCP ports.

---

## 2️⃣ TCP SYN Scan

```bash
sudo nmap -sS 10.0.2.15
```

**Purpose**

- Uses SYN packets.
- Faster and stealthier than a TCP Connect Scan as it doesnt complete the three-way handshake.

---

## 3️⃣ Service Detection

```bash
sudo nmap -sV 10.0.2.15
```

**Purpose**

- Detects running services and their versions.

---

## 4️⃣ OS Detection

```bash
sudo nmap -A 10.0.2.15
```

**Purpose**

- Detects the operating system.
- Performs service detection, default NSE scripts, and traceroute.

---

## 5️⃣ Full TCP Port Scan

```bash
nmap -p- <TARGET_IP>
```

**Purpose**

- Scans all 65,535 TCP ports.

---

# 📊 Results

Successfully identified the following services:

| Port | State | Service |
|:----:|:-----:|:-------:|
| 🔐 22 | ✅ Open | SSH |
| 🌍 80 | ✅ Open | HTTP (Apache2) |

---

# 🛠️ Skills Demonstrated

- 🐧 Linux Administration
- ⚙️ Service Management
- 🌐 Network Enumeration
- 🔎 TCP Port Scanning
- 📡 Service Detection
- 💻 OS Fingerprinting
- 🛡️ Cybersecurity Fundamentals

---


# 🎥 Video Demonstration

A screen recording demonstrating the exercise is available **[HERE](https://youtu.be/Md9sCUgyn1E)**.



https://github.com/user-attachments/assets/26618af8-a857-4f57-8ef7-199b70ebc17a



⭐ **This lab was completed as part of my hands-on cybersecurity learning journey and demonstrates practical experience with network reconnaissance and TCP port scanning.**



