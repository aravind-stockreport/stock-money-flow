export default async function handler(req, res) {
  const { symbol = 'NSE:TCS' } = req.query;
  const API_KEY = process.env.TWELVE_DATA_API_KEY;
  const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.code === 400) {
      return res.status(400).json({ error: data.message });
    }

    return res.status(200).json({
      symbol: data.symbol,
      name: data.name,
      price: data.price,
      change: data.percent_change,
      datetime: data.datetime,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
}
