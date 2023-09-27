import { useState } from 'react'

import './Login.css'
import { login } from '../../services/login';

const Login = ({onLogin, onCloseModal, isLoginError}) => {
     const [formData, setFormData] = useState({email: "", password: ""});
     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
   
   const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormData = { ...formData, [name]: value }
        setFormData(newFormData);   
    }

   const handleCredentials = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) return;
        
        const user = await login(formData);
        console.log(user)
    }

  return (
    <section className='login_container'>
            <h2 className='login_title'>Login</h2>
            <form onSubmit={handleCredentials} className='login_form'>
                <div className='dv_login_input'>
                    <label htmlFor="emailId">Email: </label>
                    <input className='input_login' type="text" onChange={handleChange} value={formData.email} name="email" id="emailId" required/>
                </div>

                <div className='dv_login_input'>
                    <label htmlFor="passwordId">Password: </label>
                    <div>
                        <input className='input_login' type={isPasswordVisible ? 'text' : 'password'} onChange={handleChange} value={formData.password} name="password" id="passwordId" required /> 
                            <button className='btn_eye_container' type='button'>
                                <i className='bx bx-low-vision btn_eye' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}></i>
                            </button>
                    </div>
                    

                   
                </div>

                <div className='btns_cancel_login'>
                    <button type='submit'> Login </button>
                    <button onClick={onCloseModal}> Cancel </button>
                </div>
                {(isLoginError) && (
                                    <div className='p_credencial_error'>
                                        <p>Invalid credentials!</p>
                                    </div>
                )}
                
            </form>

            
    </section>
  )
}

export default Login
