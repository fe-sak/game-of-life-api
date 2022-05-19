import app from './app.js';

const port = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on ${port}...`);
});
