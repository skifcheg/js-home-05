console.group("---------- 1 ----------");

function typesOfArray(arr) {
    var str = 0;
    var obj = 0;
    var num = 0;
    var bol = 0;
    var nul = 0;
    var und = 0;

    console.info(arr);

    for(var i = 0; i < arr.length; i++) {

        if(arr[i] !== null) {
            switch(typeof(arr[i])) {
                case 'string': str++; break;
                case 'number': num++; break;
                case 'object': obj++; break;
                case 'boolean': bol++; break;
                case 'undefined': und++; break;
            }
        }
        else {
          nul++;  
        } 
    }
        console.log(
            'Array types stat: ',
            '\nstring: ' + str, 
            '\nnumber: ' + num, 
            '\nobject: ' + obj, 
            '\nboolean: ' + bol, 
            '\nnull: ' + nul, 
            '\nundefined: ' + und
        );

}
typesOfArray([1, 'a', 'b', {}, {}, null, null, undefined, true, false]);

console.groupEnd("--------------------");
console.group("---------- 2 ----------");





console.groupEnd("--------------------");
console.group("---------- 3 ----------");





console.groupEnd("--------------------");
console.group("---------- 4 ----------");

function deepEqual(a, b){
    var str1 = str2 = "";
    for ( var key in a){
        str1 += a[key] + ":" + key;
    }
    for (var key in b){
        str2 += b[key] + ":" + key;
    }
    console.log(str1 + " == " + str2);
    return str1 == str2;
} 

var a = {
 name:       'John',
 lastname:   'Doe',
 age:        76
 };
 
var b = {
 name:       'John',
 lastname:   'Doe',
 age:        76,
};

console.log(deepEqual(a, b));

console.groupEnd("--------------------");