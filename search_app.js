const fs = require('fs');

const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');

const queries = [
  'openOperationLogModal',
  'addRow',
  'openClientModal',
  'handleModalSubmit',
  'setupRouting',
  'routing-tl-pills',
  'sanitation-report',
  'reports-tab',
  'report-type',
  'baitStationsChart',
  'generateReport',
  'UoM'
];

queries.forEach(query => {
  console.log(`=== Matches for '${query}' ===`);
  lines.forEach((line, idx) => {
    if (line.includes(query)) {
      console.log(`${idx + 1}: ${line.trim().substring(0, 100)}`);
    }
  });
});
