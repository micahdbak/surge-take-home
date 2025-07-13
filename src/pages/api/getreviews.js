import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get("https://surgetakehome.vercel.app/api/getreviews/" + process.env.SURGE_API_ID);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.', errorMessage: err.toString() });
    }
  } else {
    res.status(400).end();
  }
}