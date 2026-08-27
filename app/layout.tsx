import React from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import './globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default Layout;