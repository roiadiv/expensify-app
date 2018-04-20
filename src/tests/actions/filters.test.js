import {setStartDate,setEndDate, sortByAmount,sortByDate,setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should setup start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should setup end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});

//
test('should setup sort by amount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('should setup sort by date action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('should setup set text filter action object',()=>{
    const action = setTextFilter('gas');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'gas'
    });
});

test('should setup set text filter default action object',()=>{
    
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
});