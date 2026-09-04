import app from './app.js';
import { config } from './config/unifiedConfig.js';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`🚀 Server running in [${config.nodeEnv}] mode on http://localhost:${PORT}`);
});
