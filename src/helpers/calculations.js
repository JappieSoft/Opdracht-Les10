function calcIncrement(inputArray) {
    return inputArray + 1;
}


export function calcDecrement(inputArray) {
    return inputArray > 0 ? inputArray - 1 : 0;
}


export default calcIncrement;