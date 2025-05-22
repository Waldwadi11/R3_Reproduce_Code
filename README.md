# R3_Reproduce_Code
This project reproduces a fileless malware attack based on the paper 'JSLess: A Tale of Fileless JavaScript Memory-Resident Malware'. The setup involves two servers: a legitimate server and a malicious server, both developed using Node.js.
# Steps:
•	Install Node.js (v14.x or later) and npm (v6.x or later).
•	Clone the repository: git clone <repository-url>.
•	Navigate to the legitimate server: cd legitimate-server.
•	Initialize and install dependencies: npm init -y and npm install express ejs ws.
•	Start the legitimate server: node app.js (runs on http://localhost:3000).
•	Navigate to the malicious server: cd malicious-server.
•	Install dependencies: npm init -y and npm install express ws.
•	Start the malicious server: node mal-server.js (runs on ports 5000 and 5001).
# Verify IP Addresses
•	On your system, use ipconfig or ifconfig to verify both servers are on the same network.
•	Ensure ports 3000, 5000, and 5001 are not blocked by the firewall.
 # Functionality Verification
•	Open http://localhost:3000 in your browser.
•	Type sample input to simulate keystrokes.
•	Verify keystrokes are logged in keyLog.txt on the malicious server.
•	Verify cookies are logged in cookieLog.txt.
Scenario 3: ServiceWorker Persistence
•	ServiceWorker is registered via WebSocket delivery.
•	Allows continued background communication even after the browser is closed.
•	Verify persistence by inspecting network activity and file logs after closing the browser.
# Troubleshooting
•	Ensure the correct Node.js version is installed.
•	Run npm install in each server directory if dependencies are missing.
•	Change default ports if already in use.
•	Check firewall settings to allow traffic on ports 3000, 5000, and 5001.

This R3 project successfully replicates a fileless malware framework that uses JavaScript, WebSockets, and ServiceWorker APIs. It demonstrates the stealth and persistence of modern web-based malware, which bypasses traditional file-based detection methods.
