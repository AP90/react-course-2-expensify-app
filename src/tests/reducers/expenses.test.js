import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";


test("should set default state", () => {
    const state = expensesReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});


test("should remove expsense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});


test("should not remove expsense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const addedExpense = {
            description: "Party",
            createdAt: 0,
            amount: 100,
            note: "",
            id: "10"
        }
    const action = {
        type: "ADD_EXPENSE",
        expense: addedExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, addedExpense]);
});

test("should edit an expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "1",
        updates: {
            description: "Boost Bar"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe("Boost Bar");
});

test("should not edit expense if expense not found", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "200",
        updates: {
            description: "NOT ALLOWED"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should set expenses", () => {
    // dispatch action
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});

