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
                    <input type='date' className='apple-reg-date'/>
                </div>
                <h1 className='apple-reg-line'></h1>
            </div>
        </div>
    )
}

export default Register;