/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res){
		res.view('UserIndex');
	},

	list: function(req, res){
		User.find()
		.then(function(users){
			res.view('UserList',{
				users:users
			});
		});
	},

	page: function(req, res){
		res.view("UserPage");
	},

	create: function(req, res) {
		var name = req.body.username;
		User.create({
			name: name
		})
		.then(function(user){
			console.log("create success");
			res.redirect("/user/list");
		});
	},

	destroy: function(req, res){
		var id = req.params['id'];
		User.destroy({
			id : id
		})
		.then(function(user){
			res.redirect("/user/list");
		});
	}
};
