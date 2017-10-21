import authReducer from "../../reducers/auth";

test("should return a login id", () => {
    const state = authReducer(undefined, {type: "LOGIN", uid: "abc"});
    expect(state).toEqual({
        uid: "abc"
    });
});

test("should return empty object on logout", () => {
    const state = authReducer(undefined, {type: "LOGOUT"});
    expect(state).toEqual({});
});