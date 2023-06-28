import '../style.scss';
import h from './header.module.scss';
import Logo from '../images/header-logo.svg';
import SearchIcon from '../images/header-search.svg';
import { Button } from './Button';

export const Header = () => {
    return (
        <div className={h.wrapper}>
          <img src={Logo} alt="logo" className="logo" />
          <div className={h.search}>
          <img src= {SearchIcon} alt="search" />
          <input type="search" className={h.search__input} placeholder='Search for ...'/>
          </div>
          <Button />
        </div>
    )
}