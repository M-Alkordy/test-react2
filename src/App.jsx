
import './App.css'
import NavBar from './components/NavBar/NavBar'
import bg from './assets/img/hero-bg.jpg'
import Hero from './components/Hero/Hero'
import PopularDestinations from './components/PopularDestinations/PopularDestinations'
import firstPic from './assets/img/1.jpg'
import secPic from './assets/img/2.jpg'
import Container from './components/ContextWithProps/Container'
import State from './components/State/State'
import Effect from './components/Effect/Effect'
import Ref from './components/Ref/Ref'
/* import Parent from './components/Paranet/Parent'
 */import { createContext } from 'react'
import List from './components/List/List'
import Parent from './components/Memo/Parent'
import Api from './components/Api/Api'
import Get from './components/Api/axios/Get'
import Post from './components/Api/axios/Post'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import ContactPage from './Pages/ContactPage'

export const Name = createContext(null)
function App() {
  return (
    <>
{/*       <NavBar menu={[{ title: "Home", icon: "fa-solid fa-house-user" }, { title: "About", icon: "fa-solid fa-circle-info" }, { title: "Services", icon: "fa-solid fa-briefcase" }, { title: "Contact", icon: "fa-solid fa-address-book" }]} logo="Trippy" btn="Sign up" />
      <Hero image={bg} title="Your Journey Your Story" subTitle="Choose Your Favourite Destination." btn="Travel Now" />
      <PopularDestinations >
        <Container firstPic={firstPic} secPic={secPic} title="Mt. Daguldul, Batangas" desc="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!" />
        <Container firstPic={firstPic} secPic={secPic}
          title="Mt. Daguldul, Batangas"
          desc="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
          reverse={true} />
      </PopularDestinations> */}
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Ref /> */}
      {/* <Parent /> */}
      {/*       <Name.Provider value="rami">
        <Container />
      </Name.Provider> */}
      {/* <List /> */}
      {/* <Parent /> */}
      {/* <Api /> */}
      {/* <Get /> */}
      {/* <Post /> */}



      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />}  />
        <Route path='/services' element={<ServicesPage />}  />
        <Route path='/contact' element={<ContactPage />}  />
      </Routes>
    </>
  )
}

export default App
