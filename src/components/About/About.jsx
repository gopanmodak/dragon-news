import React from "react";
import {
  FaNewspaper,
  FaUsers,
  FaBullhorn,
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaBriefcase,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Editor-in-Chief",
      bio: "10+ years in digital journalism. Passionate about tech and community stories.",
      img: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
    },
    {
      name: "Sam Rivera",
      role: "Lead Developer",
      bio: "Full-stack developer who bridges the gap between clean code and compelling content.",
      img: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
    },
    {
      name: "Jordan Lee",
      role: "Community Manager",
      bio: "Ensures our news reflects the voices and interests of our diverse readership.",
      img: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
       <Link to="/" className="btn btn-primary btn-lg gap-2 mr-4">
                   <FaBriefcase className="mr-2" /> Home 
                   </Link>
      {/* Hero/Header Section */}
      <div className="hero bg-base-100 rounded-2xl shadow-xl mb-10">
        <div className="hero-content text-center p-10">
            
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
              <FaNewspaper className="text-primary" /> About Dragon News
            </h1>
            <p className="py-6 text-xl">
              Your trusted source for fast, accurate, and engaging news in the
              digital age.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Mission & Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <FaNewspaper className="text-4xl text-primary mb-4" />
              <h2 className="card-title">Our Mission</h2>
              <p>
                To cut through the noise and deliver news that is not only
                timely but truly matters to our community and the tech world.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <FaUsers className="text-4xl text-secondary mb-4" />
              <h2 className="card-title">Our Readers</h2>
              <p>
                We serve curious minds, tech enthusiasts, developers, and anyone
                who values depth and clarity in their daily news digest.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <FaBullhorn className="text-4xl text-accent mb-4" />
              <h2 className="card-title">Our Promise</h2>
              <p>
                Independence, accuracy, and transparency guide every article,
                analysis, and update we publish.
              </p>
            </div>
          </div>
        </div>

        {/* The Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="card-body">
                  <div className="avatar placeholder mx-auto mb-4">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                      <img src={member.img} alt="" />
                      <span className="text-2xl">
                        {member.name}
                          
                      </span>
                    </div>
                  </div>
                  <h3 className="card-title text-center justify-center">
                    {member.name}
                  </h3>
                  <div className="badge badge-primary badge-outline mx-auto">
                    {member.role}
                  </div>
                  <p className="text-center mt-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Footer Section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl justify-center">
              <FaEnvelope className="mr-2" /> Get In Touch
            </h2>
            <p className="text-center mb-6">
              We welcome your feedback, story tips, and questions.
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p>
                  📧{" "}
                  <a
                    href="mailto:hello@dragonnews.blog"
                    className="link link-primary"
                  >
                    hello@dragonnews.blog
                  </a>
                </p>
                <p className="mt-2">
                  Want to contribute? We're always open to pitches from skilled
                  writers and developers.
                </p>
              </div>

              <div className="divider md:divider-horizontal">OR</div>

              <div className="flex-1">
                <h3 className="font-semibold mb-4 text-center">
                  Follow Our Journey
                </h3>
                <div className="flex gap-6 justify-center text-2xl">
                  <a
                    href="#"
                    className="link hover:text-[#1DA1F2]"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="link hover:text-[#333]"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
                <p className="text-sm mt-4 text-center">
                  Check our GitHub for the project's open-source components.
                </p>
              </div>
            </div>

            {/* Disclaimer - Important! */}
            <div className="alert alert-info mt-8">
              <div>
                <span className="font-semibold">Disclaimer:</span> This "Dragon
                News Blog" is an independent project built with React & Tailwind
                CSS. It is not affiliated with any existing publication of a
                similar name.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
