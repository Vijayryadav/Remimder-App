import { Client, Account, Databases } from "appwrite";
import { config } from "./config";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65685ef819fb38516fa2");

const account = new Account(client);
const database = new Databases(client);

export { client, account , database};