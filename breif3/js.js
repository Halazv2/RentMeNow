// document.querySelectorAll("input").forEach(input => console.log(input.value))
// function myFunction() {
//     alert("input");
//   }
// document.querySelector("#send").addEventListener("click", function() {
// document.querySelectorAll("input").forEach(input => alert(`${input.name}: ${input.value}`));
// });
    


    //gallerie

    const filterItems = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".imagee");

    window.onload=()=>{ 
        filterItems.onclick =(selectedItem)=>{
            if(selectedItem.target.classList.contains("item")){
                // console.log("true");
                filterItems.querySelector(".active").classList.remove("active");
                selectedItem.target.classList.add("active");
                let filterName =selectedItem.target.getAttribute("data-name");
                // console.log(filterName);
                filterImg.forEach((imagee)=>{
                    let filterImages = imagee.getAttribute("data-name"); 
                    // console.log(filterImages);
                    if((filterImages==filterName) || filterName =="all"){
                        imagee.classList.add("show");
                        imagee.classList.remove("hide");
                    }else{
                        imagee.classList.add("hide");
                        imagee.classList.remove("show");
                    }
                });
            }
        }
    }