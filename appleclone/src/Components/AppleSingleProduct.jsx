import './AppleSingleProduct.css';

const AppleSingleProduct = () => {
    return (
        <div id='sp-screen'>
            <div className='sp-body'>
                <div className='sp-body-upper'>
                    <div className='sp-body-left'>
                        <button className='sp-product-name'>iPhone 15 Pro</button>
                        <div className='sp-product-image'>
                            <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387' />
                        </div>
                        <div className='sp-color'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p className='sp-colors-p'>Available in 4 finishes</p>
                        <div className='sp-color-2'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className='sp-body-right'>
                        <div className='sp-right-div1'>
                            <span className='sp-right-new'>NEW</span>
                            <h1>iPhone 15 Pro</h1>
                            <div className='sp-right-div1-div'>
                                <div>
                                    <span>From ₹21483.00/mo. with instant savings§§</span><br />
                                    <span>and No Cost EMI§ or ₹134900.00‡</span>
                                </div>
                                <button>Buy</button>
                            </div>
                        </div>
                        <div className='sp-right-div2'>
                            <div>
                                <div></div>
                                <div>15.5 cm (6.1-inch) Super Retina XDR display¹
                                    featuring ProMotion, Always-On and
                                    Dynamic Island</div>
                            </div>
                            <div>
                                <div></div>
                                <div>Strong and light titanium design with Action button-a
                                    fast track to your favourite feature</div>
                            </div>
                            <div>
                                <div></div>
                                <div>48MP Main camera for super-high-resolution photos and 3x
                                    Telephoto camera</div>
                            </div>
                            <div>
                                <div></div>
                                <div>A17 Pro chip delivers a massive leap in graphics performance,
                                    transforming mobile gaming</div>
                            </div>
                            <div>
                                <div></div>
                                <div>USB-C connector with USB 3 for up to 20x faster
                                    transfer speeds² and new pro workflows</div>
                            </div>
                            <p className='sp-right-last-a'>Explore iPhone 15 Pro further</p>
                        </div>
                    </div>
                </div>
                <div className='sp-foot'>
                    <div>
                    <i class="fa-solid fa-wallet"></i>
                    <span>Flexible ways to pay</span>
                    <p>No Cost EMI§ and EMI◊◊ available.</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-money-bill-trend-up"></i>
                    <span>Apple Trade In</span>
                    <p>Trade in your eligible device for credit <br/>towards your next purchase.*</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-truck"></i>
                    <span>Free delivery and pickup.</span>
                    <p>Get free delivery or pick up at your Apple <br/>Store.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppleSingleProduct;