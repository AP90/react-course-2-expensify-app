import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibileExpsenses from "./selectors/expenses";
import "react-dates/lib/css/_datepicker.css";
import "normalize.css/normalize.css";
import './styles/styles.scss';


const store = configureStore();


store.dispatch(addExpense({description: "water bill", amount: 200}));
store.dispatch(addExpense({description: "gas bill", amount: 9400}));
store.dispatch(addExpense({description: "rent", amount: 5600, createdAt: 1000}));

const state = store.getState();
console.log(getVisibileExpsenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById("app"));