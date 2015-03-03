/**
 * JiraController
 *
 * @description :: Server-side logic for managing jiras
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `JiraController.update()`
   */
  update: function (req, res) {
    var socket = req.socket;
    var io = sails.io;
    JiraAlert.create({}).exec(function(err,post){
      if(err){
        return res.error(err);
      }
      console.log('model created beyo');
    })
	  io.sockets.emit('jiraAlert', {thisIs: req.body});
    return res.send('it has been done')
  }
};

