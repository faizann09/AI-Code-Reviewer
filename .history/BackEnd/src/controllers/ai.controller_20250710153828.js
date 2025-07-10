const aiService = require("../services/ai.service.js");
const aiController = require("../controllers/ai.contr")

module.exports= async (req, res) => {
    const prompt = req.query.prompt;
    if (!prompt) {
        return res.status(400).send("Prompt is required");
    }
    const response = await aiService(prompt);
    res.send(response);

}