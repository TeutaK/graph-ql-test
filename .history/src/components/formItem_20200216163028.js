import React, {useEffect, useState, Fragment} from 'react';

const FormItem = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const _handleChange = (evt) => {
     const value = evt.target.value;
     setState({
         ...state,
         [evt.target.name]: value
     })
    };

    return (
        <Fragment>
            <form>
                <div className="input-group">
                    <label htmlFor="">First Name</label>
                    <input type="text"
                           name="firstName"
                           value={state.firstName}
                           onChange={_handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" value={state.lastName} onChange={_handleChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" value={state.email} onChange={_handleChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={state.password} onChange={_handleChange}/>
                </div>
            </form>
        </Fragment>
    );
};

export default FormItem;