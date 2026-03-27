import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(express.static('images'));
app.use(bodyParser.json()); // This middleware parses incoming request bodies in JSON format.

// CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/places', async (req, res) => {
  const fileContent = await fs.readFile('./data/places.json'); // Reads the content of the places.json file.

  const placesData = JSON.parse(fileContent); // Parses the JSON file content into a JavaScript object.

  res.status(200).json({ places: placesData }); // Sends a JSON response with the places data.
});

app.get('/user-places', async (req, res) => {
  const fileContent = await fs.readFile('./data/user-places.json'); // Reads the content of the user-places.json file.

  const places = JSON.parse(fileContent); // Parses the JSON file content into a JavaScript object.

  res.status(200).json({ places }); // Sends a JSON response with the user places data.
});

app.put('/user-places', async (req, res) => {
  const places = req.body.places;

  await fs.writeFile('./data/user-places.json', JSON.stringify(places)); // Converts the 'places' JavaScript object into a JSON string and writes it to the user-places.json file.

  res.status(200).json({ message: 'User places updated!' }); // Sends a JSON response confirming the update.
});

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' }); // Sends a JSON response for 404 errors.
});

app.listen(3000);
