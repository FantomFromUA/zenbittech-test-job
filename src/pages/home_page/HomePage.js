import React from 'react';
import Hero from './components/HeroComponent/Hero';
import Layout from "../../components/Layout";
import FlatsComponent from "./components/FlatsComponent/FlatsComponent";

const HomePage = () => {
    return (
        <>
            <Layout>
                <Hero/>
                <FlatsComponent/>
            </Layout>
        </>
    );
}
 
export default HomePage;