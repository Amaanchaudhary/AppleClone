import './Login.css';

const Login = () => {
    return (
        <div id="apple-log-screen">
            <div className='apple-log-head'>
                <h2>Sign in for faster checkout.</h2>
            </div>
            <div className='apple-log-main'>
                <p className='apple-log-text' >Sign in to Apple Store</p>
                <input className='apple-log-button' placeholder='Email '/>
                <input className='apple-log-button' placeholder='Password'/>
                <div className='apple-log-remember'>
                    <input type='checkbox'/>
                    <span>Remember me</span>
                </div>
                <a className='apple-log-a'>Forgotten your password?  <i class="fa-solid fa-location-arrow fa-xs"></i></a>
                <p className='apple-log-p'>Do not have an Apple ID? <a href='./register'>Create yours now. <i class="fa-solid fa-location-arrow fa-xs"></i></a></p>
            </div>
            <h1 className='apple-log-line'></h1>
            <h1 className='apple-log-last'>Need some help? <a>Chat now</a> or call 000800 040 1966.</h1>
        </div>
    )
}

export default Login;