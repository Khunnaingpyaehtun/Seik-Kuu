
export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'SECURITY';

export interface LogEntry {
  id: string;
  timestamp: string;
  level: LogLevel;
  action: string;
  details: string;
  metadata?: any;
}

const STORAGE_KEY = 'seik_kuu_security_logs';

class LoggerService {
  private getLogs(): LogEntry[] {
    try {
      const logs = localStorage.getItem(STORAGE_KEY);
      return logs ? JSON.parse(logs) : [];
    } catch (e) {
      return [];
    }
  }

  private saveLogs(logs: LogEntry[]) {
    // Keep only last 100 logs to prevent storage overflow
    const trimmedLogs = logs.slice(-100);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedLogs));
  }

  public log(level: LogLevel, action: string, details: string, metadata?: any) {
    const newLog: LogEntry = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      level,
      action,
      details,
      metadata
    };

    const currentLogs = this.getLogs();
    currentLogs.push(newLog);
    this.saveLogs(currentLogs);

    // Console output for dev
    if (process.env.NODE_ENV === 'development') {
        console.log(`[${level}] ${action}:`, details);
    }
  }

  public getHistory(): LogEntry[] {
    return this.getLogs().reverse();
  }

  public clearLogs() {
    localStorage.removeItem(STORAGE_KEY);
  }

  public exportLogs() {
    const logs = this.getLogs();
    const blob = new Blob([JSON.stringify(logs, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seik_kuu_security_logs_${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

export const logger = new LoggerService();
