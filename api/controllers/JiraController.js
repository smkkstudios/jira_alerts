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
    JiraAlert.create(req.body).exec(function(err,post){
      console.log(err);
    })
	  io.sockets.emit('jiraAlert', {jiraUpdate: req.body});
    return res.send('it has been done')
  }
};

