import { useEffect, useState } from 'react'
import './Login.css'

const Login = ({onLogin, onCloseModal}) => {
   const [credentials, setCredentials] = useState(null);

   const handleCredentials = (e) => {
        e.preventDefault();
        setCredentials({
            email:e.target.email.value,
            passwod:e.target.password.value,
        });
        console.log(credentials);
   }

   useEffect(()=>{
        
   }, []);

  return (
    <section className='login_container'>
            <h2 className='login_title'>Login</h2>
            <form onSubmit={handleCredentials} className='login_form'>
                <div>
                    <label htmlFor="emailId">Email: </label>
                    <input className='input_login' type="text" name="email" id="emailId" />
                </div>

                <div>
                    <label htmlFor="passwordId">Password: </label>
                    <input className='input_login' type="password" name="password" id="passwordId" />
                </div>

                <div className='btn_cancel_create'>
                    <button type='submit'> Login </button>
                    <button onClick={onCloseModal}> Cancel </button>
                </div>
            </form>

            
    </section>
  )
}

export default Login
