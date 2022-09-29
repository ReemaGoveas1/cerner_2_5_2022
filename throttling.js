//Throttling is a technique where we make the function call in a predetermined time interval irrespective of continuous user actions.
//"cerner_2tothe5th_2022" 
 
 const fetchData = (event) =>{
     console.log("Network call", event.target.value)
 }

 const throttling = function ( wrapperFunction, delay){
  let flag = true;
  return function(){
      if(flag){
          wrapperFunction.apply(this, arguments);
          flag = false; // api doesn't get called
          setTimeout(() => {
              flag = true; // after 2 secs api gets called and flag will be true
          }, delay)
      }
  }
 }

 const enhancedThrottledFunction = throttling(fetchData, 2000)
