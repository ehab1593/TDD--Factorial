const Calculate = {
  factorial(number){
    let result = 1;
    if(number === 0){
      return 1;
    }
  for(let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
  }
}

module.exports = Calculate;


