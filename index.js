
// const findKey = function (str , value) {
//     let key = " "
//     let isReadingKey = false
//     for (let i = 0; i < str.length; i++) {
//        if (str[i] == '#') {
//         isReadingKey = !isReadingKey
//        }
//         if (isReadingKey && str[i]!='#') {
//             key += str[i]
//         }
//     }
//     return key
// }
// console.log(
//     findKey(str)
// );
// const str = 'apple #car# lily '
// const replaceKey = function (str , value) {
//     let newStr = ' '
//     let isReadingKey = false
//     let foundKey = false
//     for (let i = 0; i < str.length; i++) {
//        if (str[i] == '#') {
//         isReadingKey = !isReadingKey
//         foundKey = false
        
//        }
//      if (isReadingKey) {
//          if (!foundKey) {
//              newStr += value
//              foundKey = true
//          } else {
//              newStr += str[i] == '#' ? ' ' : str[i]
             
//          }
//      }
//     }
//      console.log(newStr);
//     return newStr
//     }
//     replaceKey(str,'we')
   



    // const counterSpecialChar = function (str , special) {
    //        let count = 0
    //        for (let i = 0;str[i]; i++) {
    //            for (let j = 0;special[j]; j++) {
    //              if (str[i]== special[j]) {
    //                  count ++
    //              }
                
    //            }
           
            
    //        }
    //        return count;
        
    //    }
    //    const str = 'lyugf875r76if5c4wc3lioi8b7b84r6x6iu'
    //    const special = '8'
    //    console.log(counterSpecialChar (str , special));
    
    const arr1 = ['lily' ,'Insherah', 'haneen']
    const sayHello = function (Arr) {
        for (let i = 0; i < Arr.length; i++) {
            console.log('hello', Arr[i]);
            
        }
    }
sayHello(arr1)
sayHello(['may'])

const formatArr = function (arr) {
    for (let i= 0; i < arr.length; i++) {
       arr[i] = 'hello ' + arr[i]
    
    }
}
formatArr(arr1)
console.log(arr1);

