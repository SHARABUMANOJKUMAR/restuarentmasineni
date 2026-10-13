/**
 * Audit Logger Service
 * Enforces structured audit trail:
 * {
 *   "timestamp": "",
 *   "actor": "",
 *   "action": "",
 *   "resource_id": "",
 *   "status": ""
 * }
 */

class AuditLogger {
  constructor() {
    this.memoryStore = [];
    this.maxLogs = 200;
  }

  /**
   * Log a structured audit event
   * @param {Object} entry
   * @param {string} entry.actor - Client or system initiator
   * @param {string} entry.action - Action performed (e.g., FORM_SUBMIT, MENU_FILTER)
   * @param {string} entry.resource_id - Resource identifier or subject
   * @param {'SUCCESS' | 'FAILED' | 'PENDING'} entry.status - Outcome
   */
  log({ actor = 'client_visitor', action, resource_id = 'n/a', status = 'SUCCESS' }) {
    const record = {
      timestamp: new Date().toISOString(),
      actor,
      action,
      resource_id,
      status
    };

    this.memoryStore.push(record);
    if (this.memoryStore.length > this.maxLogs) {
      this.memoryStore.shift();
    }

    return record;
  }

  getAuditTrail() {
    return [...this.memoryStore];
  }
}

export const auditLogger = new AuditLogger();
