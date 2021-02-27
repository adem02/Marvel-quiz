import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {

    const [btn, setBtn] = React.useState(false);

    const refWolverine = React.useRef(null);

    React.useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true);
        }, 300);
    }, [])

    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg");
    }

    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }

    const clearImg = () => {
        if (refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg");
        } else if (refWolverine.current.classList.contains("rightImg")) {
            refWolverine.current.classList.remove("rightImg");
        }
    }

    const displayBtn = btn && (
        <React.Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link className="btn-welcome" to="/signup">Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </React.Fragment>
    )

    return (
        <main ref={refWolverine} className="welcomePage">
            { displayBtn}
        </main>
    )
}

export default Landing
