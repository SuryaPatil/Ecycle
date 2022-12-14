import React, { Fragment, useState } from "react";

const Register = () => {

    return(
        <Fragment>
            <h1 className="text-center my -5">Register</h1>
            <form>
                <input type="email" name="email" placeholder="email" className="form-control my -3"/>
                <input type="password" name="password" placeholder="password" className="form-control my -3"/>
                <input type="text" name="name" placeholder="name" className="form-control my -3"/>
                <button className="btn-success btn-block form-control my -10">Submit</button>
            </form>
        </Fragment>
    );
};
export default Register; 