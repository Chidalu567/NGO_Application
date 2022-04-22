import { Navbar } from './Navbar';
import {Footer } from './Footer'


export const Layout = ({ children }) => {
    return (
        <>
            {/* Navbar component */}
            <Navbar />
            <main>{children}</main>
            {/* Footer Component */}
            <Footer />
        </>
    )
}