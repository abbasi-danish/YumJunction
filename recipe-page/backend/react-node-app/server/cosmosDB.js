const { CosmosClient } = require("@azure/cosmos");
const COSMOS_KEY = process.env.connection_string;

const cosmosClient = new CosmosClient({COSMOS_KEY});
const container = cosmosClient.database("recipe-db").container("recipes");
