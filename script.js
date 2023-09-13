function firstNonRepeatedChar(str) {
 // // Write your code here
	//  let arr = str.split("");
	// for(let i=0; i<arr.length;i++)
	// 	{ 
	// 		count=0;
	// 	    for(let j=i+1; j<arr.length; j++)
	// 			{
	// 				if(arr[i]==arr[j])
	// 				{
	// 					count++;
	// 				}
	// 			}
	// 		if(count==0){  
	// 			return arr[i];
	// 		} 
	// 	}     
	// return null; 


	let obj={};
	
	for(let i=0; i<str.length; i++){
		
		if(obj[str[i]] != undefined){
		   obj[str[i]] +=1;
		}
		else{
			obj[str[i]] = 1;
		}
	}

	for(let i=0; i<str.length; i++)
		{
			if(obj[str[i]]==1)
			{
				return str[i]; 
			}
		}
	return null; 
}
let input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
