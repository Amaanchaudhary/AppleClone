import './Cart.css';

const Cart = () => {
    return (
        <div id='cart-screen'>
            <div className='cart-header'>
                <p>
                    Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards. Footnote §§ Plus No Cost EMI from most leading banks.§
                </p>
                <a>Learn more</a>
            </div>
            <div className='cart-topdiv'>
                <h1>Your bag total is ₹134900.00 or ₹21483.00/mo.^</h1>
                <button>Check Out</button>
            </div>
            <div className='cart-body'>
                <div className='cart-left'>
                    <div className='cart-product-img'>
                        <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&fit=constrain&.v=1692893982071' />
                    </div>
                </div>
                <div className='cart-right'>
                    <div className='cart-product-detials'>
                        <div className='cart-product-details-left'>
                            <h1>iPhone 15 Pro 128GB Natural Titanium</h1>
                            <p>Pay 15% pa for 6 month:</p>
                        </div>
                        <div className='cart-product-details-right'>
                            <div className='cart-pdr-div1'>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                                <h2>₹134900.00</h2>
                            </div>
                            <div className='cart-pdr-div2'>
                                <p>Get up to ₹11457.00 savings with eligible card(s)^</p>
                                <span>₹21483.00/mo.^</span><br />
                                <button>Remove</button><br />
                                <button>Save for later</button>
                            </div>
                        </div>
                    </div>
                    <div className='cart-addapplecare'>
                        <div className='care-applecare-div1'>
                            <div>
                                <i class="fa-brands fa-apple"></i>
                                <h3>Add AppleCare+ for iPhone 15 Pro for ₹20900.00</h3>
                            </div>
                            <button>Add</button>
                        </div>
                        <ul className='cart-applecare-ul'>
                            <li>Unlimited repairs for accidental damage protection</li>
                            <li>Apple-certified repairs using genuine Apple parts</li>
                            <li>Priority access to Apple experts</li>
                        </ul>
                        <a className='cart-applecare-learnmore'>Learn more</a>
                    </div>
                    <div className='cart-delivery-details'>
                        <h3>Find out how soon you can get this item. <span>Enter pin code</span></h3>
                        <span>Ship in 2-3 weeks.</span>
                        <span>Pick up at an Apple Store near you</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;