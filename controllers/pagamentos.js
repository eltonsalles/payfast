module.exports = (app) => {
  app.get('/pagamentos', (req, res) => {
    console.log('Lista pagamentos');

    res.send('Ok');
  });

  app.post('/pagamentos/pagamento', (req, res) => {
    const pagamento = req.body;

    console.log('Processando um pagamento...');

    pagamento.status = 'Criado';
    pagamento.data = new Date();

    res.send(pagamento);
  });
};
