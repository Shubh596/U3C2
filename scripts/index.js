// Add the coffee to local storage with key "coffee"

async function getCoffe(){



    let api = `https://masai-mock-api.herokuapp.com/coffee/menu`;

    let res = await fetch(api);

    let data = await res.json()
    console.log(data)
    append(data.menu.data)


  }
getCoffe()
  
function append(data){
    let get = document.getElementById("menu")

    data.forEach(function(ele){

      let div = document.createElement("div")

      let image = document.createElement("img");
          image.src= ele.image

      let title = document.createElement("h3");
          title.innerText= ele.title
      let price = document.createElement("h4");
        price.innerText= ele.price
      let btn = document.createElement("button")
          btn.innerText= "Add to Bucket"
          btn.addEventListener("click", function(){
            addtobucket(ele)
          })

          get.append(div)
      div.append(image, title, price, btn)
    })

    var bucket =JSON.parse(localStorage.getItem("addbucket")) ||[]
    function addtobucket(ele){

      bucket.push(ele)

      localStorage.setItem("coffee", JSON.stringify(bucket))
    }
}