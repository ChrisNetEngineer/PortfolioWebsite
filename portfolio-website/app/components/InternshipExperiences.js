"use client";
import React, { useState } from "react";

export default function InternshipExperiences() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="">
      <h2 className="mt-20 ml-30 font-bold text-3xl">Internship Experiences</h2>
      <nav className="ml-30 mt-7">
        <ul className="space-x-8">
          <button
            className="text-white class=text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => handleTabClick("tab1")}
          >
            HummingBird Bioscience
          </button>
          <button
            className="text-white class=text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => handleTabClick("tab2")}
          >
            DSBJ
          </button>
          <button
            className="text-white class=text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => handleTabClick("tab3")}
          >
            Insightz Technology
          </button>
        </ul>
      </nav>
      <div className="content ml-33 mt-5 mb-100">
        {activeTab === "tab1" && (
          <div className="grid grid-cols-2">
            <div className="w-150">
              <h2 className="text-2xl font-bold">
                Cybersecurity Engineer @ Hummingbird BioScience
              </h2>
              <h3 className="text-xl font-bold">May 2024 - Aug 2024</h3>
              <p>
                1. Review on security alerts and mitigate discovered
                vulnerabilities
              </p>
              <p>
                2. Conducted phishing simulation training program through
                Microsoft Defender
              </p>
              <p>
                3. Conducted risk assessments to identify and mitigate potential
                risks.
              </p>
              <p>
                4. Managed Netskope SSE, FortiGate Firewall, Azure Cloud for VM
                provision
              </p>
              <p>
                5. Migrated over 50 Alcatel Stellar APs to the new site's OV2500
                NMS, performed firmware upgrade and security hardened with best
                security practices
              </p>
              <p>
                6. Designed and built bio-science lab's wireless network with
                seamless & security principles in mind (Etc. L3 Roaming &
                Logical-gapping from production network)
              </p>
            </div>
            <div>
              <img
                src="./HMBD.png"
                className="max-w-md rounded-lg shadow-md object-cover mx-auto my-4  "
              />
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="grid grid-cols-2">
            <div className="w-150">
              <h2 className="text-2xl font-bold">
                Cybersecurity Engineer @ DSBJ
              </h2>
              <h3 className="text-xl font-bold">May 2023 - Oct 2024</h3>
              <p>
                1. Performed vulnerability assessment using Nessus & patching
                for both on-premise and Alibaba cloud infrastructures' security
                loopholes
              </p>
              <p>
                2. Performed internal penetration testing for vulnerability
                research & mitigation purpose
              </p>
              <p>
                3. Enhanced Wazuh SIEM with customized correlation rules to
                detect more complex attack patterns
              </p>
              <p>
                4. Developed Shuffle SOAR Automation by integrated Wazuh SIEM
                and VirusTotal API for better threat detection
              </p>
              <p>
                5. Automated Windows 11 OS image deployment process with
                ManageEngine
              </p>
              <p>
                6. Assisted to troubleshoot QiAnXin Network Access Controller
                (NAC) system & Postfix Mail server in CentOS Linux environment
              </p>
              <p>
                7. Designed 2-Tiered enterprise network with best redundancy and
                security practices (Etc. Link Aggregation, 802.1X, NAC)
              </p>
            </div>
            <div>
              <img
                src="./dsbj.jpg"
                className="max-w-md rounded-lg shadow-md object-cover mx-auto my-4 b border-gray-200"
              />
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="grid grid-cols-2">
            <div className="w-150">
              <h2 className="text-2xl font-bold">
                Cybersecurity Engineer @ Insightz Technology
              </h2>
              <h3 className="text-xl font-bold">Aug 2020 - March 2021</h3>
              <p>
                1. Implemented TrendMicro Apex One solution in air-gapped data
                center
              </p>
              <p>
                2. Implemented Rapid7 network sensor for internal network
                monitoring & maintained Rapid7 SIEM
              </p>
              <p>
                3. Conducted vulnerability assessment with Rapid7's InsightVM &
                patching for client's production server
              </p>
              <p>
                4. Server hardening & patching for Windows & Linux server with
                CIS benchmarks
              </p>
              <p>5. Assisted SOC Manager to manage alerts investigation </p>
              <p>6. Assisted for ISO27001 compliance certified</p>
              <p>
                7. Written automation scripts in PowerShell & Bash languages{" "}
              </p>
              <p>
                8. Provided data center support to ensure 24/7 service
                availability
              </p>
            </div>
            <div className="ml-10 w-90">
              <img
                src="./InsightzTech.jpg"
                className=" rounded-lg shadow-md object-cover mx-auto my-4 "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
