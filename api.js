// fetch('https://api-thirukkural.vercel.app/api?num=25')
// .then(res => res.json())
// .then(msg => console.log(msg.line1,msg.line2));


async function get(){              // using async 
    try{
      let thiruurl = "https://api-thirukkural.vercel.app/api?";
      const thirukuralnum = document.getElementById("num").value;

         var data = await fetch(`${thiruurl}num=${thirukuralnum}`,{method:"GET"});//await with method
         data=await data.json();
         
         
       }
       catch(err)
       {
        console.log(err);
      }

        let info=data;
        const div=document.querySelector(".dis"); 
        div.innerHTML=`
        <div id="card">
        <p>${info.line1}</p>
        <p>${info.line2}</p>
        <p>பொருள்: ${info.tam_exp}</p>
        </div>`;
  }