// import React from 'react';

// const Resume = () => {
//   return (
//     <div className="bg-gray-800 min-h-screen text-white p-20 ml-80 mt-20">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold">NEHA KARN</h1>
//         <p>
//           <a href="https://linkedin.com/in/neha-karn-309691262" className="text-blue-600">linkedin.com/in/neha-karn-309691262</a> | 
//           +91-7543040903 |
//           <a href="https://github.com/NehaKarn09" className="text-blue-600">https://github.com/NehaKarn09</a>
//         </p>
//       </div>

//       {/* Education Section */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Education</h2>
//         <div className="border-b pb-4 mb-4">
//           <h3 className="text-xl font-semibold">Information Technology Engineering | UIETH Swami Sarvanand Giri Regional Center, Panjab University</h3>
//           <p>2021 - 2025</p>
//           <p>Branch | CGPA: 8.26</p>
//         </div>
//         <div className="border-b pb-4 mb-4">
//           <h3 className="text-xl font-semibold">Dr. D Ram D.A.V Public School, Patna, Bihar, India</h3>
//           <p>2020 - 2021</p>
//           <p>CBSE (Class XII), Aggregate: 92.2%</p>
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold">Dr. D Ram D.A.V Public School, Patna, Bihar, India</h3>
//           <p>2018 - 2019</p>
//           <p>CBSE (Class X), Aggregate: 92.6%</p>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Skills</h2>
//         <p>C++ | C | Python | JavaScript | Full Stack | Node.js | React | MongoDB | MySQL | Express | Problem Solving | Data Structures | OOPs (Object Oriented Programming) | Operating System | Computer Network</p>
//       </div>

      
      
//     </div>
//   );
// };

// export default Resume;


import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
import { SiJavascript, SiReact, SiPython, SiMongodb, SiMysql, SiNodedotjs } from 'react-icons/si';
import { FaCuttlefish, FaCss3Alt, FaHtml5, FaJava } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="bg-gray-800 min-h-6vh text-white p-10 ml-80 mt-16 mb-20 rounded-xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">NEHA KARN</h1>
        <p className="flex justify-center items-center space-x-4">
          <a href="https://linkedin.com/in/neha-karn-309691262" className="text-blue-600 flex items-center space-x-2">
            <FaLinkedin />
            <span>linkedin.com/in/neha-karn-309691262</span>
          </a>
          <span>|</span>
          <span className="flex items-center space-x-2">
            <MdPhone />
            <span>+91-7543040903</span>
          </span>
          <span>|</span>
          <a href="https://github.com/NehaKarn09" className="text-blue-600 flex items-center space-x-2">
            <FaGithub />
            <span>https://github.com/NehaKarn09</span>
          </a>
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
          <IoMdSchool />
          <span>Education</span>
        </h2>
        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-semibold">Information Technology Engineering | UIETH Swami Sarvanand Giri Regional Center, Panjab University</h3>
          <p>2021 - 2025</p>
          <p>Branch | CGPA: 8.26</p>
        </div>
        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-semibold">Dr. D Ram D.A.V Public School, Patna, Bihar, India</h3>
          <p>2020 - 2021</p>
          <p>CBSE (Class XII), Aggregate: 92.2%</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Dr. D Ram D.A.V Public School, Patna, Bihar, India</h3>
          <p>2018 - 2019</p>
          <p>CBSE (Class X), Aggregate: 92.6%</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
           
            <span>C</span>
          </div>
          <div className="flex items-center space-x-2">
           
            <span>C++</span>
          </div>
          <div className="flex items-center space-x-2">
           
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-2">
           
            <span>Full Stack</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>BootStrap</span>
          </div>
          <div className="flex items-center space-x-2">
           
           
            <span>Node.js</span>
          </div>
          <div className="flex items-center space-x-2">
           
            <span>React</span>
          </div>
          <div className="flex items-center space-x-2">
            
            <span>MongoDB</span>
          </div>
          <div className="flex items-center space-x-2">
            
            <span>MySQL</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Express</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Problem Solving</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Data Structure</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>OOPs</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Operating System</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Computer Network</span>
          </div>
        </div>
      </div>
      </div>

      
  );
};

export default Resume;
