function paymentDao (connection) {
  this._connection = connection;
}

paymentDao.prototype.save = function (payment, callback) {
  this._connection.query('INSERT INTO payments SET ?', payment, callback);
};

paymentDao.prototype.list = function (callback) {
  this._connection.query('SELECT * FROM payments', callback);
};

paymentDao.prototype.paymentById = function (id, callback) {
  this._connection.query('SELECT * FROM payments WHERE id = ?', [id], callback);
};

module.exports = () => paymentDao;
