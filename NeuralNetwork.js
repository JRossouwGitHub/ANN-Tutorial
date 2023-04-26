class NeuralNetwork{
    constructor(X){
        this.X = X
        this.layers = []
    }

    run(){
        this.layers.map((layer, index) => {
            let prevLayer = this.layers[index - 1]
            layer.forward(prevLayer ? prevLayer.output : this.X)
        })
    }
}

module.exports = NeuralNetwork