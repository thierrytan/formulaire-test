function(doc) {
  if(doc.type=="comment"){
 		emit(doc.post_id,{post_id: doc.post_id,post_name: doc.post_name, text: doc.text})
 	}
}