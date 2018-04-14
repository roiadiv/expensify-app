import React from 'react';//using jsx

const EditExpensePage = (props)=>(
    <div>
        <p>Edit Expense Page {props.match.params.id}</p>
    </div>
);

export default EditExpensePage;