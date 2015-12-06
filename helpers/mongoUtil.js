var MongoClient = require('mongodb').MongoClient;
var poolModule = require('generic-pool');

module.exports = {

	connect : function () {
		var uri = "mongodb://localhost:27017/VOD";
		var pool = poolModule.Pool({
				name : 'mongo',
				create : function (callback) {
					MongoClient.connect(uri, {}, function (err, db) {
						if (err) {
							callback(err);
						} else {
							callback(null, db);
						}
					});
				},
				destroy : function (client) {
					//console.log(client);					
				},
				max : 10,
				// optional. if you set this, make sure to drain() (see step 3)
				min : 2,
				// specifies how long a resource can stay idle in pool before being removed
				idleTimeoutMillis : 30000,
				// if true, logs via console.log - can also be a function
				log : false
			});
		return pool;
	}
}