import expressServer from './express';
import { graphqlPath } from './apolloServer';

require('dotenv').config();

const port = process.env.PORT || 4000;

expressServer.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`🚀 Server started at http://localhost:${port}${graphqlPath}`);
});
