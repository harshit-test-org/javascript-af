require('dotenv').config();
import expressServer from './express';
import { graphqlPath } from './apolloServer';

const port = process.env.PORT || 4000;

expressServer.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}${graphqlPath}`);
});
