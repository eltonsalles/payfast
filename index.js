let app = require('./config/custom-express')();

app.listen(3000, () => {
  console.log('Servidor rodando da porta 3000.');
});
