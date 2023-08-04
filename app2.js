const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();
const axios = require("axios");
const CronJob = require("cron").CronJob;

const client = new TwitterApi({
	appKey: process.env.appKey,
	appSecret: process.env.appSecret,
	accessToken: process.env.accessToken,
	accessSecret: process.env.accessSecret,
});

const rwClient = client.readWrite;

const tw = async () => {
	try {
		const mediaId = await client.v1.uploadMedia("./001.jpg");
		const ayah = Math.floor(Math.random() * 6236 + 1);
		const response = await axios.get(
			`http://api.alquran.cloud/v1/ayah/${ayah}/ar.asad`
		);
		let text = response.data.data.text;
		await rwClient.v2.tweet({
			text,
			media: { media_ids: [mediaId] },
		});
		console.log("all goood");
	} catch (error) {
		console.error(error);
	}
};

var job = new CronJob("* * * * *", function () {
	tw();
});
job.start();
