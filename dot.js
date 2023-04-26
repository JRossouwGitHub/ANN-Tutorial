const math = require('mathjs')

const dot = (inputs, weights, biases) => {
    inputs = math.matrix(inputs)
    weights = math.matrix(weights)
    return (
        math.add(
            math.multiply(inputs, weights), //Multiply the matricies
            biases //Add the biases
        )._data
    )
}

module.exports = {
    dot
}