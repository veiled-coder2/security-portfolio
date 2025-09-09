# 🖥️ DDoS Incident Report – NIST Cybersecurity Framework (CSF)

## **1. Summary**

A multimedia company experienced a **DDoS attack** flooding ICMP packets into the network, causing internal services to stop for two hours.  
The attack exploited an unconfigured firewall. Mitigation included blocking ICMP traffic, restoring critical services, and implementing firewall rules, IP verification, monitoring, and IDS/IPS filtering.

---

## **2. NIST CSF Analysis**

| Function        | Description                                           | Analyst Actions                                                                                                                                                               |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🔍 Identify** | Recognize critical assets, vulnerabilities, and risks | - Conduct regular network audits<br>- Identify misconfigured firewalls<br>- Document gaps in access controls                                                                  |
| **🛡️ Protect**  | Implement safeguards to limit impact                  | - Apply firewall rules and ICMP rate limiting<br>- Enforce access controls and IP verification<br>- Train staff on secure configurations<br>- Maintain backups and redundancy |
| **👁️ Detect**   | Discover incidents quickly                            | - Deploy network monitoring tools<br>- Configure IDS/IPS alerts<br>- Analyze logs for anomalies                                                                               |
| **⚡ Respond**  | Contain and mitigate incidents                        | - Block malicious traffic<br>- Restore critical services first<br>- Conduct post-incident analysis<br>- Update incident response playbooks                                    |
| **🔄 Recover**  | Restore systems and implement improvements            | - Return network systems to normal operation<br>- Restore affected data/services<br>- Implement stronger controls<br>- Communicate findings to stakeholders                   |

---

## **3. Reflections / Notes**

- The incident reinforced the importance of **proactive network monitoring**.
- Misconfigured firewalls are **common vulnerabilities**—regular audits are essential.
- Implementing **NIST CSF systematically** improves visibility, response times, and overall security posture.
- Lessons learned can feed into **SOC playbooks and future DDoS mitigation strategies**.
