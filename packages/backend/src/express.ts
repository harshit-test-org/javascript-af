import express from 'express';
import server from "./apolloServer"

const app = express();

server.applyMiddleware({ app });

export { app as default };