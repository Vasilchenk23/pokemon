import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <>
        <header>
            <img src="./img/logo.png" alt="" className="logo" />
            <p><Link to="/">Головна</Link></p>
            <p><Link to="/result">Результати</Link></p>
        </header>
        </>
    );
}



