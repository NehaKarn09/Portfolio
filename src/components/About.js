import React from 'react'

const About = () => {
  return (
    <div>
    <div className="w-3/4 bg-gray-800 text-white p-20 ml-80 mt-20 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-6">
          I'm a Web Developer with a passion for crafting simple, elegant solutions for complex challenges in web development. I enjoy creating simple, beautiful, and intuitive designs.
        </p>
        <p className="mb-6">
          I build websites that are functional and user-friendly but at the same time attractive. Moreover, I add personal touch to the product and make sure that it is eye-catching and easy to use. My aim is to bring the message and identity in the most creative way.
        </p>
        <h2 className="text-2xl font-semibold mb-4">What I'm Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Web Design</h3>
            <p>The most modern and high-quality design made at a professional level.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p>High-quality development of sites at the professional level.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">API Creation</h3>
            <p>API creation for Database management.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
