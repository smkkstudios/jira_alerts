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
      type: 'string',
      required: true
    }
  }
};
