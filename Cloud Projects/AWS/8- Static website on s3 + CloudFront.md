# Week 8 – Static Website on S3 + CloudFront

## 🎯 Objective
Deploy a **personal static website** (e.g., resume, portfolio, or "About Me" page) using **Amazon S3** and **CloudFront**.  

- Upload your HTML, CSS, and assets to an **S3 bucket**.  
- Enable **static website hosting** on the bucket.  
- Configure the bucket for **public access** by adding the appropriate **bucket policy**.  
- Set up a **CloudFront distribution** using the S3 bucket as its origin to securely deliver your content.

## 📦 Deliverables (Screenshots)
- 🗂️ S3 bucket configuration showing **static website hosting enabled**  
- 🔑 S3 bucket **policy** allowing public access  
- 🌐 CloudFront distribution settings and deployment status  
- 🖥️ Live website as accessed through the **CloudFront domain**

## ✅ Completion Summary
- Created S3 bucket and uploaded HTML, CSS, and asset files  
- Enabled **static website hosting** on the bucket  
- Added **bucket policy** to allow public access  
- Created CloudFront distribution → Set S3 bucket as origin  
- Verified CloudFront deployment → Live website accessible via CloudFront domain 🎉

## 🖼️ Screenshots
- **S3 Bucket Configuration (Static Website Hosting Enabled)**  
<img width="1357" height="572" alt="staticSiteEnabled" src="https://github.com/user-attachments/assets/a86caa99-b994-47d8-8b3c-99fffe9e9b8b" />

- **S3 Bucket Policy for Public Access**  
<img width="1365" height="621" alt="policy publicAccess" src="https://github.com/user-attachments/assets/0186e42e-197d-4d67-a62c-dddbba4b997a" />

- **CloudFront Distribution Settings & Deployment Status**  
<img width="1363" height="598" alt="cloudDistrutionDash" src="https://github.com/user-attachments/assets/c229b339-6ad1-4c69-b41e-6b704665bd97" />

- **Live Website via CloudFront Domain**

<img width="1366" height="666" alt="cloudfrontSite" src="https://github.com/user-attachments/assets/4b3e4c44-c0dd-4788-a049-bfa1c1b1f512" />


## 🧭 Steps (Brief)
1. Create an S3 bucket → Upload HTML, CSS, and assets  
2. Enable **static website hosting** on the bucket  
3. Add **bucket policy** to allow public read access  
4. Create **CloudFront distribution** → Set S3 bucket as origin  
5. Wait for CloudFront deployment → Verify website accessible via CloudFront domain  

## 🔒 Security Notes
- Only allow **public read access** through bucket policy (avoid making bucket fully public otherwise)  
- Use CloudFront to **securely deliver content** and improve performance  
- Enable **logging** on CloudFront for monitoring access  

## 🧪 Validation
- S3 bucket shows **static website hosting enabled** ✅  
- Bucket policy allows **public access** ✅  
- CloudFront distribution status = **Deployed** ✅  
- Live website accessible via CloudFront domain ✅
