const fs = require('fs');
const endpointList = ['api/forms', 'api/connections', 'api/suppliers'];
const responseStatusList = [200, 200, 200, 200, 200, 400, 400, 400, 500];

let logs = [];

logs.push(['timestamp, path, status, responseTime'])

for (let i = 0; i < 1000; i++) {
    let timestamp = generateRandomTimestamp()
    let endpoint = endpointList[Math.floor(Math.random() * endpointList.length)];
    let queryParams = generateRandomQueryParams();
    let responseStatus = responseStatusList[Math.floor(Math.random() * responseStatusList.length)];
    let responseTime = Math.floor(Math.random() * 3000)
    logs.push([timestamp, endpoint + "?" + queryParams, responseStatus, responseTime].join(','));
}

fs.writeFileSync('api_logs.csv', logs.join('\n'));
console.log('API logs generated successfully in api_logs.csv');

function generateRandomQueryParams() {
    let optionalQueryParamList = ['limit', 'offset', 'supplierId'].filter(x => Math.random() < 0.6)
    let queryParamList = [...optionalQueryParamList, 'clientId'];
    let queryParams = [];
    for (let i = 0; i < queryParamList.length; i++) {
        let param = queryParamList[i];
        let value = Math.floor(Math.random() * 20);
        queryParams.push(`${param}=${value}`)
    }
    return queryParams.join('&')
}


function generateRandomTimestamp() {
    let currentDate = new Date();
    let threeMonthsAgo = new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000);
    let randomTimestamp = new Date(threeMonthsAgo.getTime() + Math.random() * (currentDate.getTime() - threeMonthsAgo.getTime()));
    return randomTimestamp.toISOString();
}