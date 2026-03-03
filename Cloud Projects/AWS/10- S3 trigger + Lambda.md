# Week 10 – S3 Event Trigger + AWS Lambda Automation

## 🎯 Objective
Create an **Amazon S3 bucket** that automatically triggers an **AWS Lambda function** whenever a new file is uploaded.

The Lambda function should respond to the event by performing a simple action such as:
- Printing the uploaded file name  
- Writing a message to **CloudWatch Logs**  
- Sending a confirmation email using **Amazon SES**

## 📦 Deliverables (Screenshots)
- 🗂️ S3 bucket showing **event notification trigger** connected to Lambda  
- ⚙️ Lambda function code or configuration settings  
- 📜 Proof of execution (CloudWatch Logs or SES email confirmation)

## ✅ Completion Summary
- Created S3 bucket for file uploads  
- Created Lambda function with required execution role  
- Configured S3 Event Notification → Trigger type: **ObjectCreated (All)**  
- Uploaded test file to S3 bucket  
- Verified Lambda execution via **CloudWatch Logs** (or received SES email) 🎉  

## 🖼️ Screenshots
- **S3 Bucket Event Trigger Configuration**
  
<img width="1352" height="228" alt="s3triggerconnecttolamda" src="https://github.com/user-attachments/assets/221d5d35-026c-4fb6-bf19-428629a7abd4" />

- **Lambda Function Code / Configuration**
  
<img width="1364" height="580" alt="lambdacode" src="https://github.com/user-attachments/assets/854cf728-ba69-4fd1-b3ca-0e05ff99e5e6" />

- **CloudWatch Logs Showing Successful Execution**
  
<img width="1366" height="665" alt="cloudwatchlog" src="https://github.com/user-attachments/assets/f63f3572-a781-4623-88e5-6ca8adff7716" />

- **Optional: SES Email Confirmation**
  
<img width="1341" height="589" alt="emailconfirm" src="https://github.com/user-attachments/assets/c55e1509-6c13-4708-84cf-11c5c5bc068c" />

## 🧭 Steps (Brief)
1. Create an S3 bucket  
2. Create a Lambda function (Python/Node.js runtime)  
3. Assign IAM Role with permissions for:
   - CloudWatch Logs
   - (Optional) Amazon SES  
4. Configure S3 → Event Notifications → Trigger Lambda on **ObjectCreated**  
5. Upload a test file to the bucket  
6. Check CloudWatch Logs (or email inbox) to confirm execution  

## 🔒 Security Notes
- Use IAM roles with least privilege principle  
- Restrict S3 bucket permissions appropriately  
- Verify SES is out of sandbox mode if sending emails externally  
- Enable CloudWatch logging for monitoring and troubleshooting  

## 🧪 Validation
- S3 event trigger correctly linked to Lambda ✅  
- Lambda function executes upon file upload ✅  
- CloudWatch log entry or SES email confirms execution ✅  
