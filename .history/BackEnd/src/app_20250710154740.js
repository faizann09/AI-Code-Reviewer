import express from "express";
import 


const app= express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use('/ai', aiRoutes);

export default app;