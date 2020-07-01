'use strict';

exports.__esModule = true;
// Production Setup
// Papertrail = add to here
var serverSetup = 'production';
// const serverSetup = 'staging';
//  const serverSetup = 'local';

var config = void 0;
if (serverSetup === 'production') {
	config = {
		mongoURL: 'mongodb://venuemonk:venuemonk390@ds053312.mlab.com:53312/venuemonkb',
		port: int(process.env.PORT) || 7000,
		secret: 'venuem0nkgr0wsduet0itsp@rtners',
		AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || 'AKIAJT6ERSGYWMKJPPBQ',
		AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || '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',
		S3_BUCKET: process.env.S3_BUCKET,
		REDIS_URL: process.env.REDIS_URL || 'redis://h:p9ef2a8561f6977b2215cda2904951dfcb96da563b51d2921ead93c79510ddc2e@ec2-34-224-49-43.compute-1.amazonaws.com:51609',
		WORKER_URL: process.env.REDISCLOUD_URL || 'redis://rediscloud:WyLro80T0NDQPkh9@redis-15702.c8.us-east-1-2.ec2.cloud.redislabs.com:15702',
		PM2_MACHINE_NAME: 'VM1',
		PM2_PRIVATE_KEY: 'e5b9mr2znwbg9c9',
		PM2_PUBLIC_KEY: '7k67otxnxwp57p5',
		APP_INSTANCE_COUNT: 1,
		APP_MAX_MEMORY: 256,
		WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 1
	};
} else if (serverSetup === 'staging') {
	config = {
		mongoURL: 'mongodb://venuemonk:venuemonk390@ds111622.mlab.com:11622/venuemonkc',
		port: process.env.PORT || 7000,
		secret: 'venuem0nkgr0wsduet0itsp@rtners',
		AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || 'AKIAIAK2Q4WHY7LH2TMQ',
		AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || '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',
		S3_BUCKET: process.env.S3_BUCKET || "venuemonk-images",
		REDIS_URL: process.env.REDIS_URL || 'redis://h:p04a8db66816b10d231b6894ac45a66702ce4bda34e968ee04e8f18a0baf06bc9@ec2-34-225-146-66.compute-1.amazonaws.com:46569',
		WORKER_URL: process.env.REDISCLOUD_URL || 'redis://rediscloud:WyLro80T0NDQPkh9@redis-15702.c8.us-east-1-2.ec2.cloud.redislabs.com:15702',
		PM2_MACHINE_NAME: 'VMTEST',
		PM2_PRIVATE_KEY: '8899q4ufxsndzuv',
		PM2_PUBLIC_KEY: '5z9464o0d7dyqpa',
		APP_INSTANCE_COUNT: 1,
		APP_MAX_MEMORY: 256,
		WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 1
	};
} else if (serverSetup === 'local') {
	config = {
		mongoURL: 'mongodb://localhost:27017/venuemonkc',
		port: process.env.PORT || 7000,
		secret: 'venuem0nkgr0wsduet0itsp@rtners',
		AWS_ACCESS_KEY: 'AKIAJT6ERSGYWMKJPPBQ',
		AWS_SECRET_KEY: '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',
		S3_BUCKET: process.env.S3_BUCKET,
		REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
		WORKER_URL: 'redis://localhost:6379',
		PM2_MACHINE_NAME: 'VMTEST',
		PM2_PRIVATE_KEY: '8899q4ufxsndzuv',
		PM2_PUBLIC_KEY: '5z9464o0d7dyqpa',
		APP_INSTANCE_COUNT: 1,
		APP_MAX_MEMORY: 256,
		WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 1
	};
}

function bool(str) {
	if (str == void 0) return false;
	return str.toLowerCase() === 'true';
}

function int(str) {
	if (!str) return 0;
	return parseInt(str, 10);
}

function float(str) {
	if (!str) return 0;
	return parseFloat(str, 10);
}

exports.default = config;
