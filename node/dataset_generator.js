const fs = require("fs")
const draw = require("../common/draw")
const constants = require("../common/constants.js")
const utils = require("../utils.js")


const {createCanvas} = require("canvas")
const canvas = createCanvas(400,400)
const ctx = canvas.getContext("2d")


//stores summary of the samples
constants.SAMPLES = constants.DATASET_DIR+"/samples.json"

//read the files names from the raw data
const fileNames = fs.readdirSync(constants.RAW_DIR)

const samples = []
let id = 1

fileNames.forEach(fn=>{
    const content = fs.readFileSync(
        constants.RAW_DIR+"/"+fn
    )
    //extract some data from each raw data
    const {session,student,drawings} = JSON.parse(content)

    for(let label in drawings){
        samples.push({
            id,
            label,
            student_name:student,
            student_id:session
        });
        //create a full file of all the points in drawing an object

        const paths = drawings[label]
        fs.writeFileSync(
            constants.JSON_DIR+"/"+id+".json",
            JSON.stringify(paths)
        )

        generateImageFile(
            constants.IMG_DIR+"/"+id+".png",
            paths
        )
          utils.printProgress(id,fileNames.length*6)
        id++
    }
})

//write the new data collected from the raw data to the sample file

fs.writeFileSync(constants.SAMPLES,
    JSON.stringify(samples)
    )

fs.writeFileSync(constants.SAMPLES_JS,
    "const samples="+JSON.stringify(samples)+";"
    )

    function generateImageFile(outFile,paths){
        ctx.clearRect(0,0,
            canvas.width,canvas.height)
    draw.paths(ctx,paths);
    const buffer = canvas.toBuffer("image/png")
    fs.writeFileSync(outFile,buffer)
    
}
    