import React, { useState } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaGraduationCap,
  FaRocket,
  FaMapMarkerAlt,
  FaClock,
  FaExternalLinkAlt,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import { MdWork, MdAttachMoney, MdCelebration } from "react-icons/md";
import { Link } from "react-router-dom";

const Career = () => {
  // State and data declarations should be HERE, not inside return()
  const [activeFilter, setActiveFilter] = useState("all");

  // Open positions data
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer (React)",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      postedDate: "2024-03-15",
      description:
        "Build and maintain our React-based news platform with Tailwind CSS and modern frontend tooling.",
      requirements: [
        "React/Next.js expertise",
        "Tailwind CSS experience",
        "REST API integration",
        "Responsive design",
      ],
      isRemote: true,
    },
    // ... rest of your job openings
  ];

  // Filter jobs based on active filter
  const filteredJobs =
    activeFilter === "all"
      ? jobOpenings
      : jobOpenings.filter((job) =>
          activeFilter === "remote"
            ? job.isRemote
            : job.department.toLowerCase() === activeFilter.toLowerCase(),
        );

  // Benefits data
  const benefits = [
    {
      icon: <FaRocket />,
      title: "Growth Opportunities",
      desc: "Clear career progression and learning paths",
    },
    {
      icon: <MdAttachMoney />,
      title: "Competitive Salary",
      desc: "Above-market compensation with equity options",
    },
    {
      icon: <FaHeart />,
      title: "Health & Wellness",
      desc: "Comprehensive medical, dental, and mental health coverage",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning Budget",
      desc: "$2,000 annual budget for courses and conferences",
    },
    {
      icon: <MdCelebration />,
      title: "Flexible Time Off",
      desc: "Unlimited PTO with mandatory minimums",
    },
    {
      icon: <FaUsers />,
      title: "Remote-First Culture",
      desc: "Work from anywhere with home office stipend",
    },
  ];

  // Application form state
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully! We'll be in touch soon.");
    setApplicationForm({
      name: "",
      email: "",
      position: "",
      coverLetter: "",
      resume: null,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-base-200 to-base-100 p-4 md:p-8">
      {/* Hero Section */}
      <div className="hero bg-base-100 rounded-2xl shadow-xl mb-12">
        <div className="hero-content text-center p-12">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaBriefcase className="text-5xl text-primary" />
              <MdWork className="text-5xl text-secondary" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Build the Future of News with Us
            </h1>
            <p className="text-xl mb-8">
              Join our mission to revolutionize how people consume and interact
              with news in the digital age.
            </p>

            
            <Link to="/" className="btn btn-primary btn-lg gap-2 mr-4">
            <FaBriefcase className="mr-2" /> Home 
            </Link>

            <a href="#open-positions" className="btn btn-outline btn-lg gap-2">
              View Open Positions <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      {/* 🔗 "Hone e Jawa" section (Bengali for "Hire Me") */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="card bg-linear-to-r from-primary to-secondary text-primary-content shadow-xl">
          <div className="card-body">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="card-title text-3xl mb-2">
                  Direct Hire Program
                </h2>
                <p>
                  Are you an exceptional candidate? Skip the queue and apply
                  directly through our fast-track hiring process.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
       
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Dragon News?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-3xl text-primary" />
                </div>
                <h3 className="card-title">Impact-Driven Work</h3>
                <p>
                  Your code and content will reach thousands of readers daily,
                  making real impact in how people stay informed.
                </p>
              </div>
            </div>
            {/* ... rest of the sections ... */}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="card-title text-lg">{benefit.title}</h3>
                      <p className="text-sm opacity-80">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-positions" className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <div className="join mt-4 md:mt-0">
              {[
                "all",
                "engineering",
                "content",
                "design",
                "marketing",
                "remote",
              ].map((filter) => (
                <button
                  key={filter}
                  className={`join-item btn ${activeFilter === filter ? "btn-primary" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="card-title text-2xl">{job.title}</h3>
                        {job.isRemote && (
                          <div className="badge badge-primary badge-outline">
                            Remote
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <MdWork className="opacity-70" />
                          <span className="font-medium">{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="opacity-70" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="opacity-70" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaGraduationCap className="opacity-70" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <p className="mb-4">{job.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, idx) => (
                            <div
                              key={idx}
                              className="badge badge-outline gap-1"
                            >
                              <FaCheckCircle className="text-xs" /> {req}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:ml-6 mt-4 md:mt-0">
                      {/* 🔗 Each job has "Hone e Jawa" link */}
                      
                      <button
                        className="btn btn-outline"
                        onClick={() =>
                          setApplicationForm((prev) => ({
                            ...prev,
                            position: job.title,
                          }))
                        }
                      >
                        Regular Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card bg-base-200 border-2 border-dashed border-primary mb-16">
          <div className="card-body items-center text-center">
            <h3 className="card-title text-2xl">
              Apply- Fast Track Application
            </h3>
            <p className="mb-4">
              Send your resume directly to our hiring manager
            </p>
            <a href="#" className="btn btn-primary btn-wide">
              <FaBriefcase className="mr-2" /> Direct Application
            </a>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="card bg-base-100 shadow-xl mb-16">
          <div className="card-body p-8">
            <h2 className="card-title text-3xl justify-center mb-8">
              Apply Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control space-x-2">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Write your full name"
                    required
                  />
                </div>
                <div className="form-control space-x-2">
                  <label className="label">
                    <span className="label-text  ">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Write your email address"
                    required
                  />
                </div>
              </div>

              <div className="form-control space-x-2">
                <label className="label">
                  <span className="label-text">Position Applying For</span>
                </label>
                <select
                  name="position"
                  value={applicationForm.position}
                  onChange={handleInputChange}
                  className="select select-bordered"
                  required
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control space-x-2">
                <label className="label">
                  <span className="label-text">Cover Letter</span>
                </label>
                <textarea
                  name="coverLetter"
                  value={applicationForm.coverLetter}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered h-40"
                  placeholder="Tell us why you're excited about this role..."
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume/CV</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setApplicationForm((prev) => ({
                      ...prev,
                      resume: e.target.files[0],
                    }))
                  }
                />
              </div>

              <div className="form-control mt-8">
                <button type="submit" className="btn btn-primary btn-lg mr-4">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Interview Process Section */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-3xl justify-center mb-8">
              Our Hiring Process
            </h2>
            <div className="steps steps-vertical lg:steps-horizontal">
              <div className="step step-primary">
                <div className="step-circle">1</div>
                <div className="step-content">
                  <h3 className="font-bold">Application Review</h3>
                  <p>We review your application within 48 hours</p>
                </div>
              </div>
              <div className="step step-primary">
                <div className="step-circle">2</div>
                <div className="step-content">
                  <h3 className="font-bold">Initial Screening</h3>
                  <p>30-minute video call with our hiring team</p>
                </div>
              </div>
              <div className="step">
                <div className="step-circle">3</div>
                <div className="step-content">
                  <h3 className="font-bold">Technical Assessment</h3>
                  <p>Role-specific challenge or discussion</p>
                </div>
              </div>
              <div className="step">
                <div className="step-circle">4</div>
                <div className="step-content">
                  <h3 className="font-bold">Team Interview</h3>
                  <p>Meet potential teammates and managers</p>
                </div>
              </div>
              <div className="step">
                <div className="step-circle">5</div>
                <div className="step-content">
                  <h3 className="font-bold">Offer</h3>
                  <p>We make an offer within 5 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
