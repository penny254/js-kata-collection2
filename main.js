function add(a,b){
    return a + b
    }
    console.log(add(2,6))
     
 function multiply(a,b){
  let answer = 0
  let count =0;
 
  while (count < b){
     answer += add(a,0)
           count +=1;
  }  
 return answer;
 }
 let a = add(2,2)
 let m=multiply(2,2)
 console.log(m)

function power(x, n){
    let Result = 1;
    let count = 0;
    while (count < n) {
    Result = multiply(x,Result);
    count += 1;
     } 
     
    return Result;
    } 
    console.log(power(4, 6));

    
    function factorialize(n) {
        let result = n;
        if (n ===0 , n ===1) 
          return 1; 
        while (n > 1) { 
          n--;
          result *= n;
        }
        return result;
      }
    console.log  (factorialize(6));

  
    function fibonacci(n) {
      let (f[n+2]);
      let t;
      f[0]=0;
      f [1]=1
    
      for(t=2;t<=n; t++){
        f[t]=f[t-1]+ f[t-2];
      }
      returnf[n]
      console.log(fibonacci(n))
    }
      