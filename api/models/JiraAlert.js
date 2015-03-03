/**
 * Jira Ticket
 *
 * @module      :: Model
 * @description :: A representation of a jira ticket in the DB.
 *
 */

module.exports = {
  adapter: 'mongo',
  
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
      type: 'number',
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
