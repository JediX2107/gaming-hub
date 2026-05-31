import Navbar from "../components/Navbar";
import { useApp } from "../context/AppContext";
import "./Cart.css";

function Cart(){
    const{cart, removeFromCart}=useApp();
    const subtotal=cart.reduce((sum,item)=>sum+item.price*item.quantity, 0);

    return(
        <div>
            <Navbar />
            <div className="pageHeader">
                <h1>🛒 Your Cart</h1>
                <p>{cart.length} item{cart.length !==1 ? "s" : ""}</p>
            </div>

        <div className="cartLayout">
            <div className="cartItem">
                {cart.length ===0 ? (
                    <div className="emptyState">
                        <div className="emptyIcon">🛒</div>
                        <h2>Your cart is empty</h2>
                        <p>Add games from any platform page.</p>
                    </div>
                ):(
                    cart.map(item=>(
                        <div key={item.id} className="cartRow">
                            <img src={item.image} alt={item.title}
                                onError={e=>e.target.src="https://via.placeholder.com/80x60/1c2541/fff?text=Game"}
                                />
                            <div className="cartRowInfo">
                                <div className="cartRowTitle">{item.title}</div>
                                <div className="cartRowPlatform">{item.platform}</div>
                                <div className="cartRowQuantity">Qty: {item.quantity}</div>
                            </div>
                            <div className="cartRowRight">
                                <div className="cartRowPrice">
                                    ${(item.price*item.quantity).toFixed(2)}
                                </div>
                                <button
                                    className="removeBtn"
                                    onClick={()=>removeFromCart(item.i)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

                        {cart.length>0 && (
                            <div className="cartSummary">
                                <h2>Order Summary</h2>
                                <div className="summaryRow">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="summaryRow">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="summaryTotal">
                                    <span>Total</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                            <button className="checkoutBtn">Proceed to Checkout
                            </button>
                            <p className="checkoutNote">
                                * This redirects you to the official store for payment.
                            </p>
                        </div>
                        )}
                    </div>
                </div>
            );
}
export default Cart;