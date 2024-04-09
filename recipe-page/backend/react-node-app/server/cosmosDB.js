const { CosmosClient } = require("@azure/cosmos");

const cosmosClient = new CosmosClient({ connectionString: "<your-connection-string>" });
const container = cosmosClient.database("<your-database-name>").container("<your-container-name>");