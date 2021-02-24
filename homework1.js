/* 		function findMax(arrayOfNumbers)
	Gasiti cel mai mare nr dintr-un masiv M de numere
   		function findMin(arrayOfNumbers)
	Gasiti cel mai mic nr dintr-un masiv M de numere*/
    let array = [7, 5, 9, 15]
/*    let min = array.min()
    let max = array.max()
    console.log(min) 
    console.log(max) */
    function findMax(array){
        let max=array[0]
        array.forEach(element => {
            if (element > max) {
               max = element 
            }
        });
        return max
    }
    findMax(array)

    function findMin(array){
        let min=array[0]
        array.forEach(element => {
            if (element < min) {
               min = element 
            }
        });
        return min
    }
    findMin(array)




/* 		function displayDate(day, month, year); // 1, 1, 2021 => 01.01.21, 10, 10, 2021 => 10.10.21
	Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre.*/
    function displayDate(day, month, year){

        if (day < 10) {day = '0' + day.toString}
        if (month < 10) {month = '0' + month.toString}
        let y = year.toString()
        y = y.substr(2)

        return `${day}.${month}.${y}`   

    }

    console.log(displayDate(19,2,2021))


        /*
        const d = new Date(year, month, day);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${da}.${mo}.${ye}`*/

/* 		function isPalindrom(string);
	Verificați dacă un cuvint/fraza este palindrom (se citește invers la fel ca în original).*/
    function isPalindrom(string){
        let str = string.toLowerCase();
        let str2 = str.split('').reverse().join('');
        return str === str2 ? true : false
    }
    console.log(isPalindrom('eye'))

/* 		function isInteger(x)
	Verificați dacă parametrul transmis către funcție este un număr întreg.*/
    function isInteger(x){
        return Number.isInteger(x) ? true : false
    }
    console.log(isInteger(12.5))
/* 		function isFloat(x)
	Verificați dacă parametrul transmis către funcție este un număr real (cu numere după virgula).*/
    function isFloat(x){
        return Number.isFloat(x) ? true : false
    }
    console.log(isFloat(12.5))
/* 		function convertToRomanNumber(x);
	Transformati un număr X întreg în echivalentul scris cu numerale romane.*/
    function convertToRomanNumber(x){
        var obiect = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
        var str = ''
        var i
        for ( i in obiect ) {
            while ( x >= obiect[i] ) { //x = 1224 > M => r = "M", x = 224 => r="MC", r = 24 ....
                str += i;
                x -= obiect[i];
            }
        }
        return str;
                
    }

    console.log(convertToRomanNumber(1224))