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


var rangeToArray = function(rangeStart, rangeStop, rangeStep){
    var arr = []; var index = 0;

    if(rangeStop >= rangeStart){
        for(var i = rangeStart; i <= rangeStop; i = i + rangeStep){
            arr[index] = i;
            index++;
        }
    }else{
        for(var i = rangeStart; i >= rangeStop; i = i - rangeStep){
            arr[index] = i;
            index++;
        }
    }
    return arr;
};

var sumArray = function(arr){
    var sum = 0;
    arr.forEach(function(item){
        sum = sum + item;
    });
    return sum;
};

var multiplyArray = function(arr){
    var sum = 1;
    arr.forEach(function(item){
        sum = sum * item;
    });
    return sum;
};

var reverseArray = function(arr){
    return arr.reverse();
};

console.groupEnd("--------------------");
console.group("---------- 3 ----------");

(function(){

    var text = prompt('write text please');
    var rightText, percent;
    var punctuations = [',','.','!','?','-',':',';'];
    var arrP = []; var j = 0;

    if( text.length < 1 || text.length > 140 )  text = prompt('write text from 1 to 140 characters');

    var arr = text.split("");

    for(i = 0; i < arr.length; i++){

        if (punctuations.indexOf(arr[i]) != -1 ){
            arrP[j] = i;
            j++;
        }

    }

    rightText = arr.join("");
    console.log(arr, arrP);

    console.log("Hey, here's Your original message: %s \n We've found some mistakes, so corrected them for You: %s \n %f, of the text are punctuation marks!", text, rightText, percent);

})();


console.groupEnd("--------------------");
console.group("---------- 4 ----------");

function deepEqual(a, b){
    var str1 = "";
    var str2 = "";
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