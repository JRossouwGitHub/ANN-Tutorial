const math = require("./Library/dot");

//Inputs
//This can 1 of 2: Either the true inputs, or outputs from a previous neuron
const inputs = [
    [1.0, 2.0, 3.0, 2.5],
    [2.0, 5.0, -1.0, 2.0],
    [-1.5, 2.7, 3.3, -0.8]
]

//Layer 1, 1 Node
const weights = [
    [0.2, 0.8, -0.5, 1.0],
    [0.5, -0.91, 0.26, -0.5],
    [-0.26, -0.27, 0.17, 0.87],
]
const biases = [2.0, 3.0, 0.5]


//Layer 2, 1 Node
const weights2 = [
    [0.1, -0.14, 0.5],
    [-0.5, 0.12, -0.33],
    [-0.44, 0.73, -0.13],
]
const biases2 = [-1.0, 2.0, -0.5]

//Get the dot product of the matricies + bias
let layer1_outputs = math.dot(inputs, weights, biases)
//Here we can see the output from 1 neuron as the input to the next, layer to layer
let layer2_outputs = math.dot(layer1_outputs, weights2, biases2)

console.log(layer2_outputs)

/* ---------------------------------------------- */
//Softmax math
inputs = [
    [4.8, 1.21, 2.385],
    [8.9, -1.81, 0.2],
    [1.41, 1.051, 0.026]
]

let max_value = inputs.map(layer => layer.map(v => math.max(layer)))

let exp_values = inputs.map(layer => layer.map(v => math.exp(v - math.max(layer))))

let norm_outputs = exp_values.map((layer, index) => layer.map(ev => ev / exp_values.map(layer => [math.sum(layer)])[index]))

console.log(max_value)
console.log(exp_values)
console.log(norm_outputs)


//Loss calc
let softmax_output = [0.7, 0.1, 0.2]
let target_output = [1, 0, 0]


let loss = -(math.log(softmax_output[0]) * target_output[0] + math.log(softmax_output[1]) * target_output[1] + math.log(softmax_output[2]) * target_output[2])
console.log(loss)
loss = -math.log(softmax_output[0]) //simplified
console.log(loss)

//Accuracy
let softmax_outputs = [
    [0.7, 0.2, 0.1],
    [0.5, 0.1, 0.4],
    [0.02, 0.9, 0.08]
]

let class_targets = [0, 1, 1]

let predictions = softmax_outputs.map(layer => layer.indexOf(math.max(layer)))
let accuracy = math.mean(predictions.map((p, index) => p == class_targets[index]))
console.log(predictions)
console.log(accuracy)