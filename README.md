# Node.js Server Startup Log Issue

This repository demonstrates a common, yet easily overlooked, error in Node.js HTTP server development: the absence of a startup log message.  The server starts correctly, but there's no confirmation.  The solution involves a simple callback function in `server.listen()`.  This enhances debugging and monitoring.