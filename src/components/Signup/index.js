import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';


const Signup = () => {

    const firebase = React.useContext(FirebaseContext);
    console.log(firebase);
    const history = useHistory()


    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = React.useState(data);
    const [error, setError] = React.useState('')

    const { pseudo, email, password, confirmPassword } = loginData;

    const handleChange = e => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault()
        error !== '' && setError('');
        const { email, password } = loginData;
        firebase.signupUser(email, password)
            .then(user => {
                history.push('/login');

            })
            .catch(err => {
                setError(err);
                setLoginData({ ...data });
            })
    }

    const displayBtn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
        ? <button disabled>Inscription</button> : <button>Inscription</button>

    //gestion Erreur
    const errorMsg = error !== '' && <span>{error.message}</span>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <form onSubmit={handleSubmit}>
                            <h2>Inscription</h2>
                            <div className="inputBox">
                                <input value={pseudo} type="text" id="pseudo" required autoComplete="off" onChange={handleChange} />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            <div className="inputBox">
                                <input value={email} type="email" id="email" required autoComplete="off" onChange={handleChange} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input value={password} type="password" id="password" required autoComplete="off" onChange={handleChange} />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <div className="inputBox">
                                <input value={confirmPassword} type="password" id="confirmPassword" required autoComplete="off" onChange={handleChange} />
                                <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
                            </div>

                            {displayBtn}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit ? connectez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
