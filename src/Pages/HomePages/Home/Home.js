import React from 'react';
import Banner from '../Banner/Banner';
import ContactSection from '../ContactSection/ContactSection';
import Items from '../Items/Items';

const Home = () => {
        return (
                <div>
                        <Banner></Banner>
                        <Items></Items>
                        <ContactSection></ContactSection>
                </div>
        );
};

export default Home;