function find(Collection){
	const results = await Collection.find();
	
	return results;

}


function findOne(Collection, field, data, selection){
	const result = await Collection.findOne({field : data}).select(selection);
	
	return results
}


function create(Collection, 