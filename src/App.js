import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bram Mertens</h1>
        <p>Student Computer Science Engineering</p>
      </header>

      <section>
        <h2>Contact Information</h2>
        <p>Email: brammertens@skynet.be</p>
        <p>Phone: +32 476 62 26 98</p>
        <p>Location: Ninove, Belgium</p>
        <p>
          <a 
            href="https://www.linkedin.com/in/bram-mertens-8961532a6/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>Master of Science in Computer Science Engineering</strong> (2023-2025), UGent</li>
          <li><strong>Master of Science in Information Engineering Technology</strong> (2022-2023), UGent</li>
          <li><strong>Bachelor of Science in Information Engineering Technology</strong> (2019-2022), UGent</li>
          <li><strong>Science and Mathematics</strong> (2013-2019), Sint-Aloysiuscollege Ninove</li>
        </ul>
      </section>

      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Software Engineer Internship</strong> - We Are
            <ul>
              <li>September 2024 - 1 Month</li>
              <li>Developed projects using React, GraphQL, and Prisma</li>
              <li>Focused on bug resolution and endpoint testing</li>
            </ul>
          </li>
          <li>
            <strong>Bartender</strong> - Gentse Feesten
            <ul>
              <li>3x 10 Days</li>
            </ul>
          </li>
          <li>
            <strong>Commercial Assistant</strong> - B-Post
            <ul>
              <li>1 Month</li>
            </ul>
          </li>
          <li>
            <strong>Cashier</strong> - Action
            <ul>
              <li>1 Month</li>
            </ul>
          </li>
          <li>
            <strong>Assembly Line Work</strong> - Artista Choc
            <ul>
              <li>2 Weeks</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>SportKompas Vision - UGent Design Project (2023-2024)</strong>
            <p>Created a computer vision model using TensorFlow and Google MediaPipe to score sports exercises automatically. Utilized Roboflow to label a dataset and trained an object detection model using YOLOv9. Acted as the product owner, liaising with clients and representing their interests to the team.</p>
          </li>
          <li>
            <strong>VR-Application - Master's Thesis (2022-2023)</strong>
            <p>Developed a virtual reality application using Unity to study the influence of streaming distortions and haptic feedback on reaction speed and subjective perception in VR. Wrote a scientific document summarizing the research findings.</p>
          </li>
          <li>
            <strong>Dégage & Crobit BV - Bachelor's Thesis (2022)</strong>
            <p>Developed tokens and smart contracts for a car-sharing project. Created our own token using the Polygon ecosystem, implemented using Solidity on a local Ganache blockchain, and tested with the Truffle framework using Chai and Mocha.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p><strong>Languages:</strong> Java, Python, C, C++, C#, SQL, JavaScript, TypeScript, HTML, CSS, Assembly, Solidity</p>
        <p><strong>Frameworks:</strong> React, Node.js, Angular, .NET, Prisma, Apache Spark, Apache Kafka</p>
        <p><strong>Developer Tools:</strong> Docker, Google Cloud Platform, Git, PostgreSQL</p>
        <p><strong>Libraries:</strong> pandas, NumPy, Matplotlib, TensorFlow, MediaPipe</p>
        <p><strong>Technical proficiencies:</strong>  Software development, Software design, Machine learning, Object-Oriented Programming, Algorithms, Computer vision,  Blockchain technology</p>
      </section>

      <section>
        <h2>Languages</h2>
        <p>Dutch (Native), English (Professional), French (Elementary)</p>
      </section>

      <section>
        <h2>Hobbies</h2>
        <p>Football, minifootball, padel, running, gym</p>
      </section>
    </div>
  );
}

export default App;
