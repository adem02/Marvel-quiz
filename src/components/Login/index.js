import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Login = () => {

    const history = useHistory();
    const firebase = React.useContext(FirebaseContext);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [btn, setBtn] = React.useState(false);
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [email, password, btn, firebase])

    const handleSubmit = e => {
        e.preventDefault();

        firebase.loginUser(email, password)
            .then(user => {
                setEmail('');
                setPassword('');
                history.push('/welcome');
            })
            .catch(err => {
                setError(err);
                setEmail('');
                setPassword('');
            })
    }

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftLogin">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {error !== '' && <span>{error.message}</span>}
                        <form onSubmit={handleSubmit}>
                            <h2>Connexion</h2>
                            <div className="inputBox">
                                <input value={email} type="email" required autoComplete="off" onChange={e => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input value={password} type="password" required autoComplete="off" onChange={e => setPassword(e.target.value)} />
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Nouveau sur Marvel Quiz ? inscrivez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
