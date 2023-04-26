const math = require("./dot");

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