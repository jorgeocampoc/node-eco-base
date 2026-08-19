const express = require("express");
const cors = require("cors");
const corsOptions = require("../config/cors");
const { connectDatabase } = require("../config/database");
module.exports = {
  express,
  cors,
  corsOptions,
  connectDatabase,
};
