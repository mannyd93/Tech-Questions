//count the frequencies of all the digits for both and see if same
//turn both ints to strings
//if lengths arent the same return false
//count frequencies of each int
//if any dont match return false

function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
    let str1 = num1.toString();
    let str2 = num2.toString();
    if(str1.length != str2.length) return false;
    
    let fCounter1 = {};
    let fCounter2 = {};
    for(let i of str1) fCounter1[i] = (fCounter1[i]|0) + 1;
    
    for(let i of str2) fCounter2[i] = (fCounter2[i] | 0) + 1;
    
    for(let key in fCounter1 ){
        if (fCounter1[key] != fCounter2[key]) return false;
    }
    return true;
  
}
