

import React from 'react';
import './Resume.css'; 

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>ETHAN HYDE</h1>
      <p>ehyde2@uoregon.edu | 561.303.9801 | <a href="https://www.linkedin.com/in/ethanbrodyhyde" target="_blank" rel="noopener noreferrer">linkedin.com/in/ethanbrodyhyde</a> | <a href="https://github.com/ethanhyde" target="_blank" rel="noopener noreferrer">github.com/ethanhyde</a></p>
      
      <section>
        <h2>EDUCATION</h2>
        <p><strong>University of Oregon</strong>, Eugene, OR</p>
        <p>B.S. Computer Science, Dec 2024</p>
        <p>Relevant Coursework: Operating Systems, C/C++ and UNIX, Parallel Computing and Game Programming</p>
      </section>

      <section>
        <h2>PROJECTS</h2>

        <div>
          <h3>AI Generated Voice Recognition Using Neural Networks</h3>
          <p> <em>Project lead and UI Design, Jan 2024 – Mar 2024</em></p>
          <ul>
            <li>Leveraged TensorFlow to train a neural network designed to distinguish AI generated voices from human voices</li>
            <li>Developed a user-friendly website using React.js and Flask, allowing users to upload and test their audio clips</li>
            <li>Engineered customized preprocessing functions to optimize audio clip preparation for integration with our network</li>
            <li>Achieved an accuracy rating exceeding 96%, ensuring robust and reliable vocal recognition capabilities</li>
          </ul>
        </div>

        <div>
          <h3>Optimization Algorithms in Neural Network Training</h3>
          <p><em>Project Lead, Sep 2023 – Dec 2023</em></p>
          <ul>
            <li>Led peer team in conceptualization, design, and analysis of a cutting-edge tri-layer neural network</li>
            <li>Conducted comprehensive research on performance dynamics of AdaGrad/Stochastic Gradient Descent algorithms in both serial and parallel implementations</li>
            <li>Utilized Talapas High-Performance Computer with CUDA and OpenMP frameworks for parallel processing</li>
            <li>Managed and processed extensive datasets to evaluate algorithm scalability and efficiency, ensuring optimal performance</li>
          </ul>
        </div>

        <div>
          <h3>Advanced 3D Game Development in Unity</h3>
          <p><em>Project Lead, Mar 2023 – Jun 2023</em></p>
          <ul>
            <li>Led small team for a three-month project, overseeing development of a complex third-person game</li>
            <li>Proficiently utilized Unity engine and C# programming language to drive project's success</li>
            <li>Employed advanced physics simulations and linear algebra algorithms to enhance realism and functionality</li>
            <li>Elevated visual appeal and immersion with detailed game assets and animations crafted in Blender</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>WORK EXPERIENCE</h2>

        <div>
          <h3>Mucho Gusto</h3>
          <p><em>Cashier, Eugene, OR, Aug 2023 – Present</em></p>
          <ul>
            <li>Managed ~250 daily POS transactions with efficiency and accuracy ensuring a seamless customer experience</li>
            <li>Collaborated with kitchen and serving staff to maintain order accuracy, reduce wait times, and elevate customer satisfaction, contributing to positive reviews and customer retention</li>
          </ul>
        </div>

        <div>
          <h3>Nuvrei</h3>
          <p><em>Barista, Portland, OR, Jul 2021 – Sept 2022</em></p>
          <ul>
            <li>Crafted ~125 custom coffee and tea beverages daily, while ensuring exceptional customer service</li>
            <li>Consistently upheld stringent quality standards to maintain the cafe's renowned reputation</li>
            <li>Thrived in high-paced environment by efficiently managing operations and maintaining an organized workspace</li>
          </ul>
        </div>

        <div>
          <h3>St. Jack Restaurant</h3>
          <p><em>Garde Manger, Portland, OR, May 2021 – Sep 2021</em></p>
          <ul>
            <li>Prepared 100+ complex dishes daily in renowned Portland restaurant, showcasing mastery and attention to detail</li>
            <li>Consistently ensured that all dishes met demanding standards, exceeding customer expectations and contributing to an exceptional dining experience</li>
            <li>Quickly adapted to changing priorities in a fast-paced, high-pressure environment, ensuring consistently timely and accurate food preparation</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>ADDITIONAL INFORMATION</h2>
        <p><strong>Technical Skills:</strong> C/C++, Python, React, SwiftUI, LaTeX, MATLAB, Git, HTML, Unity, and Blender</p>
        <p><strong>Interests:</strong> Cycling Club, Outdoor Club, Weightlifting Club, surfing, skiing, hiking, photography, and guitar</p>
      </section>
    </div>
  );
};

export default Resume;
