import React from 'react';
import Banner from '../Banner/Banner';
import Toys from '../Toys/Toys';
import PhotoAlbum from '../../../PhotoAlbum/PhotoAlbum';

const Home = () => {
    return (
        <div>
            <Banner/> 
            <PhotoAlbum/>
             <Toys></Toys>
        
        </div>
    );
};

export default Home;