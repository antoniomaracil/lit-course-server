module.exports = (app) => {
  const validator = require('../controllers/antoniomaracil/data.controller');

  app.get('/get-data', validator.getItems);
  app.put('/update-data', validator.updateItem);
};
