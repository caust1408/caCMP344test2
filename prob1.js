// Craig Austgen
// this is randomizing number between 0 and 199 
// if the number is greater than 10 then it gets added to the array
//

(function randomize() {
	var arr = [];
	var count = 0;
	var i = 0;
	var x = 0;
	while(count != 20) {
	   
           x = Math.floor(Math.random() * 200);
	      if ( x > 10) {
		count++;
	        arr[i] = x;	
		//print(arr);
	      }
	      else {
		      
	      }
	      i++;
	}
	print(arr);

	
})();
