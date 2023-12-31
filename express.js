const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', function (req, res, next) {
  // Handle the get for this route
  res.send('Welcome to CORS server 😁');
});

app.get(
  '/api/deezer/search/track/:track/artist/:artist',
  async (req, res, next) => {
    // Handle the get for this route
    if (req.params.track && req.params.artist) {
      const trackq = req.params.track;
      const artistq = req.params.artist;
      //
      const apiurl = `https://api.deezer.com/search?q=artist:"${artistq}" track:"${trackq}"&apikey=b3a8e28d31446114b53ebdc847212e44`;
      console.log(apiurl);
      //
      try {
        const response = await axios.get(apiurl);
        res.json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
      // res.send(`search q: ${trackq} ${artistq} `);
      // console.log(trackq + ' : ' + artistq);
    }
  }
);

app.get(
  '/api/beatport/scrape/track/:track/artist/:artist',
  async (req, res, next) => {
    if (req.params.track && req.params.artist) {
      const trackq = req.params.track;
      const artistq = req.params.artist;
      const trackqformat = trackq.replace(/ /g, '%20');
      const artistqformat = artistq.replace(/ /g, '%20');
      const apiurl = `https://www.beatport.com/search?q=${artistqformat}%20${trackqformat}`;
      console.log(apiurl);
      try {
        const response = await axios.get(apiurl);
        const $ = cheerio.load(response.data);
        // Locate the script tag containing JSON data
        const scriptTagContent = $('script#__NEXT_DATA__').html();
        //console.log(scriptTagContent);

        // Extract and parse the JSON data
        const jsonStart = scriptTagContent.indexOf('{');
        const jsonEnd = scriptTagContent.lastIndexOf('}');
        const jsonData = JSON.parse(
          scriptTagContent.substring(jsonStart, jsonEnd + 1)
        );
        res.send(jsonData.props.pageProps.dehydratedState.queries[0].state);
      } catch (error) {
        res.status(500).send({ error: 'An error occurred' });
      }
      // res.send(`search q: ${trackq} ${artistq} `);
      // console.log(trackq + ' : ' + artistq);
    }
  }
);

app.get('/cors', (req, res, next) => {
  res.send('This has CORS enabled 🎈');
});

app.post('/', function (req, res, next) {
  // Handle the post for this route
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});

const searchDeezerByTrackArtist = async (searchq) => {
  const apiurl = `https://api.deezer.com/search?q=artist:"${searchq.artistsearch}" track:"${searchq.tracksearch}"&apikey=${deezerconfig.apikey}`;
  console.log(apiurl);

  axios
    .get(apiurl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
