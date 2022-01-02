// document.querySelectorAll("input").forEach(input => console.log(input.value))
// function myFunction() {
//     alert("input");
//   }
// document.querySelector("#send").addEventListener("click", function() {
// document.querySelectorAll("input").forEach(input => alert(`${input.name}: ${input.value}`));
// });
    


    //gallerie

    const filterItems = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".card");

    window.onload=()=>{ 
        filterItems.onclick =(selectedItem)=>{
            if(selectedItem.target.classList.contains("item")){
                // console.log("true");
                filterItems.querySelector(".active").classList.remove("active");
                selectedItem.target.classList.add("active");
                let filterName =selectedItem.target.getAttribute("data-name");
                // console.log(filterName);
                filterImg.forEach((card)=>{
                    let filterImages = card.getAttribute("data-name"); 
                    // console.log(filterImages);
                    if((filterImages==filterName) || filterName =="all"){
                        card.classList.add("show");
                    }else{
                        card.classList.add("hide");
                        card.classList.remove("show");
                    }
                });
            }
        }
    }