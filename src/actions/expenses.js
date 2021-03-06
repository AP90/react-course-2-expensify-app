import uuid from "uuid";
import database from "../firebase/firebase";

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes


export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {
            description, note, amount, createdAt
        }

        // allows for promise chaining in testing
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};


export const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});


//  create start remove expense

//  edit expense page  add start remove expense instead
//  adjust edit expensepage tests


export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeExpense({id}));
            });
    };
};



export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

//  create starteditexpense 
// test with should edit expenses from firebase
// use starteditexpense in edit expense page
//  adjust edit expense page tests

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
            });
    };
};

// set_expenses
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});

// export const startSetExpenses;
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // fetch expense data
        return database.ref(`users/${uid}/expenses`)
            .once("value")
            .then((snapshot) => {
                // parse data into array
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                // dispatch set_expenses
                dispatch(setExpenses(expenses));
            });
    }
};