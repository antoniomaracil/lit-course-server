const empData = [
  {
    id: 1,
    name: 'Bruno Ferrero',
    applicationDate: new Date(2020, 7, 15),
    startDate: new Date(2020, 8, 25),
    endDate: new Date(2020, 8, 28),
    status: 0,
    statusDate: new Date(2020, 7, 15)
  },
  {
    id: 2,
    name: 'Bruno Ferrero',
    applicationDate: new Date(2020, 7, 15),
    startDate: new Date(2020, 11, 2),
    endDate: new Date(2020, 11, 8),
    status: 0,
    statusDate: new Date(2020, 7, 15)
  },
  {
    id: 3,
    name: 'Lucas Rivas',
    applicationDate: new Date(2020, 9, 10),
    startDate: new Date(2021, 0, 15),
    endDate: new Date(2021, 0, 21),
    status: 0,
    statusDate: new Date(2020, 8, 14)
  },
  {
    id: 4,
    name: 'Patrícia Santos',
    applicationDate: new Date(2020, 7, 15),
    startDate: new Date(2020, 7, 15),
    endDate: new Date(2020, 7, 15),
    status: 0,
    statusDate: new Date(2020, 11, 20)
  },
  {
    id: 5,
    name: 'Dario Espinosa',
    applicationDate: new Date(2020, 7, 3),
    startDate: new Date(2020, 7, 14),
    endDate: new Date(2020, 7, 21),
    status: 0,
    statusDate: new Date(2020, 7, 3)
  },
  {
    id: 6,
    name: 'Salome Snchez',
    applicationDate: new Date(2020, 7, 15),
    startDate: new Date(2020, 7, 15),
    endDate: new Date(2020, 7, 15),
    status: 0,
    statusDate: new Date(2020, 11, 20)
  },
  {
    id: 7,
    name: 'Lucas Rivas',
    applicationDate: new Date(2020, 6, 10),
    startDate: new Date(2020, 7, 15),
    endDate: new Date(2020, 7, 15),
    status: 0,
    statusDate: new Date(2020, 11, 20)
  },
  {
    id: 8,
    name: 'Oliva Macia',
    applicationDate: new Date(2020, 9, 15),
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2020, 9, 10),
    status: 0,
    statusDate: new Date(2020, 11, 20)
  },
  {
    id: 9,
    name: 'Esperanza Arevalo',
    applicationDate: new Date(2020, 7, 15),
    startDate: new Date(2020, 7, 15),
    endDate: new Date(2020, 7, 15),
    status: 0,
    statusDate: new Date(2020, 11, 20)
  },
  {
    id: 10,
    name: 'Azucena Soria',
    applicationDate: new Date(2020, 7, 15),
    startDate: new Date(2020, 7, 15),
    endDate: new Date(2020, 7, 15),
    status: 0,
    statusDate: new Date(2020, 11, 20)
  },
  {
    id: 11,
    name: 'Julia Lara',
    applicationDate: new Date(2020, 7, 15),
    startDate: new Date(2020, 7, 15),
    endDate: new Date(2020, 7, 15),
    status: 0,
    statusDate: new Date(2020, 11, 20)
  }];

const mongo = require('mongodb').MongoClient;

const { domain, port } = require('../../../config.js').mongodb;

const url = `mongodb://${domain}:${port}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
};

mongo.connect(url, options).then(client => {
  const collection = client.db('lit-data').collection('admin-vacation-form');

  collection.insertMany(empData).then(() => {
    client.close();
  }).catch(() => {
    client.close();
  });
}).catch(() => {
});
