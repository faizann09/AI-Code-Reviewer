import express from "express";
const aiRoutes = require('./routes/ai.routes')


const app= express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use('/ai', aiRoutes);

export default app;