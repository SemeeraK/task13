function displayData(n){
    result .value+=n
}
function allClear(){
    result.value=" "
}

function deleteDigit() {
 result.value=result.value.slice(0,-1)
  }
  function findOut(){
    result.value=eval(result.value)
  }