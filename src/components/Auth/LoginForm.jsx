import React, { useState } from 'react';

import { EyeSlashFill, PersonFill,EyeFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible);
    };
    const iconColor = '#007BFF';
    const navigate = useNavigate();

    const handleLogin = () => {

        navigate('/dashboard');
    };

    return (
        <div className='container'>
            <section className="">
                <div className="contai py-3 h-10">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body-one py-5 px-md-5"></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card-body py-5 px-md-5">
                                            <div className="center ">
                                                <img src="images/logo.png" alt="Logo" className="logo-img" />
                                            </div>
                                            <div className='border-line'></div>
                                            <div className="card-content">
                                                <form>
                                                    <div className="form-group mb-4">
                                                        <div className="input-group">
                                                            <input type="email" className="form-control" id="form2Example1" placeholder='Enter your Email id' />
                                                            <span className="input-group-text" style={{ color: iconColor, border: 'solid 1px #0672A3' }}>
                                                                < PersonFill />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="form-group mb-4">
                                                        <div className="input-group">
                                                            <input
                                                                type={isPasswordVisible ? 'text' : 'password'}
                                                                className="form-control"
                                                                id="form2Example2"
                                                                placeholder="Enter your password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <span
                                                                className="input-group-text"
                                                                style={{ color: iconColor, border: 'solid 1px #0672A3', cursor: 'pointer' }}
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                {isPasswordVisible ? <EyeSlashFill /> : <EyeFill />}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-md-5 ">
                                                            <div className="">
                                                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                                                <label className="form-check-label link" htmlFor="form2Example31"> Remember me </label>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <a href="" className='link'>Forgot password?</a>
                                                        </div>
                                                    </div>


                                                    <button type="button" className="btn btn-light btn-block mb-4" onClick={handleLogin}><span className='clr'>Sign in</span></button>
                                                </form>
                                            </div>

                                            <div className="card-footer">
                                                <img src="images/Group.png" alt="Logo" className="logo-img1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default LoginForm;

