const utils={}

utils.formatPercent=(n)=>{
    return (n*100).toFixed(2)+"%"
}

utils.printProgress=(count,max)=>{
    process.stdout.clearLine()
    process.stdout.cursorTo(0)

    //calculating the %
    const percent = utils.formatPercent(
        count/max
    )
    process.stdout.write(count+"/"+max+"("+percent+")"
    )
}

utils.groupBy=(objArray,key)=>{
    const groups = {}
    for(let obj of objArray){
        const val=obj[key]
        if(groups[val]==null){
            groups[val] = []
        }
        groups[val].push(obj)
    }
    return groups;
}
if(typeof module!=="undefined"){
    module.exports = utils
}