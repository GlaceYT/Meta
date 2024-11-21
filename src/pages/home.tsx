import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import AdvancedSection from '../components/styledcomp';
import Footer from "../components/footer";
import FAQAccordion from '../components/FAQAccordion';
import './home.css';
import { FaArrowUp } from 'react-icons/fa'; 
import styled from 'styled-components';
import VortexDemoSecond from "../components/landing";
import Features from "../components/features";
import StatsSec from "../components/stats";
import MagicalTestimonialFeed from "../components/rating";
import AnimatedBeamMultipleOutputDemo from "../components/beams"
const ProgressBar = styled.div<{ width: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ width }) => width}%;
  height: 4px;
  background: linear-gradient(to right, #da03ca, #8f79e6);  /* Add gradient */
  z-index: 9999;
`;

// Scroll-to-top button styles with glossy effect
const ScrollToTopButton = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background: linear-gradient(145deg, #da03ca, #8f79e6); /* Gradient background */
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(255, 255, 255, 0.1); /* Soft shadow for glossy feel */
  z-index: 2000;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;

  /* Add glossy shine effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.5), transparent);
    opacity: 0.3;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 0.6; /* Increase shine on hover */
  }
`;


const HomePage: React.FC = () => {

  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);


  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    setScrollProgress(scrolled);

    if (scrollTop > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
         <div className="bg-black min-h-screen overflow-hidden">

      <Navbar />
      <ProgressBar width={scrollProgress} />
      <ScrollToTopButton show={showScrollToTop} onClick={scrollToTop}>
        <FaArrowUp />
      </ScrollToTopButton>
    <VortexDemoSecond/>
    <AdvancedSection />
    <Features/>
    <AnimatedBeamMultipleOutputDemo/>
      <StatsSec/>
      {/* <MagicalTestimonialFeed/> */}
      <FAQAccordion />
      
      <Footer />
    </div>
    );
};

export default HomePage;
