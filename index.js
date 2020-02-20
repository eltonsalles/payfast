const app = require('./config/custom-express')();

app.listen(process.env.API_PORT, process.env.API_HOST, () => {
  console.log(`Servidor rodando na porta ${process.env.API_PORT} e no host ${process.env.API_HOST}.`);
});
