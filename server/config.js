// Production Setup
// Papertrail = add to here
// var serverSetup = 'production';
const serverSetup = 'staging';
// var serverSetup = 'development';
// var serverSetup = 'local';

const configVariables = {
  production : {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb//localhost:27017/limechat?retryWrites=true&w=majority',
    PORT: int(process.env.PORT) || 4200,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false,                    // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1,                 // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2,   // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false,                    // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true,               // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000,             // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512,
  },
  staging : {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb://limechat:limechat123@ds027835.mlab.com:27835/limechat',
    PORT: int(process.env.PORT) || 4200,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false,                    // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1,                 // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2,   // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false,                    // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true,               // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000,             // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512,
  },
  development: {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb//localhost:27017/limechat?retryWrites=true&w=majority',
    PORT: int(process.env.PORT) || 4200,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false,                    // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1,                 // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2,   // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false,                    // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true,               // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000,             // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512,
  },
  local: {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb//localhost:27017/limechat?retryWrites=true&w=majority',
    PORT: int(process.env.PORT) || 4200,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false,                    // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1,                 // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2,   // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false,                    // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true,               // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000,             // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512,
  },
  test: {
    stage: 'production',
    REDIS_URL: 'redis://localhost:6379',
    MONGO_URL: 'mongodb//localhost:27017/limechat?retryWrites=true&w=majority',
    PORT: int(process.env.PORT) || 8080,
    COOKIE_SECRET: 'limechatneedStogrow100xby2020',
    VERBOSE: bool(process.env.VERBOSE) || false,                    // Log 200s?
    CONCURRENCY: int(process.env.CONCURRENCY) || 1,                 // Number of Cluster processes to fork in Server
    WORKER_CONCURRENCY: int(process.env.WORKER_CONCURRENCY) || 2,   // Number of Cluster processes to fork in Worker
    THRIFTY: bool(process.env.THRIFTY) || false,                    // Web process also executes job queue?
    VIEW_CACHE: bool(process.env.VIEW_CACHE) || true,               // Cache rendered views?
    MONGO_CACHE: int(process.env.MONGO_CACHE) || 10000,             // LRU cache for mongo queries
    APP_INSTANCE_COUNT: 1,
    APP_MAX_MEMORY: 512,
  }
};

export default configVariables[serverSetup];

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
