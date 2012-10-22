function(doc) {
 	if(doc.title && doc.type=="post"){
 		emit(doc._id,doc.title)
 	} 
}