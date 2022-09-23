var twoSum = function(numbers, target) {
    for(i=0;i<numbers.length;i++){
        let diff = target - numbers[i];
        let diffIndex = numbers.indexOf(diff);
        if(diffIndex!==-1 && diffIndex!==i){
            return [i+1, diffIndex+1]            
        }
    }
};

console.log(twoSum([2,0,3,4],7))
