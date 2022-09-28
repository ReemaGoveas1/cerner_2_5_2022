//Flattens the given object
//"cerner_2tothe5th_2022"

 const enrollment = {
    user: {
         id: "string",
         name: "string"
     },
     test: {
         test1: {
             test2: {
                 val0: "val0",
                 test4: "val4"
             },
         },
     },
     finished: "boolean",
     path: "boolean"
 }

 const result ={};
 const flatnening = (obj,result)=>{
     Object.keys(obj).forEach(item=>{
         if(typeof obj[item] === "object"){
             flatnening(obj[item],result)
         }
         else{
             result[item] = obj[item];
         }
     })
     return result;
 }
 console.log(flatnening(enrollment,result))
