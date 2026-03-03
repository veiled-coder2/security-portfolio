# Week 5 – Grafana ECS Deployment

🎯 **Objective**  
Deploy Grafana using Amazon ECS with Fargate. Use the official Docker image `grafana/grafana`, create a task definition that exposes **port 3000**, and run it in a public subnet. Ensure the security group allows inbound traffic on port 3000. Access Grafana via `http://<PUBLIC-IP>:3000` and verify the login page.

📦 **Deliverables (Screenshots)**  
- 🏷️ ECS Cluster with running service  
- 🔢 Task definition using `grafana/grafana` image  
- 🔒 Security Group rule allowing **port 3000** inbound  
- 🌐 Grafana login page in the browser  

✅ **Completion Summary**  
- Created ECS Cluster with Fargate launch type  
- Defined Task Definition exposing port 3000 and using `grafana/grafana` image  
- Configured Security Group for inbound TCP 3000 access  
- Launched Service/Task in a public subnet  
- Verified Grafana login page with default credentials  
  - Username: `admin`  
  - Password: `admin`  

🖼️ **Screenshots**  
- ECS Cluster and running service
  <img width="1349" height="640" alt="ecsCluster-serviceRunning" src="https://github.com/user-attachments/assets/917c4595-37fc-45b2-b650-7a1c78fe14e7" />

- Task definition showing `grafana/grafana` image and port mapping
 <img width="1342" height="646" alt="taskDefinition-grafanaImage" src="https://github.com/user-attachments/assets/d5fab014-5096-4706-9186-499e2cf2936b" />

- Security Group inbound rule for port 3000
  <img width="1345" height="635" alt="securityGroup" src="https://github.com/user-attachments/assets/39545ebf-df47-426d-a033-078b31b2cecf" />

- Grafana login page  
<img width="1354" height="674" alt="grafana-login-page" src="https://github.com/user-attachments/assets/d94df14b-8f69-4ae9-b28f-12b6debe4e52" />

🧭 **Steps (Brief)**  
1. Create ECS Cluster → Fargate launch type  
2. Create Task Definition → Container: `grafana/grafana` → Expose port 3000  
3. Create Service → Select public subnet, assign Security Group  
4. Security Group → Add inbound rule TCP 3000 from your IP or 0.0.0.0/0 (for testing)  
5. Launch Service → Verify task is running  
6. Open browser → `http://<PUBLIC-IP>:3000` → Grafana login  

🔒 **Security Notes**  
- Limit inbound traffic to your IP if possible  
- Consider using HTTPS or reverse proxy for production access  
- Do not leave port 3000 open to the entire Internet in real deployments  

🧪 **Validation**  
- ECS Cluster and Service running without errors  
- Task definition correctly uses `grafana/grafana` and exposes port 3000  
- Security Group allows inbound traffic on port 3000  
- Grafana login page loads in the browser and accepts default credentials
