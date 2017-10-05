import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
// funtion required to set up the filter object
import selectExpenses from "../selectors/expenses";


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((item, index) => {
                    return <ExpenseListItem {...item} key={item.id} />
                })
            )
        }
        
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}


export default connect(mapStateToProps)(ExpenseList);
