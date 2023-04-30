const math = require('mathjs')
const clip = require("../Library/clip").clip

class Loss{
    constructor(){
    }

    calculate(output, y){
        let sample_losses = this.forward(output, y)
        let data_loss = math.mean(sample_losses)
        return data_loss
    }
}


class CategoricalCrossEntropy extends Loss{
    constructor(){
        super()
    }

    forward(y_pred, y_true){
        let y_pred_clipped = clip(y_pred)
        let correct_confidences = 0

        if(y_true.reduce((x, y) => Math.max(x, y.length ?? 0), 1) == 1){
            correct_confidences = y_pred_clipped.map((layer, index) => layer[y_true[index]])
        } 
        else if(y_true.reduce((x, y) => Math.max(x, y.length ?? 0), 1) == 2) {
            correct_confidences =  y_pred_clipped.map((layer, index) => math.sum(layer * y_true[index]))
        }

        let negative_log_likelyhoods = correct_confidences.map(cc => -math.log(cc)) 
        return negative_log_likelyhoods
    }
}

module.exports = CategoricalCrossEntropy