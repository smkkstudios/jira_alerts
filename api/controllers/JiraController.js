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
    var Test = test.create({comment:'this is a working model'}}).exec(function(err,post){
      if(err){
        console.log(err);
      }
      console.log('model created beyo: ');
    })
	  io.sockets.emit('jiraAlert', {thisIs: req.body});
    return res.send('it has been done')
  }
};

