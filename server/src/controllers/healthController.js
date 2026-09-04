import { BaseController } from './BaseController.js';

class HealthController extends BaseController {
  checkStatus = (req, res) => {
    try {
      const healthInfo = {
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        status: 'UP',
      };
      this.handleSuccess(res, healthInfo, 'Server is healthy');
    } catch (error) {
      this.handleError(res, error, 'Health check failed');
    }
  };
}

export const healthController = new HealthController();
