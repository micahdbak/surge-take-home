import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      await axios.post("https://surgetakehome.vercel.app/api/postreview/" + process.env.SURGE_API_ID, data);
      res.redirect(303, '/');
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.', errorMessage: err.toString() });
    }
  } else {
    res.status(400).end();
  }
}