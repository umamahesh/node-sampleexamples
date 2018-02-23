var mongo = require("mongodb");

var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";


mongoClient.connect(url, function(err, db){
	if(err) throw err;
	console.log("connected to mongodb");
	var dbase = db.db("mydb");

	//new collection creation
	//dbase.createCollection("customers", function(err, res){
	//	if(err) throw err;
	//	console.log("collection created");
	//	db.close();
	//});


    // new object creation
	//var newObj = {name: "Uma Mahesh", email: "umamaheshvarma@gmail.com"}

	//dbase.collection("customers").insertOne(newObj, function(err, record){
	//	if(err) throw err;
	//	console.log(record);
	//});

    // insert multiple records
	//var myobj = [
	//  { _id: 154, name: 'Chocolate Heaven'},
	//  { _id: 155, name: 'Tasty Lemon'},
	//  { _id: 156, name: 'Vanilla Dream'}
	//];
	//dbase.collection("products").insertMany(myobj, function(err, res) {
	//  if (err) throw err;
	//  console.log(res);
	//});

	// find a single record
	//dbase.collection("products").findOne({}, function(err, result){
	//  if (err) throw err;
	//  console.log(result);
	//})


	// find all record
	//dbase.collection("products").find({}, function(err, result){
	//  if (err) throw err;
	//  console.log(result);
	//})

	// find all record and convert to array
	dbase.collection("products").find({}).toArray(function(err, result){
	  if (err) throw err;
	  console.log(result);
	})



	db.close();
});
