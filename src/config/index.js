const merge = require("lodash/merge")

const env = process.env.NODE_ENV || "development"

const config = {
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
}

try {
  merge(config, require("./" + env))
} catch (err) {
  console.log("Failed to load config:", env)
}

module.exports = config
