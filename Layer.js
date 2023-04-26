const math = require("mathjs")
const dot = require("./dot.js").dot

class Layer{
    constructor(n_inputs, n_neurons){
        this.weights = math.multiply(math.random([n_inputs, n_neurons], -1.0, 1.0), 0.1)
		this.biases = math.zeros(1, n_neurons)
    }

    forward (inputs) {
        this.output = dot(inputs, this.weights, this.biases)
	}
}

module.exports = Layer