import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); // carrega .env

const app = express();
app.use(cors()); // libera o frontend

const CMC_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

app.get("/api/coins", async (req, res) => {
  try {
    const key = process.env.VITE_CMC_API_KEY;
    if (!key) {
      return res.status(500).json({ error: "Missing VITE_CMC_API_KEY" });
    }

    const limit = req.query.limit || 17;

    const r = await fetch(`${CMC_URL}?start=1&limit=${limit}&convert=USD`, {
      headers: { "X-CMC_PRO_API_KEY": key },
    });

    if (!r.ok) {
      return res.status(500).json({ error: "CMC error", status: r.status });
    }

    const data = await r.json();
    res.json(data.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3001, () => {
  console.log("Backend rodando em http://localhost:3001");
});
