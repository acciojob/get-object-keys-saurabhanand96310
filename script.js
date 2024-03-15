//your JS code here. If required.
let student={
	name:"saurabh",
	age:23
}
Object.prototype.getKeys=function(){
	let result=[];
	for(let key in this){
		if(this.hasOwnProperty(key)){
			result.push(key)
		}
		
	}
	return result;
}