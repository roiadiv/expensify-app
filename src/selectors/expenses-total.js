export default (expenses)=>{
    return expenses.
    map((expense)=> expense.amount).
    reduce((sum,value)=>sum+value,0);
    // const reducer = (accumulator, currentValue) => accumulator + currentValue.amount;
    // return expenses.reduce(reducer, 0);

    // var total = expenses.reduce(function(sum,expense){
    //     return sum+expense.amount;
    // },0);
    // return total;

    // var total = 0;
    // expenses.map((expense)=> {
    //         total = expense.amount +total;
    // })
    // return total; 


    // var total = 0;
    // if(expenses){
    //     if(Array.isArray(expenses)){
    //     expenses.map((expense)=> {
    //         total = expense.amount +total;
    //     })
    //    }else{
    //     total = expenses.amount +total;
    //    }
    // }
    // return total; 
};