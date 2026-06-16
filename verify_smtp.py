import http.client
import json

conn = http.client.HTTPConnection('localhost', 3002, timeout=15)
payload = json.dumps({
    'name': 'Test User',
    'email': 'test@example.com',
    'message': 'Testing SMTP delivery from local dev.'
}).encode('utf-8')
headers = {'Content-Type': 'application/json'}
conn.request('POST', '/api/contact', payload, headers)
res = conn.getresponse()
body = res.read().decode('utf-8')
print('STATUS', res.status)
print(body)
conn.close()
