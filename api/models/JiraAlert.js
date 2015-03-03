/**
 * Jira Ticket
 *
 * @module      :: Model
 * @description :: A representation of a jira ticket in the DB.
 *
 */

module.exports = {
  connection: 'mongo',
  
  attributes: {
    comment: {
      type: 'json',
      required: true
    },
    
    issue: {
      type: 'json',
      required: true,
    },
    
    timestamp: {
      type: 'string',
      required: true
    },
    user: {
      type: 'json'
    },
    
    webhookEvent: {
      type: 'string',
      required: true
    }
  }
};
