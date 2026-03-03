# Week 7 – ECS Fargate Container + CloudWatch Monitoring

## 🎯 Objective
Deploy a **simple containerized application** (e.g., **Nginx** or `grafana/grafana`) on **Amazon ECS** using the **Fargate** launch type.  
Use appropriate **CPU and memory** settings for the task and place it in a **public subnet**.  
Create a **CloudWatch dashboard** with **CPUUtilization** and **MemoryUtilization** widgets to monitor the ECS task in real time.  
Simulate load (refresh or stress test) to observe metric changes.

## 📦 Deliverables (Screenshots)
- 🏷️ ECS Cluster & Running Service  
- 🔢 ECS Task Definition showing CPU & Memory settings  
- 📊 CloudWatch Dashboard with CPU & Memory widgets  
- ⚡ Optional: Metrics showing changes under simulated load  

## ✅ Completion Summary
- Created ECS Cluster (Fargate launch type) in a public subnet  
- Defined ECS Task with chosen container image (`nginx` or `grafana/grafana`) and CPU/memory configuration  
- Launched ECS Service → Task status = **RUNNING**  
- Created CloudWatch Dashboard → Added **CPUUtilization** and **MemoryUtilization** widgets  
- Show Grafana dashboard 🎉  

## 🖼️ Screenshots
- **ECS Cluster & Running Service**  
<img width="1358" height="622" alt="ecs cluster running services" src="https://github.com/user-attachments/assets/20d46af6-fda9-4bd3-9921-d896caf99711" />


- **ECS Task Definition with CPU & Memory Settings**  


<img width="1362" height="587" alt="task definition cpu memory" src="https://github.com/user-attachments/assets/50c36883-7a2c-429a-8e1d-93ea49524585" />

- **CloudWatch Dashboard with CPU & Memory Widgets**
  
  <img width="1366" height="620" alt="memory+cpu utilization" src="https://github.com/user-attachments/assets/a960ed40-a9bc-47e9-bd16-f4237a3b5b5a" />


- **Grafana dashboard**
  
<img width="1353" height="666" alt="grafana" src="https://github.com/user-attachments/assets/26914b12-5b99-4599-ab9d-2fc834e7625a" />


## 🧭 Steps (Brief)
1. Create ECS Cluster (Fargate launch type) in a **public subnet**  
2. Define ECS Task → Container Image: `nginx` / `grafana/grafana` → Set CPU & Memory  
3. Create ECS Service → Launch Task → Verify **RUNNING** status  
4. Open CloudWatch → Create Dashboard → Add Widgets: **CPUUtilization** & **MemoryUtilization**  
5. Simulate load → Refresh app or run stress test → Observe metrics update in real time  

## 🔒 Security Notes
- Place ECS Service in **public subnet** with proper security group rules for HTTP/HTTPS access  
- Ensure task credentials or secrets are stored securely (e.g., AWS Secrets Manager)  
- Enable CloudWatch logging for debugging and monitoring  

## 🧪 Validation
- ECS Cluster and Service status = Running ✅  
- Task Definition CPU/Memory = Correct ✅  
- CloudWatch widgets updating in real time ✅  
- Optional: Metrics respond to simulated load ✅
