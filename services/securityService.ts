
import DOMPurify from 'dompurify';
import { logger } from './loggerService';

class SecurityService {
  private rateLimits: Map<string, number> = new Map();
  private readonly RATE_LIMIT_WINDOW = 5000; // 5 seconds
  private readonly MAX_REQUESTS = 3;

  /**
   * Sanitizes user input to prevent XSS
   */
  public sanitize(input: string): string {
    if (!input) return '';
    const clean = DOMPurify.sanitize(input);
    if (clean !== input) {
        logger.log('SECURITY', 'XSS_ATTEMPT_BLOCKED', 'Input contained potentially malicious code', { original: input });
    }
    return clean;
  }

  /**
   * Checks if an action is rate limited
   * Returns true if allowed, false if blocked
   */
  public checkRateLimit(actionType: string): boolean {
    const now = Date.now();
    const lastAttempt = this.rateLimits.get(actionType) || 0;

    if (now - lastAttempt < 2000) { // Simple 2s debounce
        logger.log('WARN', 'RATE_LIMIT_EXCEEDED', `Action blocked: ${actionType}`);
        return false;
    }

    this.rateLimits.set(actionType, now);
    return true;
  }

  public validateAccessCode(code: string): boolean {
      // Basic regex for code format (prevent SQL injection patterns if this were backend)
      const codeRegex = /^[A-Z0-9-]{5,20}$/;
      if (!codeRegex.test(code)) {
          logger.log('WARN', 'INVALID_CODE_FORMAT', `Malformatted code attempted: ${code}`);
          return false;
      }
      return true;
  }
}

export const security = new SecurityService();
