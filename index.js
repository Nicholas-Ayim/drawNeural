//for every input, mulitply that by its weight
//sum all of the weighted inputs
//compute the output of the perceptron based on that sum
//passed activation function(the sign of the sum)

const inputs = [10,-20]

const weight = [5,3]
let neuron = []
let classA = []
let classB = []
for(let i =0; i < inputs.length; i++){
    neuron.push(inputs[i]*weight[i])
}

for(let j=0; j < neuron.length; j++){
    if(neuron[j] >= 0){
        const activationFnx= {
            name:"positive class A",
            model:"classification",
            value: neuron[j]
        }
        classA.push(activationFnx)
    }else{
        const activationFnx = {
            name: "negative class B",
            model:"classification",
            value: neuron[j]
        }
        classB.push(activationFnx)
    }
}
console.log("perceptron sum ",neuron)
console.log("class",classA)
console.log("class",classB)