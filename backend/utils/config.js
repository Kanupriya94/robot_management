"use strict";
const config = {
  secret: "Your passport secret key",
  frontendURI: "http://localhost:3000",
  mysqlUser: "root",
  mysqlPassword: "robotdb123",
  mysqlHost: "localhost",
  mysqlDatabase: "cloudcomputing",
  mongoDBURI:
    "mongodb+srv://root:robotdb123@cluster0.tr7upgr.mongodb.net/cloudcomputing?retryWrites=true&w=majority",
    // "mongodb+srv://mobileCloudUser:cloudcomputing@cluster0.knqrf.mongodb.net/MobileRobotCloud?retryWrites=true&w=majority",
};

module.exports = config;
