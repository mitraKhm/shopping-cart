import React from 'react'
import Style from './style.module.css'

class NavBarItem extends React.Component {
    handleClick =() => {
        const {onClickItem} =this.props;
        onClickItem && onClickItem();
    }
    render(){
   
        return (
            <div onClick={this.handleClick} className={Style.navitem}>{this.props.children}</div>
        )
    }
}
export default NavBarItem;