const { APP_MODE, PROD_URL_1, DEV_URL } = process.env;

const trustableOrigins = APP_MODE === "production" ? [PROD_URL_1] : [DEV_URL];

const corsConfig = {
  origin: function (origin, callback) {
    if (!origin || trustableOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed"));
    }
  },
  credentials: true,
};

export default corsConfig;
