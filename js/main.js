// dragstart,dragover,drop,dragend,dragleave

let dragArea=document.querySelector(".dragArea")
let dropArea=document.querySelector("#dropArea")
let dragitem=document.querySelectorAll(".dragArea .drag-item")

for (let i = 0; i < dragitem.length; i++) {
    
    dragitem[i].addEventListener("dragstart",function(j){
        this.style.background="yellow"
        j.dataTransfer.setData("ulviId",this.id)
        // console.log(this);
    })
    dragitem[i].addEventListener("dragleave",function(){
        this.style.background="transparent"
    })
    // dragitem[i].addEventListener("dragover",function(){
    //     this.style.background="orange"
    // })
    

}

dropArea.addEventListener("dragover",function(e){
    e.preventDefault()
    this.style.background="green"
})
dropArea.addEventListener("dragleave",function(){
    this.style.background="transparent"
})

dropArea.addEventListener("drop",function(e){
    const myId=e.dataTransfer.getData("ulviId");

 let items=document.getElementById(myId)   
 dropArea.appendChild(items)
  
})
