module.exports = (app) => {
  app.get('/pagamentos', (req, res) => {
    console.log('Lista pagamentos');

    res.send('Ok');
  });

  app.post('/pagamentos/pagamento', (req, res) => {
    const payment = req.body;

    console.log('Processando um pagamento...');

    payment.status = 'Criado';
    payment.data = new Date();

    const connection = app.db.connectionFactory();
    const paymentDao = new app.db.paymentDao(connection);

    paymentDao.save(payment, (error, result) => {
      console.log('Pagamento salvo com sucesso');

      payment.id = result.insertId;

      res.json(payment);
    });
  });
};
