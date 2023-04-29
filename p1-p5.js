const math = require("./Library/dot.js")
const NeuralNetwork = require("./NeuralNetwork.js")
const Dense = require("./Layers/Dense.js")
const ReLU = require("./Activations/ReLU")
const data = require("./Library/Util.js")

const [X, y] = data.spiral_data(100, 3);

const ANN = new NeuralNetwork(X)

let layer1 = new Dense(2, 5)
let activation1 = new ReLU()

ANN.layers = [
    layer1
]

ANN.activations = [
    activation1
]

ANN.run()