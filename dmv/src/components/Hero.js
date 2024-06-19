import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => navigate('/start-learning');

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Ace your Permit Test with Zutobi</h1>
          <p className="hero-description">
            Getting your driver's license should be easy. Therefore, we have created an all-in-one app containing everything you need to ace the exam.
          </p>
          <div className="hero-button-container">
            <button className="hero-cta-button" onClick={handleStartLearning}>
              START LEARNING
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            className="hero-image"
            alt="Ace your Permit Test with Zutobi"
            loading="lazy"
            sizes="(max-width: 576px) calc(100vw - 121px), (max-width: 1024px) 80vw, (max-width: 1350px) 45vw, 652px"
            src="https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next"
            srcSet="
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=250 250w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=315 315w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=380 380w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=445 445w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=510 510w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=575 575w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=640 640w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=705 705w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=770 770w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=835 835w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=900 900w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=1030 1030w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=1100 1100w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=1280 1280w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=1536 1536w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=1728 1728w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=1920 1920w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=2240 2240w,
              https://media-blog.zutobi.com/assets/landing/ace-permit-test-updated-us.png?auto=format&fit=max&ixlib=next&w=2560 2560w
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
