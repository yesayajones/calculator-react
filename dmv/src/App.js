import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StartLearning from './components/StartLearning';
import Login from './components/Login';
import Signup from './components/SignUp';
import SelectState from './components/SelectState';
import SelectVehicle from './components/SelectVehicle';
import Lesson from './components/Lesson';
import Tests from './components/Tests';
import Statistics from './components/Statistics';
import HandBook from './components/HandBook';
import ChangePassword from './components/ChangePassword';
import Question from './components/Question';
import LessonResults from './components/LessonResults';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/select-state" element={<SelectState />} />
        <Route path="/select-vehicle" element={<SelectVehicle />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/question" element={<Question />} />
        <Route path="/lesson-results" element={<LessonResults />} />

        <Route
          path="/"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                activeTab={activeTab}
                setIsLoggedIn={setIsLoggedIn}
                handleLogout={handleLogout}
              />
              <HomePage isLoggedIn={isLoggedIn} />
            </>
          }
        />
        <Route
          path="/tests"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                activeTab={activeTab}
                setIsLoggedIn={setIsLoggedIn}
                handleLogout={handleLogout}
              />
              <Tests />
              <Footer />
            </>
          }
          onEnter={() => setActiveTab('practice-tests')}
          onExit={() => setActiveTab('')}
        />
        <Route
          path="/statistics"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                activeTab={activeTab}
                setIsLoggedIn={setIsLoggedIn}
                handleLogout={handleLogout}
              />
              <Statistics />
              <Footer />
            </>
          }
          onEnter={() => setActiveTab('statistics')}
          onExit={() => setActiveTab('')}
        />
        <Route
          path="/hand-book"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                activeTab={activeTab}
                setIsLoggedIn={setIsLoggedIn}
                handleLogout={handleLogout}
              />
              <HandBook />
              <Footer />
            </>
          }
          onEnter={() => setActiveTab('handbook')}
          onExit={() => setActiveTab('')}
        />
        <Route
          path="/login"
          element={
            <>
              <Login onLogin={handleLogin} />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup onLogin={handleLogin} />
              <Footer />
            </>
          }
        />
        <Route
          path="/start-learning"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                activeTab={activeTab}
                setIsLoggedIn={setIsLoggedIn}
                handleLogout={handleLogout}
              />
              <StartLearning />
              <Footer />
            </>
          }
          onEnter={() => setActiveTab('dmv-prep-course')}
          onExit={() => setActiveTab('')}
        />
        <Route
          path="/change-password"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                activeTab={activeTab}
                setIsLoggedIn={setIsLoggedIn}
                handleLogout={handleLogout}
              />
              <ChangePassword />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const HomePage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <>
        <StartLearning />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
