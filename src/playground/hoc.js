// higher order component
// reuse code
// render hijacking
// prop manipulation
// abstract state


import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// regular fn not react component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};


// requireAuthentication 
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You need to be logged in</p>}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="these are the details" />, document.getElementById("app"));