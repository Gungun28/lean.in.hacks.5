import './Register.scss'
import { useRef, useState, useEffect } from "react"
const Register = () => {

    const [name, setName] = useState("")
    const [business, setBusiness] = useState("")
    const [category, setCategory] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [link, setLink] = useState("")
    const [about, setAbout] = useState("")
    const [buttonClicked, setButtonClicked] = useState(false)
    const [nextClicked, setNextClicked] = useState(false)

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const businessRef = useRef()
    const linkRef = useRef()
    const aboutRef = useRef()


    const handleRegister = () => {

        const enteredName = nameRef.current.value.trim();
        const enteredEmail = emailRef.current.value.trim();
        const enteredPassword = passwordRef.current.value.trim();

        if (enteredName && enteredEmail && enteredPassword) {
            setName(enteredName);
            setEmail(enteredEmail);
            setPassword(enteredPassword);
            setButtonClicked(true);
        } else {

            console.log("All fields are required.");
        }
    }


    const handleNext = () => {

        const enteredName = businessRef.current.value.trim();
        const enteredLink = linkRef.current.value.trim();
        const enteredAbout = aboutRef.current.value.trim();

        if (enteredName) {
            setBusiness(enteredName);
            setAbout(enteredAbout);
            setLink(enteredLink);
            setNextClicked(true);
        } else {

            console.log("All fields are required.");
        }
    }

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <div className='register'>
            <div className="top">
                <h1>Jeevika</h1>
                <button>Sign In</button>
            </div>

            <h1>Sign Up</h1>
            <div className="card">
                {!buttonClicked ? (
                    <>
                        <input className='inp' type="text" placeholder='Name' ref={nameRef} />
                        <input className='inp' type="email" id="email" placeholder='Email' ref={emailRef} />
                        <input className='inp' type="password" id="pass" placeholder='Password' ref={passwordRef} />
                        <input className='inp' type="number" id="number" placeholder='Mobile Number' />
                        <button onClick={handleRegister}>Next</button>
                    </>
                ) :
                    !nextClicked ? (
                        <>
                            <input className='inp' type="text" placeholder='Business Name' defaultValue="" ref={businessRef} />
                            <input className='inp' type="url" name="profile" id="profile" placeholder='Business Link' defaultValue="" ref={linkRef} />
                            <select className='inp' id="categories">
                                <option value="Select Business Category" onChange={handleChange}>Select Business Category</option>
                                <option value="Jewellery" >Jewellery</option>
                                <option value="Phone Case">Phone Case</option>
                                <option value="Purse">Purse</option>
                            </select>
                            <input className='inp' type="text" value="" placeholder='About Business' defaultValue="" ref={aboutRef} />
                            <button onClick={handleNext}>Next</button>
                        </>
                    ) :
                        (

                            <>
                                <div className="first">
                                    <label htmlFor="logoUpload">Upload Business Logo:</label>
                                    <input className='in' id="logoUpload" type="file" accept="image/*" />
                                </div>
                                <div className="second">
                                    <label htmlFor="logoUpload">Upload Sample Pictures:</label>
                                    <input className='in' id="logoUpload" type="file" accept="image/*" multiple />
                                </div>

                            </>
                        )
                }
            </div>
        </div>
    )
}

export default Register