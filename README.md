# R3_Reproduce_Code
## Scenario 1: Setup and Execution

This project reproduces a fileless malware attack based on the paper 'JSLess: A Tale of Fileless JavaScript Memory-Resident Malware'. The setup involves two servers: a legitimate server and a malicious server, both developed using Node.js.

### Steps:

1. Install Node.js (v14.x or later) and npm (v6.x or later)  
2. Clone the repository:  
   git clone <repository-url>  
3. Navigate to the legitimate server:  
   cd legitimate-server  
4. Initialize and install dependencies:  
   npm init -y  
   npm install express ejs ws  
5. Start the legitimate server:  
   node app.js  
   (Runs on http://localhost:3000)  
6. Navigate to the malicious server:  
   cd malicious-server  
7. Install dependencies:  
   npm init -y  
   npm install express ws  
8. Start the malicious server:  
   node mal-server.js  
   (Runs on ports 5000 and 5001)  
9. Verify IP Addresses:  
   Use ipconfig or ifconfig to confirm both servers are on the same network  
10. Check firewall settings:  
    Ensure ports 3000, 5000, and 5001 are not blocked  

## Scenario 2: Functionality Verification

Open http://localhost:3000 in your browser  
Type sample input to simulate keystrokes  
Verify keystrokes are logged in keyLog.txt on the malicious server  
Verify cookies are logged in cookieLog.txt  

## Scenario 3: ServiceWorker Persistence

ServiceWorker is registered via WebSocket delivery  
Allows continued background communication after the browser is closed  
Verify persistence by checking network activity and file logs after browser is closed  

## Troubleshooting

Ensure the correct Node.js version is installed  
Run npm install in each server directory if dependencies are missing  
Change default ports if already in use  
Allow traffic on ports 3000, 5000, and 5001 through the firewall  

## Summary

This R3 project successfully replicates a fileless malware framework that uses JavaScript, WebSockets, and ServiceWorker APIs.  
It demonstrates the stealth and persistence of modern web-based malware that bypasses traditional file-based detection methods.

