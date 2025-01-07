import logoImg from '../assets/logo.jpg';
import logoCartImg from '../assets/logoCart.png';
import Button from './UI/Button.jsx';
import {useContext} from 'react';
import CartContext from './Store/CartContext.jsx';
import UserProgressContext from './Store/UserProgressContext.jsx';

export default function Header(){
    const cartCtx= useContext(CartContext);
    const userProgressCtx= useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumbersOfItems, item)=>{
        return  totalNumbersOfItems + item.quantity;
    }, 0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='a restaurant'/>
            <h1>ReactFood </h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart} > Cart <stan className="cartImage" >&nbsp;&nbsp;&nbsp;{totalCartItems}&nbsp;&nbsp;&nbsp;</stan></Button>
        </nav>
    </header>
}
