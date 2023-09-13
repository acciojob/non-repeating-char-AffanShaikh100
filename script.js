function firstNonRepeatedChar(str) {
 // Write your code here
	
	for(let i=0; i<str.length;i++)
		{
			let count=0;
		    for(let j=i+1; j<str.length; j++)
				{
					if(str[i]==str[j])
					{
						count+=1;
					}
				}
			if(count==0){  
				return[str[i];
			} 
		}     
	return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
