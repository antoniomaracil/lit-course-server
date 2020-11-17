module.exports = (app) => {
  const validator = require('../controllers/antoniomaracil/data.controller');

  app.get('/get-vacations', validator.getVacations);
  app.put('/update-vacation', validator.updateVacation);
  app.get('/get-files', validator.getFiles);
  app.delete('/delete-file/:id', validator.deleteFile);
};
