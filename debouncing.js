//The debounce function forces a function to wait a certain amount of time before running again. 
//It is a practice used to improve browser performance.
//"cerner_2tothe5th_2022"

const fetchData = (event) =>{
     console.log("Network call", event.target.value)
 }

 const debounce = function (wrapperFunction, delay){
     let timmer;
     return function(){
         clearInterval(timmer);
         timmer=setTimeout(() => {
             wrapperFunction.apply(this, arguments) 
         }, delay);
     }
 }

 const enhancedDebounceFunction = debounce(fetchData, 2000); //calls fetch data only at certain interval of time
