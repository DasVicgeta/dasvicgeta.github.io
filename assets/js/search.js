document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscard")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".homework").forEach(fruta =>{

          fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
      })

  }


})