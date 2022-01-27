export const calcPercentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
};

export const calcDiscount = (price, discount) => {
    return (price * (100 - discount)) / 100;
};
