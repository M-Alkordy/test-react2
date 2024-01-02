import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import PopularDestinations from '../components/PopularDestinations/PopularDestinations'
import Container from '../components/ContextWithProps/Container'
import bg from './../assets/img/hero-bg.jpg'
import firstPic from './../assets/img/1.jpg'
import secPic from './../assets/img/2.jpg'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
    const navigate = useNavigate();
    function goTAbout() {
        navigate('/about')
    }
    return (
        <div>
            <NavBar menu={[{ title: "Home", icon: "fa-solid fa-house-user" , path: '/'}, { title: "About", icon: "fa-solid fa-circle-info" , path: '/about'}, { title: "Services", icon: "fa-solid fa-briefcase" , path: '/services' }, { title: "Contact", icon: "fa-solid fa-address-book" , path: '/contact' }]} logo="Trippy" btn="Sign up" />
            <Hero image={bg} title="Your Journey Your Story" subTitle="Choose Your Favourite Destination." btn="Travel Now" />
            <PopularDestinations >
                <Container firstPic={firstPic} secPic={secPic} title="Mt. Daguldul, Batangas" desc="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!" />
                <Container firstPic={firstPic} secPic={secPic}
                    title="Mt. Daguldul, Batangas"
                    desc="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
                    reverse={true} />
            </PopularDestinations>
            <button onClick={goTAbout}>click</button>
        </div>
    )
}

export default HomePage