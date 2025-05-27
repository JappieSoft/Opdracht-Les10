function calcIncrement(inputArray) {
    let value = inputArray + 1 ;
    return value;
}


export function calcDecrement(inputArray) {
    let value = inputArray > 0 ? inputArray - 1 : 0;
    return value;
}


export default calcIncrement;