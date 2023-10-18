import './Iphone15pro.css';

const Iphone15pro = () => {
    return (
        <div id='apple15pro-screen'>
            <div className='Apple15-top'>
                <p>Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks.‡ <span>Shop iphone</span></p>
            </div>
            <div className='apple15-body1'>
                <div className='apple15-image1'>
                    <p>iPhone 15 Pro</p>
                </div>
                <button className='apple15-button1'>Buy</button>
                <p className='apple15-div1-P'>From ₹21483.00/mo.‡ or ₹134900.00*</p>
            </div>
            <div className='apple15-body2'>
                <div className='apple15-body2-heading'>
                    <h1>Get the highlights.</h1>
                    <div>
                        <a>Watch the film <i class="fa-regular fa-circle-play"></i></a>
                        <a>Watch the event <i class="fa-solid fa-chevron-right fa-xs"></i></a>
                    </div>
                </div>
                <div className='apple15-body2-image'>
                    <p style={{ marginBlockStart: '40px' }}>Enter A17 Pro.</p>
                    <p>Game-changing chip.</p>
                    <p>Groundbreaking performance.</p>
                </div>
            </div>
            <div className='apple15-body3'>
                <h1>Take a closer look.</h1>
                <div>   </div>
                <p>6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Blue Titanium</p>
            </div>
            <div className='apple15-body4'>
                <h1 className='apple15-body4-h1'>Explore the full story.</h1>
                <h1 className='apple15-body4-h12'>iPhone.</h1>
                <h1 className='apple15-body4-h12'>Forged in titanium.</h1>
                <div className='apple15-body4-3image'>
                    <div>
                        <img style={{ height: "117%" }}
                            src='https://www.apple.com/v/iphone-15-pro/b/images/overview/design/titanium_endframe__jkbvub6cqj6u_large_2x.jpg' />
                    </div>
                    <div>
                        <img src='https://www.apple.com/v/iphone-15-pro/b/images/overview/design/lightest__boybgwifuehe_large_2x.jpg' />
                    </div>
                    <div>
                        <img src='https://www.apple.com/v/iphone-15-pro/b/images/overview/design/durable__omxi3w443rue_large_2x.jpg' />
                    </div>
                </div>
                <div className='apple15-body4-p'>
                    <div>
                        <p>
                            iPhone 15 Pro is the first iPhone to feature an
                            aerospace‑grade titanium design, using the same alloy
                            that spacecraft use for missions to Mars.
                        </p>
                    </div>
                    <div>
                        <p>
                            Titanium has one of the best strength‑to‑weight
                            ratios of any metal, making these our lightest Pro models
                            ever. You’ll notice the difference the moment you
                            pick one up.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Iphone15pro;