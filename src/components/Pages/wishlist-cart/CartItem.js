import React from "react";

const CartItem = () => {
    return (
        <div className="cartItem centered">
            <div className="cartItem-inner centered">
                <div className="cartItem-image"></div>
                <div className="cartItem-information">
                    <div className="cartItem-information__name space-between">
                        <div>Cyberpunk 2076</div>
                        <div>$29.99</div>
                    </div>
                    <div className="cartItem-information__buttons space-between">
                        <div></div>
                        <div>
                            <button>Move to wishlist</button>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
