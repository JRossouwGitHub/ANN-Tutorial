const math = require('mathjs')

class Softmax{
    constructor(){
    }

    forward(inputs){
        let exp_values = inputs.map(layer => layer.map(v => math.exp(v - math.max(layer))))
        let probabilities = exp_values.map((layer, index) => layer.map(ev => ev / exp_values.map(layer => [math.sum(layer)])[index]))
        this.output = probabilities
    }
}

module.exports = Softmax