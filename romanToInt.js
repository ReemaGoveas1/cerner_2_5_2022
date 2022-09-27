//Find the integer equivalent to Roman values
//"cerner_2tothe5th_2022"

var romanToInt = function(s) {
    let roman = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000};
    let ans = 0;
    for(let i = s.length-1; i >= 0; i--){
        let number = roman[s.charAt(i)]
        if(4*number < ans) ans-=number
        else ans += number
    }
    return ans;
};

console.log(romanToInt("VII"))
