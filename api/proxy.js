const https = require('https');

module.exports = async function handler(req, res) {
  const apiKey = 'AQ.Ab8RN6LlYB_2rBF4xWAgTPQrGnKlq1o2bpRQp6uW3NGRnoJxUQ';
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + apiKey;
  const body = JSON.stringify(req.body);
  return new Promise((resolve) => {
    const options = { method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) } };
    const r = https.request(url, options, (resp) => {
      let data = '';
      resp.on('data', chunk => data += chunk);
      resp.on('end', () => { res.status(200).send(data); resolve(); });
    });
    r.on('error', (e) => { res.status(500).json({error: e.message}); resolve(); });
    r.write(body);
    r.end();
  });
};
