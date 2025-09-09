# 🖥️ DDoS Incident Report – NIST Cybersecurity Framework (CSF)

## **1. Summary**

A multimedia company experienced a **DDoS attack** flooding ICMP packets into the network, causing internal services to stop for two hours.  
The attack exploited an unconfigured firewall. Mitigation included blocking ICMP traffic, restoring critical services, and implementing firewall rules, IP verification, monitoring, and IDS/IPS filtering.

---

## **2. NIST CSF Analysis**

| Function        | Description                                           | Analyst Actions                                                                                                                                                                                          |
| --------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🔍 Identify** | Recognize critical assets, vulnerabilities, and risks | - Map **critical assets** (servers, applications, network devices) that could be affected.<br>- Identify misconfigured firewalls<br>- - Document gaps in **access controls** and firewall configurations |
| **🛡️ Protect**  | Implement safeguards to limit impact                  | - Apply **firewall rules** and ICMP rate limiting to prevent overwhelming traffic.                                                                                                                       |

- Enforce **access control policies** and verify source IPs to prevent spoofing.
- Train staff on **secure network configurations** and incident recognition.
- Maintain **backup and redundancy systems** to ensure continuity. |
  | **👁️ Detect** | Discover incidents quickly | - Deploy network monitoring tools<br>- Configure IDS/IPS alerts<br>- Analyze logs for anomalies |
  | **⚡ Respond** | Contain and mitigate incidents | - Block malicious traffic<br>- Restore critical services first<br>- Conduct post-incident analysis<br>- Update incident response playbooks |
  | **🔄 Recover** | Restore systems and implement improvements | - Return network systems to normal operation<br>- Implement improvements such as **automated traffic filtering**, better firewall configurations, and continuous monitoring.<br>- Share findings with **stakeholders** to improve transparency and security posture. |

---

## **3. Reflections / Notes**

- The incident reinforced the importance of **proactive network monitoring**.
- Misconfigured firewalls are **common vulnerabilities**—regular audits are essential.
- Implementing **NIST CSF systematically** improves visibility, response times, and overall security posture.
- Lessons learned can feed into **SOC playbooks and future DDoS mitigation strategies**.
