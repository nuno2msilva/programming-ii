import fs from 'fs';
import readline from 'readline';

const logFilePath = './logfile.log';

async function processLogFile(filePath) {
    const statusCounts = { 'Total Errors 200': 0, 'Total Errors 404': 0, 'Total Errors 500': 0 };
    
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
    
    for await (const line of rl) {
        const parts = line.trim().split(' ');
        const statusCode = parts[parts.length - 1];
        
        if (statusCounts.hasOwnProperty(statusCode)) {
            statusCounts[statusCode]++;
        }
    }
    
    console.log(JSON.stringify(statusCounts, null, 2));
}

processLogFile(logFilePath)
    .then(() => console.log('Log file processed successfully'))
    .catch(err => console.error('Error processing log file:', err));