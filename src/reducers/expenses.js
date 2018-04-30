
//The Expense Reducer
//concat return new array
//push return the lenth of the new array
const expenseReducerDefultState = [];
export default (state = expenseReducerDefultState , action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return state.concat(action.expense)//we use conact becouse push change the orignal array, and concat combine the new item in the array
        //we can use  [...state,action.expense] as a same thing -Spreading array operator 
        case 'REMOVE_EXPENSE':
        return state.filter(({id})=> id !== action.id);
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id === action.id){
                return{
                    ...expense,
                    ...action.updates
                };
            }else{
                return expense
            }
        }) 

        case 'SET_EXPENSES':
        return action.expenses;
        default:
        return state;
    }
}

