import express from 'express';
const app = express();

const port = 3000;

app.use(express.static('public')); // 'public' is the directory where your HTML file is

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
