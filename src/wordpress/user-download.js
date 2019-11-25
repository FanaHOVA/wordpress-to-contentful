const fetch = require("node-fetch");
const fs = require("fs-extra");
const path = require("path");
const { Observable } = require("rxjs");
const { USER_DIR_ORIGINALS, MOCK_OBSERVER, WP_API_URL } = require("../util");

const urlForPage = (url, page) => `${url}/users?page=${page}`;

const users = async (url, observer = MOCK_OBSERVER) => {
  return []
};

module.exports = () => new Observable(observer => users(WP_API_URL, observer));
