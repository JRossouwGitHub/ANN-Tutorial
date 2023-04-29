const math = require("mathjs")
const dot = require("../Library/dot.js").dot

class Dense{
    constructor(n_inputs, n_neurons){
        this.weights = math.random([n_inputs, n_neurons], -1.0, 1.0)
		this.biases = math.zeros(1, n_neurons)
    }

    forward (inputs) {
        this.output = dot(inputs, this.weights, this.biases)
	}
}

module.exports = Dense