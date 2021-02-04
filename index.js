/*ex 1
setTimeout(function(){for(var i=0; i<5; i++){console.log(i)}} ,1000)

  ex 2
 var s = new Set(arr);
 console.log(s.size);
 */

//ex 3
const arr = [1,0,10,'0','1',"",NaN, false, true, null, undefined,'false', 'true']
for(var j=0; j<arr.length; j++) {
  if (arr[j]){
    console.log(arr[j]);
  }
}
