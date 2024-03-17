
import { useState } from 'react';


const UserRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState("");

    const handleRegister = async () => {
        try {
            const UserData = {
                email,
                name,
                password,
                phoneNumber: mobile,
            };

            // Call your MongoDB API here
            const response = await fetch('/auth/userregister', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UserData),
            });

            const data = await response.json();
            console.log('Object saved in MongoDB successfully:', data);
            // navigate('/login')
        } catch (error) {
            console.error('Error calling MongoDB API:', error);
        }
    }


    return (
        <div className='register'>
            <div className="top">
                <h1>Localलाभ</h1>
                <button>Sign In</button>
            </div>

            <h1>Sign Up</h1>
            <div className="card">
                (
                <input
                    className='inp'
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className='inp'
                    type="email"
                    id="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='inp'
                    type="password"
                    id="pass"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className='inp'
                    type="number"
                    id="number"
                    placeholder='Mobile Number'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <button onClick={handleRegister}>Sign Up</button>
                )

            </div>
        </div>
    );
};


export default UserRegister;