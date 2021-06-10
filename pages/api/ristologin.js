export default function ristologinAPI(req, res) {
    if (req.method !== "POST") {
        return res.status(400).json({ error: "Only POST requests are allowed" });
    }
    console.log(req.body.ristocode);
    return res.status(200).json({ message: `The ristocode is ${req.body.ristocode}` })
}