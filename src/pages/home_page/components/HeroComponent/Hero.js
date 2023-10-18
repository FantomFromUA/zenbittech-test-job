import React from 'react';
import {Background, Content, ContentWrapper, GetStarted, PreTitle, Section, Title} from "./Hero.styled";

import hero from "./utils/HomeBG.jpg";

const Hero = () => {
    return(
        <Section>

            <Background>
                <img src={hero} alt="hero image"/>
            </Background>

            <Content>
                <ContentWrapper>
                    <Title>The chemical negatively charged</Title>
                    <PreTitle>
                        Numerous calculations predict, and experiments confirm, that the force field
                        reflects the beam, while the mass defect is not formed/ The chemical compound is negatively charged.
                        While the mass defect is
                    </PreTitle>
                    <GetStarted>Get Started</GetStarted>
                </ContentWrapper>
            </Content>

        </Section>
    )

}
 
export default Hero;