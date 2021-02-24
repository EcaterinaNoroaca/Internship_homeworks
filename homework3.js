/*Exercitii:
1. Write a JavaScript function that returns the function name.
2. Write a function that receives a random nr of string arguments and returns a story generated with the help of these arguments and other custom text.
3. Extend the default values functionality (for function parameters) to set to default not only the undefined values but also the null values (but not other falsy values)
4. Write a function that behaves differently depending on the nr of arguments being passed*/

function FirstFunc(){
    return FirstFunc.name
}
FirstFunc()

function SecondFunc(...Args){
    let str = "Hi, here is a messagge for you: "
    for (let i=0; i<Args.length; i++){
         str += Args[i] + " "
    }
    return str
}

SecondFunc('Who', 'are', 'you','?')

function ThirdFunc(a,b,c,d){
    a = typeof a === 'undefined' || null ? 0 : a;
    b = typeof b === 'undefined' || null ? 0 : b;
    c = typeof c === 'undefined' || null ? 0 : c;
    d = typeof d === 'undefined' || null ? 0 : d;
    return a+b+c+d
}

ThirdFunc(5,5)

function FourthFunc(...theArgs){
    switch (arguments.length){
      case 1 : str = "It's a line";
      break;
      case 2 : str = "There's two lines";
      break;
      case 3 : str = "It's a triangle";
      break;
      case 4 : str = "It's a square";
      break;
      case 5,6,7 : str = "Has more thar 4 sides/lines";
      break;
    }
    
    return str;
}

FourthFunc(5,5)