import { useState } from 'react'
import './Register.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import api from '../helpers/axios.config'

const Register = () => {

    const [data, setData] = useState({ firstname: '', lastname: '', email: "", password: '', confpassword: '' ,phone : ''  })
    const rout = useNavigate();
    console.log(data, "data")

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (data.firstname, data.lastname, data.email, data.password, data.confpassword) {
            if (data.password.length >= 8 && data.confpassword.length >= 8) {
                if (data.password === data.confpassword) {
                    try {
                        const response = await api.post("/auth/register", { data })

                        if (response.data.success) {
                            toast.success(response.data.message)
                            setData({ firstname: '', lastname: '', email: "", password: '', confpassword: '' , phone : '' })
                            rout("/")
                        } else {
                            throw new Error("Something went wrong");
                        }
                    }
                    catch (error) {
                        toast.error(error?.response.data.message);
                        console.log(error, 'error hai')
                    }
                } else {
                    toast.error("Password and confirm password not match");
                }
            } else {
                toast.error("Password must be 8 digit")
            }
        } else {
            toast.error("All fields are mandatory!")
        }
    }

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

            <form onSubmit={handleSubmit}>
                <div className='apple-reg-body'>
                    <div className='apple-reg-innerbody'>
                        <h1 className='apple-reg-top-h1'>Create Your Apple ID</h1>
                        <span className='apple-reg-top-span'>One Apple ID is all you need to access all Apple services.</span>
                        <div className='apple-reg-name'>
                            <input placeholder='first name' name='firstname' onChange={handleChange} value={data.firstname}/>
                            <input placeholder='last name' name='lastname' onChange={handleChange} value={data.lastname}/>
                        </div>

                        <p className='apple-reg-country-p'>COUNTRY / REGION</p>
                        <select className='apple-select' >
                            <option value="volvo">India</option>
                            <option value="saab">America</option>
                            <option value="mercedes">United Kingdom</option>
                            <option value="audi">China</option>
                        </select>

                        <input type='date' className='apple-reg-date' />
                    </div>
                    <h1 className='apple-reg-line'></h1>
                    <div className='apple-reg-innerbody2'>
                        <input className='apple-reg-body2-name' type='text' placeholder='name@apple.com' name='email' onChange={handleChange} value={data.email}/>
                        <p className='apple-reg-body2-label'>This will be your new Apple ID.</p>
                        <input className='apple-reg-body2-pass' type='text' placeholder='password' name='password' onChange={handleChange} value={data.password} />
                        <input className='apple-reg-body2-pass' type='text' placeholder='confirm password' name='confpassword' onChange={handleChange} value={data.confpassword}/>
                    </div>

                    <h1 className='apple-reg-line'></h1>

                    <div className='apple-reg-innerbody3'>
                        <select className='apple-reg-body3-select'>
                            <option>+91 (India)</option>
                            <option>+49 (Germany)</option>
                            <option>+233 (Ghana)</option>
                            <option>+354 (Iceland)</option>
                        </select>

                        <input className='apple-reg-body3-phone' type='text' placeholder='phone number' name='phone' onChange={handleChange} value={data.phone} />

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
                        <input className='apple-reg-last-button' value='Continue' type='submit' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;