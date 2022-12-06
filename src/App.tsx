import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import FoodApp from './project2/FoodApp';

function App() {
  const [shouldShowMenu,setShouldShowMenu] = useState(false)

  const toggleMenu =  () => {
    setShouldShowMenu(!shouldShowMenu)
  }
  useEffect(()=>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && shouldShowMenu){
        setShouldShowMenu(false)
      }
    }

    window.addEventListener('resize',hideMenu)

    return () => {
      window.removeEventListener('resize',hideMenu)
    }
  })



  return (
    <>
      {/* <NavBar onTapMenu={toggleMenu}/>
      <Dropdown shouldShowMenu={shouldShowMenu} onTapMenu={toggleMenu} />
      <Hero />
      <Content />
      <Footer /> */}
      <FoodApp/>
    </>
  );
}

export default App;
