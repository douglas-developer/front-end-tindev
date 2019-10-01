import React, {useState} from 'react';

import logo from '../assets/logo.svg'
import './Login.css'
import api from '../service/api'

function Login({history}) {
    const [username, setUsername] = useState('');

    async function handleSubmit (e){
          e.preventDefault();

          console.log(username);
            const response = await api.post('/devs',{
                username:username,
            })

            const {_id} = response.data;
          history.push(`/dev/${_id}`);
 
    }
    return (
        <div className="login-container">

             <form onSubmit= {handleSubmit}>
            <img src={logo} alt="Tindev" />
            <input placeholder="Digite seu usuário do Github"
             value={username}
             onChange={e =>setUsername(e.target.value)}
             ></input>
            <button type="submit">Enviar</button>

             </form>
            
        </div>


    );
}


export default Login;