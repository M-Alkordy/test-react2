import NavBar from "../components/NavBar/NavBar"

const ContactPage = () => {
    return (
        <div>
            <NavBar menu={[{ title: "Home", icon: "fa-solid fa-house-user", path: '/' }, { title: "About", icon: "fa-solid fa-circle-info", path: '/about' }, { title: "Services", icon: "fa-solid fa-briefcase", path: '/services' }, { title: "Contact", icon: "fa-solid fa-address-book", path: '/contact' }]} logo="Trippy" btn="Sign up" />

            ContactPage
        </div>
    )
}

export default ContactPage