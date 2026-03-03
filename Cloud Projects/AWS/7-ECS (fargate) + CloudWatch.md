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
- Simulated load → Verified metrics update in real time 🎉  

## 🖼️ Screenshots
- **ECS Cluster & Running Service**  
![ECS Cluster](https://github.com/user-attachments/assets/week7-ecs-cluster.png)

- **ECS Task Definition with CPU & Memory Settings**  
![Task Definition](https://github.com/user-attachments/assets/week7-task-definition.png)

- **CloudWatch Dashboard with CPU & Memory Widgets**  
![CloudWatch Dashboard](https://github.com/user-attachments/assets/week7-cloudwatch-dashboard.png)

- **Optional: Metrics Under Simulated Load**  
![Metrics Under Load](https://github.com/user-attachments/assets/week7-metrics-load.png)

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
