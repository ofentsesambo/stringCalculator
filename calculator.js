function add(str){
    
    var sum = 0;
    var i;
    str = str.split(/,|\n|;/g)
    var num = str.length;
    this.reg = /d{1,}/gm;
    var newStr = str.match(this.reg)

    if (str == "" ){
        return 0;
    }
   
    else if(num == 1){
        return str;
    }
    else{
        for(i = 0; i < num; i++){
            sum = sum + parseInt(str[i]);

        }
        return sum;
    }

    }      

console.log(add("//\n1;2"))

