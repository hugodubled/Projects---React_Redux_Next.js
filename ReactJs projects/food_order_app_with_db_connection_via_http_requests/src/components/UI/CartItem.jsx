import { currencyFormatter } from "../../util/formatting";

export default function CartItem({name, quantity, price, onIncrease, onDecrease}){
    return (
    <li className="cart-item">
    <p>
        <strong>{name}</strong> :  {quantity} x {currencyFormatter.format(price)}
    </p>
    <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
    </p>
    </li>)

}