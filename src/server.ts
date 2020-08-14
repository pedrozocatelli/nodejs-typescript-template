import app from './index';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`I'm running on port ${PORT}`);
});
