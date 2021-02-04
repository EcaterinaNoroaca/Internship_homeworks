//ex 3
const arr = [1,0,10,'0','1',"",NaN, false, true, null, undefined,'false', 'true']
for(var j=0; j<arr.length; j++) {
  if (arr[j]){
    console.log(arr[j]);
  }
}
