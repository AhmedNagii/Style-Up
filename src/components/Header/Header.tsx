import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import LogoDecoration from '../../assets/logo-decoration.svg'
import Logo from '../../assets/CORAL.svg'
import IconButton from '../IconButton/IconButton';



export default function Header() {
  return (
    <div className={styles.header} >

      <FontAwesomeIcon icon={faSearch} size="sm" />


      <div className={styles.logo} >
        <img src={LogoDecoration} />
        <img src={Logo} />
        <img src={LogoDecoration} />
      </div>

      <div className={styles.btnsGroup}>

        <IconButton classNames={styles.accountBtn} icon={faUser} text={'Account'} onClick={() => { }} />
        <IconButton classNames={styles.accountBtn} icon={faShoppingBag} text={'Shopping'} onClick={() => { }} />
      </div>

    </div>
  )
}


