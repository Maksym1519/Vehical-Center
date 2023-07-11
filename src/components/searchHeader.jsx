import '../style.scss';
import Sh from './searchHeader.module.scss';
import Logo from '../images/header-logo.svg';
import SearchIcon from '../images/header-search.svg';
import { Button } from './Button';
import InputClose from '../images/close-input.svg'
import { MyProfile } from '../pages/MyProfilePage';
import { SearchPage } from '../pages/SearchPage';
import { Link, Route, Router, Routes } from "react-router-dom";

export const SearchHeader = () => {
      return (
        <div className={Sh.wrapper}>
          <Link to={"/"}><img src={Logo} alt="logo" className="logo" /></Link>
          <div className={Sh.search}>
          <img src= {SearchIcon} alt="search" />
          <input type="search" className={Sh.search__input} />
          <span className={Sh.inputClear}>Clear</span>
         </div>
          <Button buttonText="Connect wallet"/>
          
         </div>
    )
}