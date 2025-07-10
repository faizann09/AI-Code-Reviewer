const aiService = require("../services/ai.service.js");

module.exports.getReview = async (req, res) => {
    const prompt = req.b;
    if (!code) {
        return res.status(400).send("Prompt is required");
    }
    const response = await aiService(code);
    res.send(response);

}