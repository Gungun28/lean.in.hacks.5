import './register.scss';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Use getStorage to get the storage instance
const firebaseConfig = {
  apiKey: "AIzaSyC8wX_0Vwq9y6A1entPv0TyVNMWwbOcy2A",
  authDomain: "leanin-c0a56.firebaseapp.com",
  projectId: "leanin-c0a56",
  storageBucket: "leanin-c0a56.appspot.com",
  messagingSenderId: "928766118907",
  appId: "1:928766118907:web:c9389dd6e9007c52d2195e",
  measurementId: "G-MNZV52LEPN"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageInstance = getStorage();

const Register = () => {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('');
  const [about, setAbout] = useState('');
  const [mobile, setMobile] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [logoFile, setLogoFile] = useState(null);
  const [sampleFiles, setSampleFiles] = useState([]);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setLogoFile(file);
  };

  const handleSampleUpload = (e) => {
    const files = e.target.files;
    setSampleFiles([...files]);
  };

  const handleImageUpload = async () => {
    try {
      // Upload logo
      const logoRef = ref(storageInstance, logos/${business}_${Date.now()});
      await uploadBytesResumable(logoRef, logoFile);

      // Get logo URL
      const logoURL = await getDownloadURL(logoRef);

      // Upload sample pictures
      const samplePromises = sampleFiles.map(async (file, index) => {
        const sampleRef = ref(storageInstance, samples/${business}_sample_${index}_${Date.now()});
        await uploadBytesResumable(sampleRef, file);
        // Get sample URL
        const sampleURL = await getDownloadURL(sampleRef);
        return sampleURL;
      });

      const sampleURLs = await Promise.all(samplePromises);

      console.log('Images uploaded to Firebase Storage successfully');
      console.log('Logo URL:', logoURL);
      console.log('Sample URLs:', sampleURLs);

      handleRegister({
        logoURL,
        sampleURLs,
      });
    } catch (error) {
      console.error('Error uploading images to Firebase Storage:', error);
    }
  }
  const handleButton=async()=>{
    if (name && email && password && mobile) {
      setButtonClicked(true);
    }
  }
  const handleRegister = async ({logoURL,sampleURLs}) => {
    if (name && email && password) {
      setButtonClicked(true);

      try {
        const businessData = {
          email,
          ownername: name,
          password,
          businessLogo:logoURL,
          productImages:sampleURLs,
          phoneNumber:mobile,
          businessname:business,
          BusinessProfile:link,
          aboutBusiness:about,
          category
        };

        // Call your MongoDB API here
        const response = await fetch('/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(businessData),
        });

        const data = await response.json();
        console.log('Object saved in MongoDB successfully:', data);
      } catch (error) {
        console.error('Error calling MongoDB API:', error);
      }
    } else {
      console.log('All fields are required.');
    }
  };

  const handleNext = () => {
    if (business && link && about && category) {
      setNextClicked(true);
    } else {
      console.log('Fill required details');
    }
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

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
            <button onClick={handleButton}>Next</button>
          </>
        ) : !nextClicked ? (
          <>
            <input
              className='inp'
              type="text"
              placeholder='Business Name'
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
            />
            <input
              className='inp'
              type="url"
              name="profile"
              id="profile"
              placeholder='Business Link'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <select
              className='inp'
              id="categories"
              onChange={handleChange}
              value={category}
            >
              <option value="Select Business Category">Select Business Category</option>
              <option value="jewellery">Jewellery</option>
              <option value="phonecase">Phone Case</option>
              <option value="purse">Purse</option>
            </select>
            <input
              className='inp'
              type="text"
              placeholder='About Business'
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <button onClick={handleNext}>Next</button>
          </>
        ) : (
          <>
            <div className="first">
              <label htmlFor="logoUpload">Upload Business Logo:</label>
              <input className='in' id="logoUpload" type="file" accept="image/*" onChange={handleLogoUpload} />
            </div>
            <div className="second">
              <label htmlFor="sampleUpload">Upload Sample Pictures:</label>
              <input className='in' id="sampleUpload" type="file" accept="image/*" multiple onChange={handleSampleUpload} />
            </div>
            <button onClick={handleImageUpload}>Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;