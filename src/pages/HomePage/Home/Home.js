import React from 'react';
import Footer from '../../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ContactUs from '../Contact Us/ContactUs';
import Parts from '../Parts/Parts';
import PartsNews from '../PartsNews/PartsNews';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <PartsNews/>
            <Review/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;