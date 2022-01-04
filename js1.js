//gallerie
const filterItems = document.querySelector(".items");
const filterImg = document.querySelectorAll(".cardd");

window.onload=()=>{ 
    filterItems.onclick =(selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            // console.log("true");
            filterItems.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName =selectedItem.target.getAttribute("data-name");
            // console.log(filterName);
            filterImg.forEach((cardd)=>{
                let filterImages = cardd.getAttribute("data-name"); 
                // console.log(filterImages);
                if((filterImages==filterName) || filterName =="all"){
                    cardd.classList.add("show");
                }else{
                    cardd.classList.add("hide");
                    cardd.classList.remove("show");
                }
            });
        }
    }
}