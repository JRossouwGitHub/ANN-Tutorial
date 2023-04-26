const math = require("./dot.js")
const NeuralNetwork = require("./NeuralNetwork.js")
const Layer = require("./Layer.js")

const X = [
    [1.0, 2.0, 3.0, 2.5],
    [2.0, 5.0, -1.0, 2.0],
    [-1.5, 2.7, 3.3, -0.8]
]

const ANN = new NeuralNetwork(X)

let layer1 = new Layer(4, 5)
let layer2 = new Layer(5, 2)

ANN.layers = [
    layer1,
    layer2
]

ANN.run()