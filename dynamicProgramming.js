// recurcive
const fibNo = (index) => {
    if (index === 1 || index === 2) return 1;
    return fibNo(index - 1) + fibNo(index - 2);
  }
  
  //bottom up
  const fibArr = (index) => {
    if (index === 1 || index === 2) return 1;
    const result = [1,1];
    for(let i = 2; i<=index; i++) {
      result[i] = result[i-1] + result[i-2];
    }
    return result[index-1];
  }
  
  // recurcive and memoized
  const fastFib = index => {
    const memo = {};
    
    const fib = (n) => {
      if (n === 1 || n === 2) return 1;
      if(memo[n]) {
        return memo[n]
      } else {
        memo[n] = fib(n-1) + fib(n-2);
        return memo[n];
      }
    }
    return fib(index)
  }
  console.log('Number 1 is ', fastFib(1))
  console.log('Number 2 is ',fastFib(2))
  console.log('Number 3 is ',fastFib(3))
  console.log('Number 4 is ',fastFib(4))
  console.log('Number 5 is ',fastFib(5))
  console.log('Number 6 is ',fastFib(6))
  console.log('Number 7 is ',fastFib(7))
  console.log('Number 76 is ',fastFib(76))