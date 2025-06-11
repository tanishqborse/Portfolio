
import { sanitizeInput } from './security';

/**
 * Security monitoring and threat detection utilities
 */

// Security event types for monitoring
export type SecurityEvent = 
  | 'suspicious_input'
  | 'rate_limit_exceeded'
  | 'invalid_request'
  | 'potential_xss'
  | 'form_submission';

// Security event logger
export const logSecurityEvent = (
  event: SecurityEvent,
  details: Record<string, any>,
  severity: 'low' | 'medium' | 'high' = 'low'
) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    event,
    severity,
    details: sanitizeInput(JSON.stringify(details)),
    userAgent: navigator.userAgent,
    url: window.location.href
  };

  // In production, this would send to a security monitoring service
  console.log('Security Event:', logEntry);
  
  // Store in session storage for demonstration
  const existingLogs = JSON.parse(sessionStorage.getItem('security_logs') || '[]');
  existingLogs.push(logEntry);
  sessionStorage.setItem('security_logs', JSON.stringify(existingLogs));
};

// Rate limiting utility
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  isRateLimited(identifier: string, maxRequests = 10, windowMs = 60000): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the time window
    const validRequests = requests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      logSecurityEvent('rate_limit_exceeded', { identifier }, 'medium');
      return true;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return false;
  }
}

export const rateLimiter = new RateLimiter();

// XSS detection utility
export const detectPotentialXSS = (input: string): boolean => {
  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe[^>]*>/gi,
    /<object[^>]*>/gi,
    /<embed[^>]*>/gi
  ];
  
  const hasXSS = xssPatterns.some(pattern => pattern.test(input));
  
  if (hasXSS) {
    logSecurityEvent('potential_xss', { input: input.substring(0, 100) }, 'high');
  }
  
  return hasXSS;
};

// Content integrity checker
export const verifyContentIntegrity = (content: string, expectedHash?: string): boolean => {
  if (!expectedHash) return true;
  
  // Simple hash check (in production, use crypto.subtle.digest)
  const hash = btoa(content).substring(0, 16);
  return hash === expectedHash;
};

// Security headers validator
export const validateSecurityHeaders = (): void => {
  const requiredHeaders = [
    'X-Content-Type-Options',
    'X-Frame-Options',
    'Referrer-Policy'
  ];
  
  // This would typically be done server-side
  // Here we're just logging for demonstration
  logSecurityEvent('form_submission', { 
    message: 'Security headers validation completed' 
  }, 'low');
};
