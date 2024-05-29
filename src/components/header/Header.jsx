import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../img/logo/YOUR LOGO.svg";

const Header = () => {
    return (
        <header>
            <img src={logo} className="logo__img" alt="logo" />
            <nav className="header__menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/lookbook">lookbook</NavLink>
                <NavLink to="/features">features</NavLink>
                <NavLink to="/pages">pages</NavLink>
                <NavLink to="blog">blog</NavLink>
            </nav>
            <nav className="header__menu">
                <NavLink to="/search">search</NavLink>
                <NavLink to="/heart">heart</NavLink>
                <NavLink to="/shopping-cart">shopping-cart</NavLink>
            </nav>
        </header>
    );
};

export default Header;
