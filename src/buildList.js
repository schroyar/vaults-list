require('dotenv').config()
const defiedge = require("./vaults/defiedge.json");
const gamma = require("./vaults/gamma.json");

const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

module.exports = function buildList() {
    const vaults = [defiedge, gamma]
    const processedVaults = JSON.parse(JSON.stringify(vaults).replace(/BASE_URL/g, BASE_URL))

    return {
        name: "Camelot ALM Vaults",
        timestamp: new Date().toISOString(),
        vaults: processedVaults
    };
};