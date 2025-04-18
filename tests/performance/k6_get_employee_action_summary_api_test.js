import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const fileContent = open("../../test-data/login/cookie.json")

export default function () {
  const data = JSON.parse(fileContent);
  const response = http.get(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary`, {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': data.Cookie,
    }
  });

  // Check the response status and ensure it's 200 OK
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
