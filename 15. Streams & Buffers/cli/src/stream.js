import { createReadStream } from 'node:fs';
import readline from 'node:readline';

export async function start(file) {
    const statusCounts = { '200': 0, '404': 0, '500': 0 };

    const fileStream = createReadStream(file, 'utf-8');
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