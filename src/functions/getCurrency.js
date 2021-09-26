export function getCurrency(rub) {
    const euro = 87.43;
    return (rub / euro).toFixed(2)
}