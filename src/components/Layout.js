import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Layout({children}) {
    return (
        <>
        <div className="flexThisBox" >
            <Navbar></Navbar>
            <main className="main">{children}</main>
            <Footer></Footer>
            {/* <footer> built with gatsby</footer> */}

        </div>
        </>
    )
}
