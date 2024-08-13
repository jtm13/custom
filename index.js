import express from 'express';

const app = express();

app.use(express.static("static"));

app.listen(3001, () => {
    console.log("Running server at 3001");
});