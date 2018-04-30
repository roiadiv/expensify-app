import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense,editExpense,removeExpense ,setExpenses, startSetExpenses,startRemoveExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

//we call configureMockStore with array of midllwere we gonna use
const craeteMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description,note, amount, createdAt})=>{
        expensesData[id] = {description,note, amount, createdAt};
        
    })
    database.ref('expenses').set(expensesData).then(()=> done());
})

//toBe will fail becuse when we try equal to objects : {}==={} the resoult is false
//instade we gonna use toQual
test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should remove expense from firebase',(done)=>{
    const store = craeteMockStore({});
    store.dispatch(startRemoveExpense({id:expenses[1].id})).then(()=>{
        const actions = store.getActions();//return an array of our actions
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id:expenses[1].id
        });
        return database.ref(`expenses/${expenses[1].id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup edit expense action object',()=>{
    const action = editExpense('123abc', {note:'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates :{
            note:'new note'
        }
    })
});

test('should setup add expense action object with provided values',()=>{
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense :expenses[2]
    })
});

//done is for Async test - until we call done the test is not over
test('should add expense to database and store',(done)=>{
    const store = craeteMockStore({
    });
    const expenseData = {
        description:'Mouse',
        amount:3000,
        note:'This one is better',
        createdAt:1000

    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions()//return an array of our actions
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store',(done)=>{
    const store = craeteMockStore({
    });
    const expenseData = {
        description:'',
        amount: 0,
        note:'',
        createdAt:0
    }
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions()//return an array of our actions
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should setup set expense action object with data',()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase',(done)=>{
    const store = craeteMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();//return an array of our actions
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    });
});

// test('should setup add expense defualt action object',()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense :{
//             id: expect.any(String),
//             description : '',
//             note : '',
//             amount: 0,
//             createdAt : 0 
//         }
//     })
// });