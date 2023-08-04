const CronJob = require("cron").CronJob;
var job = new CronJob("* * * * *", function () {
	console.log("test");
});
job.start();
