

function createRow(container,studentName,samples){
    const row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row)

    const rowLabel = document.createElement("div")
    rowLabel.innerHTML = studentName;
    rowLabel.classList.add("rowLabel")
    row.appendChild(rowLabel)

    for(let sample of samples){
        const {id,label} = sample
        const sampleContainer = document.createElement("div")
        sampleContainer.id="sample_"+id;
        sampleContainer.classList.add("sampleContainer")

        const sampleLabel = document.createElement("div")
        sampleLabel.innerHTML=label
        sampleContainer.appendChild(sampleLabel)

        const img = document.createElement("img")
        // console.log(constants.IMG_DIR)
        img.src=`file:///C:/Users/NICK/Desktop/neuralNetworks/drawNeural/data/dataset/image/${id}.png`
        img.alt="no image"
        img.classList.add("thumb");
        // console.log(img)
        sampleContainer.appendChild(img)
        row.appendChild(sampleContainer)
    }
}

