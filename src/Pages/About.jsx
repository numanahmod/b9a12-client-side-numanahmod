// About.js

import './About.css';  // Import a CSS file for styling if needed

const About = () => {
  return (
    <div className="about-container pt-28 pb-8 ">
      <h1 className=' text-center text-orange-600 text-xl font-bold pt-28'>About BD T Guide</h1>
      <p>
        Welcome to BD T Guide, your ultimate companion for exploring and enjoying all that BD has to offer. Whether you’re a local resident or a visitor, our guide provides you with up-to-date information on the best places to eat, stay, and experience in BD.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to make your time in BD as enjoyable and fulfilling as possible. We aim to provide accurate and comprehensive information to help you discover the hidden gems and popular attractions in the area.
      </p>
      <h2>What We Offer</h2>
      <ul>
        <li>Detailed reviews of restaurants, hotels, and attractions</li>
        <li>Interactive maps and guides</li>
        <li>Exclusive deals and offers</li>
        <li>User-generated content and community recommendations</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! If you have any questions, suggestions, or feedback, please feel free to reach out to us at contact@bdtguide.com.
      </p>
    </div>
  );
};

export default About;
