function subString(input) {
    const newArr = []
    for(let i = 0; i < input.length; i++) {
        for(let j = i; j < input.length; j++) {
            newArr.push(input.slice(i, j + 1))  
        }
    }
    return newArr
}   

export default subString