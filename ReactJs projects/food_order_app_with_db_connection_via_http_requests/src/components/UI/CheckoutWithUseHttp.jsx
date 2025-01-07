import { useContext } from "react";
import Modal from "./Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { currencyFormatter } from "../../util/formatting";
import UserProgressContext from "../Store/UserProgressContext.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import useHttp from "../../hooks/useHttp.jsx";
import Error from "../Error.jsx";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function CheckoutWithUseHttp() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, isLoading:isSending, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const QST_Taxes = (cartTotal * 9.975) / 100;
  const GST_Taxes = (cartTotal * 5) / 100;
  const cartTotalWithTaxes = cartTotal + QST_Taxes + GST_Taxes;

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish(){
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // {email: test@example.com}

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
    <Button type="button" textOnly onClick={handleClose}>
        Close
    </Button>
    <Button>Submit Order</Button>
    </>
  )

  if (isSending){
    actions = <span>Sending order data...</span>
  }

  if (data && !error){
    return(
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleFinish}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully</p>
      <p>we will get back to you with details via email within the next few minutes</p>
      <p className="modals-actions">
        <Button onClick={handleFinish}>Okay</Button>
      </p>
    </Modal>
    )}

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2> Checkout </h2>
        <p>
          Total Amount : <strong>{currencyFormatter.format(cartTotal)}</strong>
        </p>
        <p>
          QST(9.975%) : <strong>{currencyFormatter.format(QST_Taxes)}</strong>
        </p>
        <p>
          GST(5%) : <strong>{currencyFormatter.format(GST_Taxes)}</strong>
        </p>
        <p>
          Total Amount include Taxes :{" "}
          <strong>{currencyFormatter.format(cartTotalWithTaxes)}</strong>
        </p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Adress" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="City" type="text" id="city" />
          <Input label="Postal Code" type="text" id="postal-code" />
        </div>
        {error && <Error title="Failed to submit order"  message={error}/>}
        <p className="modal-actions">
          {actions}
        </p>
      </form>
    </Modal>
  );
}
