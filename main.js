const math = require("./Library/dot.js")
const NeuralNetwork = require("./NeuralNetwork.js")
const Dense = require("./Layers/Dense.js")
const ReLU = require("./Activations/ReLU.js")
const Softmax = require("./Activations/Softmax.js")
const data = require("./Library/Util.js")

const [X, y] = data.spiral_data(100, 3)

let layer1 = new Dense(2, 3)
let activation1 = new ReLU()

let layer2 = new Dense(3, 3)
let activation2 = new Softmax()

layer1.forward(X)
activation1.forward(layer1.output)
layer2.forward(activation1.output)
activation2.forward(layer2.output)

console.log(activation2.output)