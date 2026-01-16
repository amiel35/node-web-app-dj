const express = require('express');
const router = express.Router();
const Collection = require('../models/user'); // Requires a schema from the model folder

router.get('/', async (req, res) => {
	try {
		//Please read the code below to know what you  want to do
		//What are you trying to do?
		
		/*
		
		
		
		//Create (Insert) new data into your Collection
		*/
		const newCollection = new Collection({
			
			
			//Replace the field name and the value that correspond to the collections
			 user_name : 'Jack',
			 user_pw : 'Jill',
			
		});
		
		newCollection.save();
		
		/*
		Another example:
		
		const newUser = new User({
		  name: 'John Doe',
		  email: 'john.doe@example.com'
		});

		newUser.save()
		
		
				
		*/
		
		
		
		/*
		
		
		//Retrieve read or find data in your collection
		
		Collection.find({}); //Retrieve all data from the collection
		
		Collection.find({ name: 'John Doe'});  //Replace name with specific field name and John doe with specific value
		
		Collection.findOne({ email: 'john.doe@example.com' }); //Find the first query that match
		
		
		
		*/
		
		
		/*
		
		
		
		//Update existing data in collections
		
		//This finds the email that matches the first argument and changes it to the second are argument . The first argument is the original and the second is the update
		 Collection.findOneAndUpdate({ email: 'john.doe@example.com' }, { email: 'jane.doe@example.com' }, { new: true }); //replace email with field name 
		 
		 
		 //Updates multiple documents matching a query
		 Collection.updateMany({ name: 'John Doe' }, { status: 'inactive' }); //replace name and status to field names that need to change and its corresponding values
		 
		 
		*/
		
		
		
		
		
		
		/*
		
		
		//Delete a document
		
		//Deltes the first document matching a given query
		Collection.deleteOne({ email: 'jane.doe@example.com' }); //replace email with field name and corresponding value you want deleted
		
		//Deletes all documents matching a given query.
		Collection.deleteMany({ status: 'inactive' }); //replace status with field name and corresponding value you want deleted
		
		
		
		
		*/
		
		/*
		//This is where you put the code for what you are trying to do as far as crud operation
		//const newUser = new User({ user_name : "john", user_pw : "jj"});
		//await newUser.save();
		const findUser = await User.find({});
		
		*/
		res.send('Success');
	}
	catch (error) {
		console.error('Error:', error);
		res.status(500).json({ message: 'Server error'});
	}

});

module.exports = router;