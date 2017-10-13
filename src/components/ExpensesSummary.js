import React from "react";
import {connect} from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}




// export class ExpenseSummary extends React.Component {
//     state = {
//         expenseCount: this.props.expenses.length,
//         expensesTotal: expensesTotal(this.props.expenses)
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Viewing {this.state.expenseCount} expenses totalling {numeral(this.state.expensesTotal / 100).format("$0,0.00")}</h3>
//             </div>
//         )
//     }
// };

// const mapStateToProps = (state) => {
//     return {
//         filters: state.filters,
//         expenses: state.expenses
//     }
// };

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};


export default connect(mapStateToProps)(ExpensesSummary);