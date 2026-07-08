import re

with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

queries = ['openOperationLogModal', 'addRow', 'openClientModal', 'handleModalSubmit', 'setupRouting', 'routing-tl-pills', 'sanitation-report', 'reports-tab', 'report-type', 'baitStationsChart', 'generateReport', 'UoM']

for query in queries:
    print(f"=== Matches for '{query}' ===")
    for idx, line in enumerate(lines):
        if query in line:
            print(f"{idx+1}: {line.strip()[:100]}")
