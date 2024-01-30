import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MyComponent = () => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LfH0VwpAAAAAKVespXZQzUJI5_B341HYXsl79H-';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRecaptcha = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LfH0VwpAAAAAKVespXZQzUJI5_B341HYXsl79H-', { action: 'submit' })
        .then(token => {
         
        });
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(null);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const fetchData = async () => {
    if (!email || !validateEmail(email)) {
      setEmailError('Ingrese un correo electrónico válido');
      return;
    }

    handleRecaptcha();

    try {
      setIsLoading(true);

      const response = await axios.get(`https://us-central1-fair-catcher-343814.cloudfunctions.net/function-2?email=${email}`);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex w-full max-w-sm mx-auto items-center space-x-2">
          <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <Button type="submit" onClick={fetchData} disabled={isLoading}>Consultar</Button>
        </div>

        {emailError && <p className="text-red-500 mt-4">{emailError}</p>}
        {isLoading && <p className="mt-4">Cargando...</p>}
        
        {data && data.passwords.length > 0 ? (
          <div>
            <div className="paragraph-container mt-5 mb-5 ">
              <p className=" mb-5">Contraseñas comprometidas:</p>
              <ul className=" mt-5">
                {data.passwords.map((password, index) => (
                  <li key={index}>{password}</li>
                ))}
              </ul>
              <p>{data.texto}</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="paragraph-container mt-5">
              <p>{data && data.texto}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyComponent;