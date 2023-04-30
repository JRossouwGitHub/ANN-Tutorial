function clip(values){
    return values.map(layer => layer.map(v => Math.min(Math.max(v, 1 - (1 * 10 ** 7)), (1 * 10 ** 7))))
}

module.exports = {
    clip
}