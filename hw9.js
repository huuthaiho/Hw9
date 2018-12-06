db.zipcode.aggregate([
    { $group:{_id : {"zipcode":"$_id"}}},{$sort: {zipcode:1}}

])


db.zipcode.aggregate([
    {$match: { pop:{$gt : 1000} }},
    { $group:{_id : {"zipcode":"$_id","population":"$pop"}}}
    
])


db.zipcode.aggregate([
    { $group:{_id : {"state":"$state","city":"$city"},count:{$sum:1}}},
    { $match: { count:{$gt:1} }},

    {$sort: { state:1,city:1 }}
  
])


db.zipcode.aggregate([
    { $group:{_id : {"state":"$state","city":"$city"},population:{$sum:"$pop"}}},
    
     {
       $group:
         {
			_id : {"state":"$_id.state","city":"$_id.city"},
             min :{$min:"$population"}
		}
     }  
])
