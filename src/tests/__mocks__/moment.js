// import moment from 'moment'; -- we cant use this. stack trcae error

const moment = require.requireActual('moment');

export default (timestemp = 0)=>{
    return moment(timestemp);
};