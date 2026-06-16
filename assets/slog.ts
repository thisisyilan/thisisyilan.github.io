/**
 * Provides structured logging for the browser
 *
 * This class provides a simple and type-safe way to emit structured log
 * messages using severity levels (debug, info, warn, error). Log messages can
 * include one or more structured key-value records, which are automatically
 * flattened and printed in a clean, grouped format in the browser console.
 *
 * ### Usage:
 *
 * Import the globally available `slog` instance:
 *
 * ```typescript
 * import { slog } from './slog';
 * ```
 *
 * Set the minimum log level (optional):
 *
 * ```typescript
 * // Show all logs including debug
 * slog.setLevel(slog.LevelDebug);
 * ```
 *
 * Log messages with structured context:
 *
 * ```typescript
 * slog.info("method called", { arg1: 123, arg2: "abc" });
 * slog.warn("channel not found", { workspace: "abc" }, { channel: "def" });
 * slog.error("request failed", { url: "/api/data", status: 500 });
 * slog.debug("loop executed", { counter: 42, iterations: 12 });
 * ```
 *
 * ### Output Format:
 *
 * Logs are grouped in the browser console and styled based on severity. Each
 * field is printed as a `key: value` pair using `console.log`.
 *
 * `> [INFO] 2025-10-01T12:34:56.789Z - method called arg1: 123 arg2: "abc"`
 *
 * ### Log Levels:
 *
 * - `LevelDebug` (-4)
 * - `LevelInfo` (0)
 * - `LevelWarn` (4)
 * - `LevelError` (8)
 *
 * Only messages at or above the currently set log level will be emitted.
 *
 * Messages at or above `LevelWarn` will be displayed in red and bold in the
 * console.
 */
export class SLog {
  /** Debug log level. */
  static readonly LevelDebug: number = -4;

  /** Info log level. */
  static readonly LevelInfo: number = 0;

  /** Warning log level. */
  static readonly LevelWarn: number = 4;

  /** Error log level. */
  static readonly LevelError: number = 8;

  /** level names */
  private static readonly levelNames: Record<number, string> = {
    [SLog.LevelDebug]: "DEBUG",
    [SLog.LevelInfo]: "INFO",
    [SLog.LevelWarn]: "WARN",
    [SLog.LevelError]: "ERROR",
  };

  /** Current log severity level. Should only be changed by setLevel. */
  private level: number = SLog.LevelInfo;

  /**
   * Internal function to actually write to the log.
   *
   * @param level string name of level
   * @param msg message to be printed
   * @param pairs structured pairs to be logged
   */
  private log(
    level: number,
    msg: string,
    pairs: Array<Record<string, unknown>>,
  ): void {
    const timestamp = new Date().toISOString();
    const levelName = SLog.levelNames[level] || `Level ${level}`;
    const header = `[${levelName}] ${timestamp} - ${msg}`;

    // Show warn or higher levels in red and bold
    const style =
      level >= SLog.LevelWarn ? "color: red; font-weight: bold;" : "";

    // Apply style if needed
    if (style) {
      console.groupCollapsed(`%c${header}`, style);
    } else {
      console.groupCollapsed(header);
    }

    for (const record of pairs) {
      for (const key in record) {
        console.log(`${key}:`, record[key]);
      }
    }
    console.groupEnd();
  }

  /**
   * Set the logging severity level to control what messages will appear in the
   * logs.  Messages at or above this severity will be logged.
   *
   * @param level log severity level to use
   */
  setLevel(level: number): void {
    this.level = level;
  }

  /**
   * Log debug message.
   *
   * @param msg log message
   * @param pairs key/value pairs to be logged
   */
  debug(msg: string, ...pairs: Array<Record<string, unknown>>): void {
    if (this.level <= SLog.LevelDebug) {
      this.log(SLog.LevelDebug, msg, pairs);
    }
  }

  /**
   * Log informational message.
   *
   * @param msg log message
   * @param pairs key/value pairs to be logged
   */
  info(msg: string, ...pairs: Array<Record<string, unknown>>): void {
    if (this.level <= SLog.LevelInfo) {
      this.log(SLog.LevelInfo, msg, pairs);
    }
  }

  /**
   * Log warning message.
   *
   * @param msg log message
   * @param pairs key/value pairs to be logged
   */
  warn(msg: string, ...pairs: Array<Record<string, unknown>>): void {
    if (this.level <= SLog.LevelWarn) {
      this.log(SLog.LevelWarn, msg, pairs);
    }
  }

  /**
   * Log error message.
   *
   * @param msg log message
   * @param pairs key/value pairs to be logged
   */
  error(msg: string, ...pairs: Array<Record<string, unknown>>): void {
    if (this.level <= SLog.LevelError) {
      this.log(SLog.LevelError, msg, pairs);
    }
  }
}

/** Single, constant, globally accessible structured log. */
export const slog: SLog = new SLog();
