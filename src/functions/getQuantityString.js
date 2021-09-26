 export function getQuantityString(quantity) {
    const lastNumber = quantity.toString().slice(-1);

    let string = ''

    lastNumber === 1 ? string = quantity + ' товар'
    :
    lastNumber < 5 && lastNumber > 1 ? string = quantity + ' товара'
    : 
    string = quantity + ' товаров'

    return string
}