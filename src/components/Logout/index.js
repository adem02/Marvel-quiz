import React from 'react'
import { FirebaseContext } from '../Firebase';

const Logout = () => {

    const firebase = React.useContext(FirebaseContext);
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        if (checked) {
            firebase.signOutUser();
        }
    }, [checked, firebase])

    const handleChange = event => {
        setChecked(event.target.checked)
    }

    return (
        <div className="logoutContainer">
            <label className="switch">
                <input
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Logout
