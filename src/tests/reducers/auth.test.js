import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
    const state = authReducer(undefined, {type: "LOGIN", uid: "abc"});
    expect(state).toEqual({
        uid: "abc"
    });
});

test("should clear uid for logout", () => {
    const state = authReducer({uid: "abc"}, {type: "LOGOUT"});
    expect(state).toEqual({});
});