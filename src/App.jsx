import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomeFeed } from './_social/pages';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_social/RootLayout';
import Navbar from './components/layout/Navbar';
import MainLayout from './_search/MainLayout';
import Home from './_search/pages/Home';
import Footer from './components/layout/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex h-screen'>
      <Navbar />
      <Routes>

        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route path='/social' element={<HomeFeed />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
      <Footer />
    </main >
  )
}

export default App;
