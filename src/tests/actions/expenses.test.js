import {addExpense,editExpense,removeExpense} from '../../actions/expenses';


//toBe will fail becuse when we try equal to objects : {}==={} the resoult is false
//instade we gonna use toQual
test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
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

test('should setup add expense action object',()=>{
    const expenseData = {id:'123',description:'someDes' ,note:'new note' ,amount: 123, createdAt:2}
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense :{
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense defualt action object',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense :{
            description : '',
            note : '',
            amount: 0,
            createdAt : 0 ,
            id: expect.any(String)
        }
    })
});