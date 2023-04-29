const math = require('mathjs')

class ReLU{
    constructor(){
    }

    forward (inputs) {
		this.output = math.matrix(inputs.map(layer => layer.map(i => i < 0 ? 0 : i)))._data
	}
}

module.exports = ReLU