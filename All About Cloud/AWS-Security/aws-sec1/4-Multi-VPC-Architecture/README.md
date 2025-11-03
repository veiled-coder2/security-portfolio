
# Week 4 – Multi-VPC Architecture

🎯 **Objective**
Create two separate VPCs in your AWS environment to simulate a multi-VPC architecture. Configure VPC-A with CIDR block `10.10.0.0/16` and VPC-B with `10.20.0.0/16`. In each VPC, create one public subnet and one private subnet (no Internet or NAT Gateways required). Establish a VPC peering connection between the two VPCs and update the route tables to allow traffic to flow between them via the peering connection.

📦 **Deliverables (Screenshots)**

* 🏷️ VPC Name tags clearly showing VPC-A and VPC-B
<img width="1360" height="570" alt="VPC-A(cidr + subnets)" src="https://github.com/user-attachments/assets/d8aa34fb-db44-471c-9ccc-0aa95596d502" />
<img width="1357" height="576" alt="VPC-B(cidr+subnets)" src="https://github.com/user-attachments/assets/115f87a9-410c-41d7-9f21-52a37952f24c" />


* 🔢 CIDR blocks for each VPC visible
* 🌐 Public and private subnets in each VPC
PRIVATE
<img width="1364" height="401" alt="private-RT-vpc-a-TO-VPC-b-cidr" src="https://github.com/user-attachments/assets/62a818aa-ae00-4e54-b655-912e8448a919" />
<img width="1364" height="423" alt="private-RT-vpc-b-TO-VPC-a-cidr" src="https://github.com/user-attachments/assets/7d53b65e-8547-4749-9843-dbe795df1bd1" />
PUBLIC
<img width="1365" height="403" alt="public-RT-vpc-a-TO-VPC-b-cidr" src="https://github.com/user-attachments/assets/008aa021-dd9a-443a-ae3c-f90fb6324f34" />
<img width="925" height="351" alt="public-RT-vpc-b-TO-VPC-a-CIDR" src="https://github.com/user-attachments/assets/ec4408db-ce51-4a9a-b4b5-afe045852d0f" />

  
* 🔗 VPC peering connection in **Active** status
  <img width="1361" height="221" alt="Active-status-peering" src="https://github.com/user-attachments/assets/09820499-933a-4424-9827-f063312e03b9" />

* 🛣️ Route tables showing routes pointing to the other VPC’s CIDR block through the peering connection
<img width="1365" height="403" alt="public-RT-vpc-a-TO-VPC-b-cidr" src="https://github.com/user-attachments/assets/e2b8d03e-fde2-4916-95ae-9cbe46a9edc9" />
<img width="925" height="351" alt="public-RT-vpc-b-TO-VPC-a-CIDR" src="https://github.com/user-attachments/assets/87477f05-e6c6-4b82-ba4c-4886e2341048" />

✅ **Completion Summary**

* Created **VPC-A (10.10.0.0/16)** and **VPC-B (10.20.0.0/16)**.
* Configured **public and private subnets** in each VPC.
* Established **VPC peering connection** between VPC-A and VPC-B.
* Updated **route tables** in both VPCs to allow communication via the peering connection.

🖼️ **Screenshots**

* VPCs with CIDR blocks
* Subnets in each VPC (public and private)
* VPC peering connection showing **Active** status
* Route tables showing routes to the other VPC via the peering connection

🧭 **Steps (Brief)**

1. Create VPC-A → CIDR 10.10.0.0/16
2. Create VPC-B → CIDR 10.20.0.0/16
3. In each VPC, create **one public subnet** and **one private subnet**
4. Establish **VPC peering connection** between VPC-A and VPC-B
5. Update **route tables** in each VPC to route traffic to the other VPC via peering
6. Verify connectivity and peering status

🔒 **Security Notes**

* No public Internet/NAT required for this task.
* Ensure subnets are properly tagged as **Public** or **Private**.
* Avoid overly permissive routing; routes should only point to the peered VPC CIDR blocks.

🧪 **Validation**

* Both VPCs exist with correct CIDRs
* Public and private subnets correctly created
* VPC peering connection is **Active**
* Route tables show correct routes for inter-VPC communication




