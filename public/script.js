async function myfun(){
    //  e.preventDefault()
      console.log("data validated")
      const $code= "565"
      const $name= "jjkjng"
      const $On= "15-02-2025"
      const $key = "himkj"
      const $value = "hellnjnjo"
  
  
   const result = await fetch('/tasks', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  code:$code,
                  name:$name,
                  On:$On,
                  key:$key,
                  value:$value
          })
      }).then((res) => res.json())
     // console.log(res)
      if(!result.error){
          alert("success")
      } else {
          alert("failed")
      }

  }

  window.onload=async()=>{
    console.log("onload")
    const result1 = await fetch(`/task`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      //  body: JSON.stringify({ 
          
       // })   
    }).then((res) => res.json())
     console.log(result1)
   // const mappedUsers = result) => {
   //     return csole.log("Ok");
  //    });
      if(!result1.error){
        console.log("Success")
    }
      else{
        console.log("failed")
      }
}