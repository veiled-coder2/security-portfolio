# Week 9 – Custom Domain + CloudFront + SSL (ACM)

## 🎯 Objective
Connect a **custom domain** to your **S3 static website** using **AWS Route 53**, **CloudFront**, and **ACM SSL certificate**:  

- Register a free or paid domain.  
- Create a **Route 53 hosted zone** and update your domain’s **nameservers**.  
- Set up a **CloudFront distribution** to serve your S3 static website.  
- Request a **free SSL certificate** using **AWS Certificate Manager (ACM)** with **DNS validation** via Route 53.  
- Attach the certificate to CloudFront and confirm your site loads securely over **HTTPS**.  
- If a custom domain is unavailable, simulate the steps and explain your approach.

## 📦 Deliverables (Screenshots)
- 🏷️ Route 53 hosted zone configuration  
- 🔑 Validated SSL certificate in **ACM**  
- 🌐 CloudFront distribution settings with your **custom domain** and SSL certificate  
- 🖥️ Website loading over **HTTPS**  
- ⚡ Optional: Explanation if using a simulated domain  

## ✅ Completion Summary
- Registered or simulated a custom domain  
- Created **Route 53 hosted zone** → Updated nameservers  
- Requested **ACM certificate** with DNS validation → Verified certificate validation  
- Created CloudFront distribution → Attached SSL certificate → Configured custom domain  
- Confirmed website loads securely over **HTTPS** 🎉  

## 🖼️ Screenshots

- **Route 53 Hosted Zone**
  
<img width="1353" height="582" alt="Route53 Hosted zone" src="https://github.com/user-attachments/assets/7040c2bd-d394-4706-8eea-b7c6130c8154" />

- **Validated SSL Certificate in ACM**  

<img width="1359" height="324" alt="validated ssl certificate" src="https://github.com/user-attachments/assets/772edbf4-9964-4df8-8315-0c9a533867b5" />

- **CloudFront Distribution with Custom Domain & SSL**
  
<img width="1349" height="615" alt="CloudFrontSettings" src="https://github.com/user-attachments/assets/ebc95249-b889-4e63-8458-8c726b1fce3c" />

- **Website Loading Over HTTPS**
  
<img width="1347" height="665" alt="Screenshot 2025-08-11 125550" src="https://github.com/user-attachments/assets/53545d9d-d0f7-43d5-abf9-910b40f4f37b" />

## 🧭Steps (Brief)
1. Register a domain (or simulate one)  
2. Create **Route 53 hosted zone** → Update domain nameservers  
3. Request **ACM certificate** → Validate via DNS in Route 53  
4. Create **CloudFront distribution** → Set S3 bucket as origin → Attach SSL certificate  
5. Configure distribution → Wait for deployment → Verify website loads via **HTTPS**  

## 🔒 Security Notes
- Always use **HTTPS** for secure content delivery  
- Validate SSL using **DNS validation** instead of email for easier automation  
- Avoid exposing S3 bucket directly; serve through CloudFront  

## 🧪 Validation
- Route 53 hosted zone exists and points to domain ✅  
- SSL certificate is validated in ACM ✅  
- CloudFront distribution has custom domain + SSL attached ✅  
- Website accessible over HTTPS ✅  
- If simulated, steps are logically explained ✅
