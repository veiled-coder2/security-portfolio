# 📅 Week 3 – Windows EC2 with Secure RDP

## 🎯 Objective
Launch a **Windows Server** EC2 instance (Windows Server 2019 Base or later) in a **public subnet**, and secure it so **RDP (3389)** is allowed **only from my public IP**. Tag the instance:
``CSNBootcamp-Week3``.

## 📦 Deliverables (Screenshots)
- 🏷️ EC2 **Name tag** set to `CSNBootcamp-Week3`
- 🔐 **Security Group** inbound rule: RDP (3389) → **My IP** only
- 💻 Successful **RDP connection** to the instance

## ✅ Completion Summary
- Launched **t3/t2** Windows Server instance using **Amazon Windows Server 2019 Base AMI (or later)**.
- Subnet: **Public** (instance has a public IPv4 + route to Internet Gateway).
- Security Group: **RDP 3389** source set to **My IP** (not 0.0.0.0/0).
- Added tag: **Name = CSNBootcamp-Week3**.
- Connected via **Remote Desktop** using the public IP/DNS and the decrypted Administrator password.

## 🖼️ Screenshots


- <img width="1360" height="717" alt="WEEK3" src="https://github.com/user-attachments/assets/2671a1b6-3262-440c-9585-be8cd424419c" />


## 🧭 Steps (Brief)
1. **Launch Instance** → Choose **Windows Server 2019 Base** AMI (or later) → pick **t3.micro** (or assigned size).
2. **Network** → VPC public subnet; enable **Auto-assign public IP**.
3. **Security Group** → Add inbound **RDP (3389)** with source **My IP**.
4. **Tags** → `Name=CSNBootcamp-Week3`.
5. **Key Pair** → create/select; after launch, use **Get Windows Password** with the key to decrypt.
6. **RDP** → Connect using public IPv4/DNS and the Administrator password.

## 🔒 Security Notes
- Use **My IP** for RDP during testing; remove or switch to **VPN/Bastion** afterward.
- Enable **MFA** on the AWS account, and consider **Session Manager** for future access.

## 🧪 Validation
- Instance **state: running**, reachable via RDP.
- **Security Group** shows only **TCP/3389** from your single public IP.
- Tag **CSNBootcamp-Week3** visible in the EC2 console list and details.

