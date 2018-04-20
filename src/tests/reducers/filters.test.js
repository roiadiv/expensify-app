import moment from 'moment';
import filtersReducer from '../../reducers/filters'


test('should setup defulte filter values',()=>{
    const state = filtersReducer(undefined, '@@INIT');
    expect(state).toEqual({
        text: '',
        sortBy: 'date', 
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by to amount',()=>{
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date',()=>{
    const curruntState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy:'amount'
    } 
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(curruntState,action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter',()=>{
    const action = {type: 'SET_TEXT_FILTER', text: 'new'};
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe('new');
});

test('should set startDate filter',()=>{
    const startDate = moment();
    const action = {type: 'SET_START_DATE', startDate};
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate);
});

test('should set startDate filter',()=>{
    const endDate = moment();
    const action = {type: 'SET_END_DATE', endDate};
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toEqual(endDate);
});
