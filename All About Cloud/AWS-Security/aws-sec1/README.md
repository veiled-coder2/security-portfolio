![cloudsecnetwork_logo](https://github.com/user-attachments/assets/fcf78e3a-d7d6-44ad-a405-4d4d87f49050)

# AWS-Infrastructure-Projects

This repo documents my hands-on work across **identity, compute, networking, containers, databases, monitoring, CDN/SSL, and serverless** on AWS.

---

## 📅 Identity & Access

- 🔑 Set up **AWS IAM Identity Center**, created a user, and assigned a permission set to enable role-based access.

## 📅 Windows EC2 & Secure Access

- 💻 Launched a **Windows EC2** instance, restricted **RDP (3389)** to my public IP only, and verified Remote Desktop connectivity.

## 📅 VPC Peering & Routing

- 🌐 Built two **VPCs** with CIDR blocks, created a **VPC Peering** connection (Active), and updated **route tables** to enable inter-VPC communication.

## 📅 ECS + Grafana

- 📊 Deployed **Grafana** on **Amazon ECS** with a task definition and security group allowing port **3000**, then confirmed access via the Grafana login page.

## 📅 RDS + Metabase

- 🗄️ Provisioned **Amazon RDS for PostgreSQL**, connected **Metabase** to RDS, and ensured SG rules allowed ECS → RDS on port **5432**.

## 📅 Observability with CloudWatch

- 📈 Tuned ECS task CPU/memory settings and created a **CloudWatch dashboard** with CPU/memory widgets; observed metric changes under simulated load.

## 📅 Static Website (S3 + CloudFront)

- 🌍 Enabled **S3 static website hosting**, set a permissive bucket policy for public read, configured a **CloudFront** distribution, and verified the live site via the distribution domain.

## 📅 Certificates & DNS Constraint

- 🔒 Requested an **ACM certificate** (us-east-1) using **email validation** due to DNS limits on my registrar (couldn’t add Route 53 records / change NS at desec.io). Certificate issued after approval.

## 📅 Custom Domain over HTTPS

- 🌐 Pointed a **CNAME** at the CloudFront default domain, added **Alternate Domain Name** for my subdomain, and served the static site over HTTPS using the wildcard certificate.

## 📅 Event-Driven (S3 → Lambda → SES)

- ⚡ Wired an **S3 event trigger** to **Lambda**, configured function code/settings, and verified execution via **CloudWatch logs** / **SES email** receipt.

---

## 🔑 Key Skills

- 🔐 IAM / Identity Center
- 💻 EC2 & Security Groups
- 🌐 VPC design, peering, routing
- 📦 ECS services & task definitions
- 🗄️ RDS (PostgreSQL) integration
- 📈 CloudWatch dashboards and metrics
- 🌍 S3 static hosting, CloudFront CDN, HTTPS/ACM
- ⚡ Serverless: S3 events, Lambda, SES

---

## 📂 Artifacts

This repo includes weekly notes and screenshots demonstrating:

- ✅ Configuration
- ✅ Security hardening
- ✅ Validation steps for each lab
