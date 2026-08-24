import { createContext, useState } from 'react';
export const AuthContext = createContext();
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';
const initialData = {
  isLoggedIn: false,
  authUserInfo: null,
};
export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useLocalStorage('s11d2', initialData);

  const logIn = async (formData) => {
    try {
      const response = await axios.post(
        'https://nextgen-project.onrender.com/api/s11d2/login',
        formData
      );
      console.log('Form gönderildi:', response.data);
      setUserData({
        isLoggedIn: true,
        authUserInfo: response.data,
      });
    } catch (error) {
      console.error('Gönderim hatası:', error);
      setUserData({
        isLoggedIn: false,
        authUserInfo: null,
      });
    }
  };
  const logOut = () => {
    console.log('logout çalıştı');
    setUserData({
      isLoggedIn: false,
      authUserInfo: null,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: userData.isLoggedIn,
        authUserInfo: userData.authUserInfo,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
