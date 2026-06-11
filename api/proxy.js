export default async function handler(req, res) {
  const apiKey =  AQ.Ab8RN6LlYB_2rBF4xWAgTPQrGnKlq1o2bpRQp6uW3NGRnoJxUQ;
  const url = https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key= + apiKey;
  
  const response = await fetch(url, {
    method: POST,
    headers: { Content-Type: application/json },
    body: JSON.stringify(req.body)
  });
  
  const data = await response.json();
  res.status(200).json(data);
}
