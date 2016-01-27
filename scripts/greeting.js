module.exports = function(robot) {
	robot.respond('/hello/gim', function(msg){
		msg.reply('hello, how are you?');
	});

	robot.respond('/good|fine/gim', function(msg){
		msg.reply('I\'m glad to hear that, can I do something for you?');
	});

	robot.respond('/who are you?/gim', function(msg){
		msg.reply('I\'m your father ;)');
	});

	robot.respond('/^([A-Z]+)+$/gm', function(msg){
		var responses = ['BOO', 'NO IDEA', 'BLAH', 'IDK'];
		msg.reply(responses[Math.floor(Math.random()*responses.length)]);
	});
};