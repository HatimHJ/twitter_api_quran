const express = require("express");
const axios = require("axios");

const app = express();

// app.get("/", async (req, res) => {
// 	// 6236;
// 	const ayah = Math.floor(Math.random() * 6236 + 1);
// 	try {
// 		const response = await axios.get(
// 			`http://api.alquran.cloud/v1/ayah/${ayah}/ar.asad`
// 		);
// 		console.log(response.data);
// 		res.json(response.data.data.text);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Something went wrong" });
// 	}
// });

// =========================
const Twit = require("twit");

// // Set Twitter API keys and access tokens
const consumerKey = "euKx4jLMsMtS8UglLlG43rwhw";
const consumerSecret = "bYaaXTbx0w1dXjxCEY9NWJEciDCPH23BJyyeOdtmCEklVSrahg";
const accessToken = "1680259517525655554-WCP16iH1h1PbLrWa6sV5N0Elf56KDG";
const accessTokenSecret = "SChWSLt0qTq68jj8iPvYmU4zvD0ohr6n4MgXOZQ4moeaY";

// // Initialize Twit client with API keys and access tokens
// const twitClient = new Twit({
// 	consumer_key: consumerKey,
// 	consumer_secret: consumerSecret,
// 	access_token: accessToken,
// 	access_token_secret: accessTokenSecret,
// });

// // Send a tweet
// twitClient.post(
// 	"https://api.twitter.com/2/tweets",
// 	{ text: "Hello, Twitter API!" },
// 	function (err, data, response) {
// 		if (err) {
// 			console.error(err);
// 		} else {
// 			console.log(data);
// 		}
// 	}
// );
// // =========================

// Set bearer token from Twitter Developer Dashboard
const bearerToken =
	"AAAAAAAAAAAAAAAAAAAAAN9FowEAAAAACkn7x9XEyjbCxnn%2B0nhty1NnMKE%3DMsPzUBbJEEFrW291uDqip6dgGxLdIo7f9IlXsAWzpCox6NEG5a";

const endpointUrl = "https://api.twitter.com/1.1/statuses/update.json";
// Set endpoint URL
// const endpointUrl = "https://api.twitter.com/2/tweet";
const params = {
	status: "Hello, Twitter API 2.0 User Context!",
};

// Build request headers
const headers = {
	Authorization: `Bearer ${accessToken}`,
	"User-Agent": "v2FilteredStreamJS",
	"Content-Type": "application/json",
	"Accept-Encoding": "gzip",
};

// Send POST request to Twitter API 2.0 User Context
axios
	.post(endpointUrl, params, { headers })
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.error(error);
	});

app.listen(3000, async () => {
	console.log("Server is listening on port 3000");
});
