import styled from "styled-components";
import { CardSpotlight } from "../components/ui/card-spotlight";

const AdvancedSection = () => {
  return (
    <SectionContainer>
    <Title>
    The All-in-One Bot for Your Needs
    </Title>
    <Subtitle>
      Whether you're managing a server, organizing events, or looking for entertainment, META has the tools you need.
    </Subtitle>
    <FeaturesGrid>
     
      {/* First Card: Moderation */}
      <CardSpotlight className="h-96 w-full">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Moderation
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Keep your server safe and secure with these moderation tools:
          <ul className="list-none mt-2">
            <Step title="Anti-Raid, Anti-Nuke" />
            <Step title="Anti-Spam, Anti-Link" />
            <Step title="DDoS Protection" />
            <Step title="Comprehensive Commands" />
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          META offers advanced moderation features to protect your server from threats, keeping your community safe.
        </p>
      </CardSpotlight>
  
      {/* Second Card: Utility */}
      <CardSpotlight className="h-96 w-full">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Utility
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Make server management a breeze with these utility features:
          <ul className="list-none mt-2">
            <Step title="Ticket System" />
            <Step title="Auto Voice Channels" />
            <Step title="Giveaways" />
            <Step title="Reaction Roles" />
            <Step title="Auto-Role Assignment" />
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          META's utility tools streamline your server management, offering automation and engagement features.
        </p>
      </CardSpotlight>
  
      {/* Third Card: Music */}
      <CardSpotlight className="h-96 w-full">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Music
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Enjoy seamless music playback from top platforms:
          <ul className="list-none mt-2">
            <Step title="YouTube" />
            <Step title="Spotify" />
            <Step title="SoundCloud" />
            <Step title="Amazon Music" />
            <Step title="Apple Tunes" />
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Bring music to your server with META, supporting your favorite platforms for smooth, high-quality playback.
        </p>
      </CardSpotlight>
  
    </FeaturesGrid>
  </SectionContainer>
  
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-green-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

// Styled Components for the Advanced Section
const SectionContainer = styled.section`
  background-color: #000;
  color: white;
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;

  span {
    background: linear-gradient(to right, #809cff, #ff809c);
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export default AdvancedSection;
