const parts = document.querySelectorAll("div[id]");
const puzzles = document.querySelectorAll(".puzzle");
const rest = document.getElementById("reset-btn");

/*for (const part of parts){
    part.ondragstart = function(e){
        console.log(e.target);
        e.dataTransfer.setData("key", e.target.id)
    }
    }

for (const puzzle of puzzles){
   puzzle.ondragover = function(e){
       e.preventDefault();
   }
   puzzle.ondrop = function(e){
       let dropItem = e.dataTransfer.getData('key');
       e.preventDefault();
       let myElement = document.getElementById(dropItem);
       puzzle.id = myElement.id;

        
       
   }
}   */

for (const part of parts){
part.addEventListener ("dragstart", dragStart);
part.addEventListener ("dragend", dragEnd);
//console.log(part)
function dragStart (e){
    //console.log(e.target.id);
    //console.log(e.target.outerHTML);
    //e.dataTransfer.setData("key", e.target.id)
    e.dataTransfer.setData("x",  JSON.stringify(e.target.outerHTML));
   
    e.target.className += " hold";
    let self = this;
    setTimeout(() => {
        self.className = "invisible"
    }, 0);
   
    
}

function dragEnd (e){
e.target.className = "parts";
};   
}


for (const puzzle of puzzles){
    puzzle.addEventListener('dragover', dragOver);
    puzzle.addEventListener('dragenter', dragEnter);
    puzzle.addEventListener('dragleave', dragLeave);
    puzzle.addEventListener('drop', dragDrop);

    function dragOver (e){
        e.preventDefault()
        //console.log("over")
    }
    
    function dragEnter (e){
        e.preventDefault()
        //console.log("enter")
        this.className += " hovered"
    }
    
    function dragLeave (e){
        e.preventDefault()
        //console.log("leave")
        this.className = "puzzle"
    }
    
    function dragDrop (e){
        e.preventDefault()
        //let dropItem = e.dataTransfer.getData('key');
        //console.log(dropItem);
       // e.target.id = dropItem;
      
       let dropItem = e.dataTransfer.getData('x');
       console.log( JSON.parse(dropItem));
       var dragDataElement = document.createElement('div')
       dragDataElement.innerHTML = JSON.parse(dropItem)
       console.log(dragDataElement.firstChild);
       let originalPart = dragDataElement.firstChild;
       //console.log(originalPart.id)
       //console.log(e.target)
       //e.target.className ="empty";
       e.target.className ="puzzle"
       e.target.appendChild(originalPart);
      
    }
}


rest.addEventListener('click',resetBtn);
function resetBtn(){
    window.location.reload();
}