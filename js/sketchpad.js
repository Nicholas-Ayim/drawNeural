class SketchPad{
    constructor(container,size=400){
        //using html canvas to create our sketch pad
        this.canvas = document.createElement("canvas")
        this.canvas.width = size
        this.canvas.height = size
        this.canvas.style = `
               background-color:white;
               box-shadow:0px 0px 10p 2px black;
        `;
        container.appendChild(this.canvas)

        //adding undo
        const lineBreak = document.createElement("br")
        container.appendChild(lineBreak)

        this.undoBtn = document.createElement("button");
        this.undoBtn.innerHTML = "UNDO",
        container.appendChild(this.undoBtn)

        //to draw on the canvas
        this.ctx = this.canvas.getContext("2d");

         this.reset()
        //detct the mouse action by using a private method
        this.#addEventListeners();
    }
    //define our reset method
    reset(){

         this.paths=[]
         this.isDrawing=false
         this.#redraw()
    }

    //add onmouse actions
    #addEventListeners(){
        this.canvas.onmousedown=(e)=>{
            const mouse = this.#getMouse(e);
            
            //creating our paths
            this.paths.push([mouse])
            this.isDrawing = true
        }
        //on mouse move or when we start drawing
        this.canvas.onmousemove=(e)=>{
            if(this.isDrawing){
           //get the polygon bound area
           const mouse = this.#getMouse(e);

            //get the last path and join other parts
           const lastPath = this.paths[this.paths.length - 1]
            lastPath.push(mouse)

            //creating our paths
            // this.path.push(mouse);
            // console.log(this.path.length);
            //intialize a private method called redraw and show your
            //drawings on the canvas

            this.#redraw()
            }
        }

        // this.canvas.onmouseup = (e) =>{
        //     this.isDrawing = false
        // }
         document.onmouseup = (e) =>{
            this.isDrawing = false
        }

        this.canvas.ontouchstart=(e)=>{
            const loc = e.touches[0]
            this.canvas.onmousedown(loc)
        }

         this.canvas.ontouchmove=(e)=>{
            const loc = e.touches[0]
            this.canvas.onmousemove(loc)
        }
        //  this.canvas.ontouchend=(e)=>{
        //     const loc = e.touches[0]
        //     this.canvas.onmouseup(loc)
        // }

        document.ontouchend=(e)=>{
            const loc = e.touches[0]
            this.canvas.onmouseup(loc)
        }

        //adding event to the undo btn
        this.undoBtn.onclick=()=>{
            //pop from the array paths and redraw
            this.paths.pop()
            this.#redraw()
        }
    }
    #redraw(){
        //clear our canvas
        this.ctx.clearRect(0,0,
            this.canvas.width,this.canvas.height);
            //draw the path saved in the array using the utility draw
            
            draw.paths(this.ctx,this.paths);
            if(this.paths.length > 0){
                this.undoBtn.disabled = false;
            }else{
                this.undoBtn.disabled = true
            }
            
    }
    #getMouse=(e)=>{
           const rect = this.canvas.getBoundingClientRect();
            return [
                Math.round(e.clientX - rect.left),
                Math.round(e.clientY - rect.top)
            ];
            // console.log(mouse);
    }
}