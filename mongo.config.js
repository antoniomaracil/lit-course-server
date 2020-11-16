const { domain, port } = require('./config.js').mongodb;

const mongo = require('mongodb').MongoClient;
const url = `mongodb://${domain}:${port}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
};

exports.mongoConnect = async (refs = {
  db: 'lit-data',
  collection: 'admin-vacation-form'
}) => {
  return mongo.connect(url, options).then(client => {
    const collection = client.db(refs.db).collection(refs.collection);
    return { client, collection };
  }).catch(error => {
    return { error };
  });
};
