import './Register.css'

const Register = () => {
    return (
        <div id='apple-reg-screen'>
            <div className='apple-reg-top'>
                <div>
                    <h2>Apple ID</h2>
                    <div className='apple-reg-top-right'>
                        <a>Sign In</a>
                        <a>Create your Apple ID</a>
                        <a>FAQ</a>
                    </div>
                </div>
            </div>

            <div className='apple-reg-body'>
                <div className='apple-reg-innerbody'>
                    <h1 className='apple-reg-top-h1'>Create Your Apple ID</h1>
                    <span className='apple-reg-top-span'>One Apple ID is all you need to access all Apple services.</span>
                    <div className='apple-reg-name'>
                        <input placeholder='first name' />
                        <input placeholder='last name' />
                    </div>
                    <p className='apple-reg-country-p'>COUNTRY / REGION</p>
                    <select className='apple-select'>
                        <option value="volvo">India</option>
                        <option value="saab">America</option>
                        <option value="mercedes">United Kingdom</option>
                        <option value="audi">China</option>
                    </select>
                    <input type='date' className='apple-reg-date' />
                </div>
                <h1 className='apple-reg-line'></h1>
                <div className='apple-reg-innerbody2'>
                    <input className='apple-reg-body2-name' type='text' placeholder='name@example.com' />
                    <p className='apple-reg-body2-label'>This will be your new Apple ID.</p>
                    <input className='apple-reg-body2-pass' type='text' placeholder='password' />
                    <input className='apple-reg-body2-pass' type='text' placeholder='confirm password' />
                </div>
                <h1 className='apple-reg-line'></h1>
                <div className='apple-reg-innerbody3'>
                    <select className='apple-reg-body3-select'>
                        <option>+91 (India)</option>
                        <option>+49 (Germany)</option>
                        <option>+233 (Ghana)</option>
                        <option>+354 (Iceland)</option>
                    </select>
                    <input className='apple-reg-body3-phone' type='text' placeholder='phone number' />
                    <p className='apple-reg-body3-p'>
                        Make sure you enter a phone number you can always access. It will be used to verify
                        your identity any time you sign in on a new device or web browser.
                        Messaging or data rates may apply.
                    </p>
                    <div className='apple-reg-body3-radio'>
                        <label>Verify with a: </label>
                        <input type='radio' value='text-message' />Text message
                        <input type='radio' value='phone-call' />Phone call
                    </div>
                </div>
                <h1 className='apple-reg-line'></h1>
                <div className='apple-reg-innerbody4'>
                    <input className='apple-reg-innerbody4-check' type='checkbox' checked /><span className='announcement'>Announcements</span><br />
                    <p className='apple-reg-body4-p'>Receive Apple emails and communications including announcements,
                        marketing, recommendations and updates about Apple products, services and software.</p>
                    <input className='apple-reg-innerbody4-check' type='checkbox' checked /><span className='announcement'>Apps, Music, TV and More</span><br />
                    <p className='apple-reg-body4-p'>Receive Apple emails and communications including new releases,
                        exclusive content, special offers and marketing,
                        and recommendations for apps, music, movies, TV, books, podcasts and more.</p>
                </div>
                <h1 className='apple-reg-line'></h1>
                <div className='apple-reg-innerbody5'>
                    <div></div>
                    <div>
                        <input type='input' className='apple-reg-body5-input' placeholder='Type the charecters in the image' />
                        <div className='apple-reg-body5-newcode-div'>
                            <a>New code</a>
                            <a>Visually-impaired</a>
                        </div>
                    </div>
                </div>
                <h1 className='apple-reg-line'></h1>
                <div className='apple-reg-innerbody6'>
                    <div className='apple-reg-last-photo'></div>
                    <p className='apple-reg-last-p'>
                        Your Apple ID information is used to allow you to sign in securely and access your data.
                        Apple records certain data for security, support and reporting purposes.
                        If you agree, Apple may also use your Apple ID information to send you marketing emails and
                        communications, including based on your use of Apple services. <span>See how your data is managed.</span>
                    </p>
                    <button className='apple-reg-last-button'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Register;