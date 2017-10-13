import { ExpensesSummary } from "../../components/ExpensesSummary";
import React from "react";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";

test("should show total of one expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should show total of two items", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235421110}/>);
    expect(wrapper).toMatchSnapshot();
});