export const getTotal = (orderItems) => {
    let sum = 0;
    for (let i = 0; i < orderItems.length; i++) {
        if(orderItems[i].hasOwnProperty('total')){
            sum+=parseInt(orderItems[i].total);
        }
    }
    return sum;
}