import axios from 'axios';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      axios.post("https://surgetakehome.vercel.app/api/postreview/" + process.env.SURGE_API_ID, data);
      res.status(200).end();
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.', errorMessage: err.toString() });
    }
  } else {
    res.status(400).end();
  }
}