var RESPONSES = ['BOO', 'NO IDEA', 'BLAH', 'IDK'];


module.exports = function(robot) {
	robot.respond('/hello/gim', function(msg){
		msg.reply('hello, how are you?');
	});

	robot.respond('/who are you?/gim', function(msg){
		msg.reply('I\'m your father ;)');
	});

	robot.respond('/\s?[A-Z][A-Z]+\s?/gm', function(msg){
		var result = RESPONSES[Math.floor(Math.random()*RESPONSES.length)] || '';
		msg.reply(result);
	});
};