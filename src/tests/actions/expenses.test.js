import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});


test("Should return edit action object", () => {
    const action = editExpense("123abc", { note: "new note"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        "updates": {
            note: "new note"
        }
    });  
});


test("should setup add expense action object with provides values", () => {
    const expenseData = {
        description: "rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last months rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});


test("should setup add expense action object with defaults", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
