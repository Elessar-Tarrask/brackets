module.exports = function check(str, bracketsConfig) {
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
    let newstr = str.split("");
    if(arguments[1] === config1){
        return true;
    }else{
        return false;
    }
    
    
           
         
        
    
    

  
  
}
