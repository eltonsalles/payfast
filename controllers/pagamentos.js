module.exports = (app) => {
  app.get('/pagamentos', (req, res) => {
    console.log('Hahahaha');
    res.send('Ok');
  });
};
