import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  align-self: center;
  }
  @media (max-width: 48em){
  width: 90%;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="What Is A NFT?" >
  NFT stands for non-fungible token, which is a unique digital asset that is verified on a blockchain network. Unlike traditional cryptocurrencies, NFTs cannot be exchanged for an equal amount or value. Each NFT is one-of-a-kind, and its authenticity and ownership are permanently recorded on the blockchain. This makes NFTs ideal for buying and selling digital collectibles, such as artwork, music, and even virtual clothing!
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Where Can I Find The Pumped Rats NFT Collection?" >
  As each NFT gets minted they will appear on OpenSea and will be available for listing 

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Where Can I Purchase Pumped Apparel?" >
  Our Clothing Store Is Under Construction And Will Be Released In Q2!
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="What Is PMPD Streetwear?" >
At PMPD, we pride ourselves on our streetwear collection that features a wide range of unique designs blending modern and vintage styles. We firmly believe that fashion can spread positivity, and our streetwear reflects this philosophy. Our aim is to provide our customers with high-quality apparel that embodies our vision of a fashionable clothing brand with a positive message. We are dedicated to becoming a leading streetwear brand, known for our unique designs and high-quality apparel that inspires and uplifts our community.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What Is Pumped Athletics?
" >
The aim of our Pumped Athletic line is to inspire individuals to strive for their physical best while representing our brand as they conquer their goals of success. At Pumped Athletics we have our eyes set on becoming a top provider of comfortable and high-quality athletic wear. To stand out in the clothing industry, we are building a fitness brand centered around healthy living, creating a social economy for like-minded individuals, and hosting fitness challenges with apparel prizes! We plan to collaborate with athlete content creators to boost credibility and visibility and establish ourselves as a trustworthy brand. This approach, combined with our focus on comfort, quality, and healthy living, positions us for success in a competitive market.
  </Accordion>
  {/* <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE FUSION PROCESS?
" >
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.
  </Accordion> */}
</Box>
    </Container>
    </Section>
  )
}

export default Faq