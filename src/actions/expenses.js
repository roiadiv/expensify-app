import uuid from 'uuid';
import database from '../firebase/firebase';
////The Action we gonna use is:
//ADD_EXPENSE
//what actualy chnage the redux store
export const addExpense  = (expense)=>({
    type: 'ADD_EXPENSE',
    expense 
});
//152
//async action that feching data with firebase
export const startAddExpense = (expenseData ={})=>{
    return (dispatch)=>{
        const{
            description = '',
            note = '',
            amount= 0,
            createdAt = 0 

        } = expenseData;

        const expense = {description,note,amount,createdAt};

        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense  = ({id}={})=>({
    type: 'REMOVE_EXPENSE',
    id
});
 
export const startRemoveExpense = ({id}={})=>{
    return (dispatch)=>{
        // const expense = {description,note,amount,createdAt};

        return database.ref(`expenses/${id}`).remove().then((ref)=>{
            dispatch(removeExpense({id}));
        });
    };
}

//EDIT_EXPENSE
export const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id,updates)=>{
return (dispatch)=>{
    return database.ref(`expenses/${id}`).update(updates).then(()=>{
        dispatch(editExpense(id,updates));
    });
    }
};

//SET_EXPENSES
export const  setExpenses = (expenses)=>({
    type:'SET_EXPENSES',
    expenses
});
export const startSetExpenses = ()=>{
    return (dispatch)=>{
        return database.ref('expenses').once('value',(snapshot)=>{///we return a promise that when he return to app.js the then function fire
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id:childSnapshot.key,
                        ...childSnapshot.val()
                })
            });
            dispatch(setExpenses(expenses));
        });
    };
};
