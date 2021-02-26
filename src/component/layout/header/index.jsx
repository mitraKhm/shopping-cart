import React from 'react'
import NavBar from '../../common/nav-bar'
import Styles from './styles.module.css'

class Header extends React.Component{
    render(){
    return <div className = {Styles.container}>
       {this.props.children}
        </div>
    }

}
export default Header 