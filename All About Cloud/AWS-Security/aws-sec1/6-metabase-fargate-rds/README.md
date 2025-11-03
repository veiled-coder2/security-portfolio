# Week 6 – Metabase ECS + RDS Deployment  

🎯 **Objective**  
Deploy **Metabase** on **Amazon ECS** using the **Fargate** launch type and connect it to a **PostgreSQL** database hosted on **Amazon RDS**.  
Use the official Docker image `metabase/metabase`, configure environment variables for DB connectivity, and ensure both ECS and RDS are in the same **VPC**.  
Allow inbound traffic on **port 5432** from ECS to RDS for database communication.  

📦 **Deliverables (Screenshots)**  
- 🏷️ RDS PostgreSQL instance details (endpoint + status)  
- 🔢 ECS Task Definition using `metabase/metabase` image and environment variables  
- 🛡️ Security Group rules allowing inbound **5432** from ECS SG  
- 🌐 Metabase setup screen showing successful database connection  

✅ **Completion Summary**  
- Created RDS PostgreSQL instance in same VPC as ECS  
- Configured Security Groups to allow ECS → RDS on TCP 5432  
- Defined ECS Task with `metabase/metabase` Docker image and env variables for RDS connection  
- Launched Fargate Service and verified task status = **RUNNING**  
- Connected Metabase to RDS and confirmed successful setup 🎉  

🖼️ **Screenshots**  
- RDS PostgreSQL Instance Details  
<img width="1366" height="604" alt="RDS PostgreSQL instace details" src="https://github.com/user-attachments/assets/dc07a7a1-3a74-417e-99d9-2e576b6911a2" />

- ECS Task Definition with Metabase Image and Env Variables  
 <img width="1359" height="602" alt="taskDefinitions" src="https://github.com/user-attachments/assets/bade98d9-d675-4aff-ba9e-37ea50646624" />

- Running services
   <img width="1342" height="563" alt="running services" src="https://github.com/user-attachments/assets/bba3b8c5-1ec3-4d2f-9271-15d533fa2821" />
- Security Group Inbound Rule for Port 5432  
<img width="1340" height="569" alt="security rules" src="https://github.com/user-attachments/assets/6ceff5e6-ead4-464b-96a9-e7da68828c1e" />
 
- Metabase Setup Screen → Successful DB Connection  
 <img width="1361" height="645" alt="metabaseSetuppage" src="https://github.com/user-attachments/assets/edb49ef8-9ee5-4098-af9c-27744b37387d" />

🧭 **Steps (Brief)**  
1. Create RDS PostgreSQL → note endpoint & credentials  
2. Create ECS Cluster (Fargate launch type)  
3. Define Task → Container Image: `metabase/metabase` → Add DB env variables  
4. Create Service → Attach ECS Security Group + place in same VPC as RDS  
5. Configure RDS SG → Inbound TCP 5432 from ECS SG  
6. Launch Service → Open Metabase UI → Enter DB details → Verify success  

🔒 **Security Notes**  
- Restrict port 5432 access to only ECS Security Group (no public exposure)  
- Store credentials in AWS Secrets Manager for production  
- Enable CloudWatch logging to monitor task and DB connectivity  

🧪 **Validation**  
- RDS instance status = Available ✅  
- ECS Task status = Running ✅  
- Security Group rules correct ✅  
- Metabase connected successfully and dashboard loaded 🚀  
