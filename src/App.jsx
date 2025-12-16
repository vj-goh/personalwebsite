import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  Globe, 
  Wifi, 
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Download,
  Network,
  Container,
  Plus
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <img
          src="assets/VGoh_Logo.png"
          alt="V.J. Logo"
          className="h-10 w-auto"
        />
        
        <ul className="hidden md:flex space-x-8">
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-purple-600"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="px-4 py-4 space-y-4">
            {['About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div id="header" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 pt-20 relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
    
    <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
      <div className="space-y-2">
        <p className="text-lg md:text-xl text-gray-600 font-medium">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Mawutor Goh
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 font-light">
          but you can call me <span className="font-semibold text-purple-600">"V.J."</span>
        </p>
      </div>
      
      <div className="text-lg text-gray-600 space-y-1">
        <p className="font-medium">B.S. in Computing and Information Technology</p>
        <p>Rochester Institute of Technology</p>
        <p className="text-gray-500">The Bronx, NY</p>
      </div>

      <div className="flex gap-4 justify-center pt-6">
        <a 
          href="#contact"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get in Touch
        </a>
        <a 
          href="#projects"
          className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 hover:scale-105 transition-all duration-300"
        >
          View Projects
        </a>
      </div>

      <div className="pt-12 animate-bounce">
        <ChevronDown className="mx-auto text-gray-400" size={32} />
      </div>
    </div>
  </div>
);

const SkillBadge = ({ skill }) => (
  <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200">
    {skill}
  </span>
);

const TabContent = ({ content }) => (
  <div className="space-y-4">
    {content.map((item, index) => (
      <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-purple-600">{item.title}</h3>
        <p className="text-gray-600 mt-2 font-medium">{item.subtitle}</p>
        {item.details && <p className="mt-2 text-gray-700">{item.details}</p>}
        {item.skills && (
          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} />
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('occupations');
  const [expandedClass, setExpandedClass] = useState(null);
  
  const tabs = {
    occupations: [
      {
        title: 'Summer IT Intern, MSM Inc.',
        subtitle: 'June 2025',
        details: 'Responded to and resolved IT support requests through ticketing system. Performed server room cleanup including unracking decommissioned equipment and recabling. Researched RRM tools and developed processes for new software deployment. Handled deployment and setup of new WiFi APs, VLAN configuration and device isolation. Managed cellular router deployments, setup, and firmware upgrades.',
        skills: ['IT Support', 'Network Administration', 'VLAN Configuration', 'WiFi Deployment', 'Server Management']
      },
      {
        title: 'IT Information Systems & Processes Intern, Symetra',
        subtitle: 'May 2024 - August 2024',
        details: 'Utilized cloud-based services to manage network resources. Assisted with firewall migration from Cisco AnyConnect to Prisma Access Global Protect. Configured BGP and DHCP relay interfaces. Updated network topologies and detailed cutsheets based on configurations using LucidChart and Netbox.',
        skills: ['Cloud Services', 'Firewall Migration', 'BGP', 'DHCP', 'Network Documentation', 'LucidChart', 'Netbox']
      },
      {
        title: 'Product Specialist, Best Buy',
        subtitle: 'September 2025 - December 2025',
        details: 'Worked product operations including responding to online orders, performing carry-outs, and managing shipping/receiving. Prepared stock for delivery/shipment, offloaded trucks and restocked product. Assisted customers throughout the store and offered Best Buy memberships.',
        skills: ['Customer Service', 'Product Operations', 'Sales Operations', 'Inventory Management']
      },
      {
        title: 'Student Manager, RIT Dining',
        subtitle: 'November 2021 - May 2025',
        details: 'Work with student manager team to prepare and serve food to customers. Train multiple employees for different positions throughout the dining hall.',
        skills: ['Team Leadership', 'Training', 'Customer Service', 'Operations Management']
      },
    ],
    classes: [
      {
        title: 'Advanced Network Routing and Switching',
        subtitle: 'In-depth study of wired network infrastructures and protocols',
        skills: ['Switches', 'Routers', 'VLANs', 'OSI Model', 'TCP/IP', 'Wireshark']
      },
      {
        title: 'Wireless Networking',
        subtitle: 'Gained exposure to WLAN technologies and developed a site survey for proper WLAN coverage.',
        skills: ['WLANs', 'Access Points', 'IEEE 802.3 & 802.11', 'OFDM', 'DSSS', 'MIMO']
      },
      {
        title: 'Database and Data Modeling',
        subtitle: 'Learned how to interpret Entity-Relationship data models and apply normalization theory.',
        skills: ['SQL Queries', 'SQL Scripting', 'MySQL Workbench', 'E-R Diagrams', 'Relational Models']
      },
      {
        title: 'Web and Mobile I & II',
        subtitle: 'Developed skills in coding HTML5 and CSS3 with a focus on web design concepts.',
        skills: ['HTML5', 'CSS', 'Javascript', 'PHP', 'Responsive Design']
      },
      {
        title: 'Server Programming',
        subtitle: 'Built Web sites, applications, and systems that would retrieve and update data from servers.',
        skills: ['Docker', 'JSON', 'HTTP Methods', 'REST', 'Web Security', 'Data Sanitization']
      },
      {
        title: 'Client Programming',
        subtitle: 'Learned key features in creating effective interactive systems, clients, and interfaces.',
        skills: ['React', 'jQuery', '.NET', 'DOM', 'Web Storage', 'Animation', 'Event-handling']
      },
      {
        title: 'Task Automation Using Interpreting Languages',
        subtitle: 'Introduced to Linux OS, with scripting experience in Python and Linux Bash.',
        skills: ['Python', 'Linux', 'Unix', 'Bash Scripting', 'Automation']
      },
      {
        title: 'Systems Administration I',
        subtitle: 'Learned server operating systems, system operations, and other essential system administration skills.',
        skills: ['Virtual Machines', 'Python', 'Windows Server', 'DNS', 'DHCP', 'Apache', 'VMWare']
      },
    ],
    education: [
      {
        title: 'Rochester Institute of Technology',
        subtitle: 'B.S. in Computing and Information Technologies',
        details: 'Graduated December 2025'
      },
      {
        title: 'Regis High School',
        subtitle: 'High School Diploma',
        details: 'Graduated June 2021'
      },
    ]
  };

  return (
    <div id="about" className="w-full px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative group">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-purple-200 to-indigo-200 flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src="assets/VJ_Portrait.png"
                alt="VJ Portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
          <p className="text-gray-700 leading-relaxed text-lg">
            Hello, I'm <span className="font-semibold text-purple-600">V.J. Goh</span>, and thanks for taking the time to visit my website! My nickname stands for <span className="italic">"Victory in Jesus"</span>. Given to me by my mother, I interpret it as a calling to succeed in any place I find myself.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            I'm passionate about networking, creating and troubleshooting interactive platforms, and building efficient IT solutions. Having completed my Bachelor's of Science degree at RIT, I'm eager to apply my skills to assist those that require technical support.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/mawutor-goh-1ab5b0262/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-purple-50 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 text-purple-600" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/vj-goh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-purple-50 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5 text-purple-600" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'classes' ? (
            <div className="space-y-3">
              {tabs.classes.map((classItem, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <button
                    onClick={() => setExpandedClass(expandedClass === index ? null : index)}
                    className="w-full text-left px-6 py-4 bg-gradient-to-r from-gray-50 to-white hover:from-purple-50 hover:to-indigo-50 transition-all duration-300 flex items-center justify-between"
                  >
                    <h4 className="text-lg font-semibold text-gray-800">{classItem.title}</h4>
                    <ChevronDown 
                      className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                        expandedClass === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedClass === index && (
                    <div className="px-6 py-4 bg-gradient-to-br from-purple-50 to-indigo-50 animate-fade-in">
                      <p className="text-gray-700 mb-4">{classItem.subtitle}</p>
                      <div>
                        <p className="font-semibold text-gray-800 mb-3">Skills Acquired:</p>
                        <div className="flex flex-wrap gap-2">
                          {classItem.skills.map((skill, skillIndex) => (
                            <SkillBadge key={skillIndex} skill={skill} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <TabContent content={tabs[activeTab]} />
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ icon: Icon, title, description, link, linkText, tags }) => (
  <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    
    <div className="relative p-8">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-purple-600" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-purple-600 hover:text-indigo-600 font-semibold group/link"
      >
        {linkText}
        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  </div>
);

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="projects" className="w-full px-4 py-20 bg-gradient-to-b from-transparent to-purple-50/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A showcase of my work in networking, web development, and systems administration
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          icon={Globe}
          title="DriveKind Web Application"
          description="Senior capstone project - driver management application for volunteer ride organizations in Monroe County of Rochester. Handled backend development, database architecture with Supabase, API routes, and deployment via Vercel."
          link="https://github.com/TeamProto501/DriveKind-Frontend"
          linkText="View on GitHub"
          tags={['Svelte', 'TypeScript', 'Supabase', 'Vercel', 'Full Stack']}
        />
        <ProjectCard
          icon={Network}
          title="NOC Dashboard"
          description="Network Operations Center - comprehensive monitoring platform with Docker orchestration, OSPF/BGP protocols, network scanning, real-time dashboard visualization, and multi-network topology management."
          link="https://github.com/vj-goh/noc-dashboard"
          linkText="View on GitHub"
          tags={['Docker', 'Python', 'OSPF', 'BGP', 'RADIUS', 'Network Monitoring']}
        />
        <ProjectCard
          icon={Wifi}
          title="Wireless Site Survey"
          description="Comprehensive wireless network site survey and analysis report with professional recommendations for optimal WLAN coverage."
          link="./assets/GEBFl3_WirelessSurveyReport.pdf"
          linkText="Download Report"
          tags={['WLAN', 'Site Survey', 'Network Analysis']}
        />
      </div>

      {showMore && (
        <div className="grid md:grid-cols-2 gap-8 mt-8 animate-fade-in">
          <ProjectCard
            icon={Code}
            title="Packet Capture Analysis Tool"
            description="Python script that outputs filtered information from packets. Original text files contained ICMP Echo Request & Reply packets for network troubleshooting and analysis."
            link="https://github.com/cmr9082/PacketCapture"
            linkText="View on GitHub"
            tags={['Python', 'Networking', 'ICMP', 'Packet Analysis']}
          />
          <ProjectCard
            icon={Globe}
            title="Vacation Website"
            description="Multi-page website with forms and comment thread linked to MySQL database, themed around Bali, Indonesia. Demonstrates full-stack web development skills."
            link="./project1/bali_home.html"
            linkText="Visit Site"
            tags={['HTML', 'CSS', 'MySQL', 'PHP', 'Full Stack']}
          />
        </div>
      )}

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          {showMore ? (
            <>
              <span>Show Less</span>
              <ChevronDown className="w-5 h-5 rotate-180 transition-transform" />
            </>
          ) : (
            <>
              <span>More Projects</span>
              <Plus className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    emailjs.send(
      'service_i3hv00y', // replace with your EmailJS service ID
      'template_whqm98h', // replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      '2owtlKWV4k1vtOWN5' // replace with your EmailJS public key (user ID)
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    })
    .catch((err) => {
      setError('Failed to send message. Please try again later.');
    });
  };

  return (
    <div id="contact" className="w-full px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg">
          I'm always open to discussing new opportunities and projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href="mailto:vjgoh17@gmail.com" 
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Primary Email</p>
                  <p className="text-gray-800 font-semibold">vjgoh17@gmail.com</p>
                </div>
              </a>

              <a 
                href="mailto:mcg4527@rit.edu" 
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Academic Email</p>
                  <p className="text-gray-800 font-semibold">mcg4527@rit.edu</p>
                </div>
              </a>

              <a 
                href="tel:+13475360041" 
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <p className="text-gray-800 font-semibold">+1 (347) 536-0041</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Social Media</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mawutor-goh-1ab5b0262/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Linkedin className="w-7 h-7 text-purple-600" />
              </a>
              <a
                href="https://github.com/vj-goh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Github className="w-7 h-7 text-purple-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-gray-800">Message Sent!</p>
              <p className="text-gray-600 mt-2">Thank you for reaching out.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none"
                  required
                />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
      
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8 mt-20 w-full">
        <div className="w-full px-4 text-center">
          <p className="font-medium">© 2025 V.J. Goh | Made with ❤️ and React</p>
          <p className="text-purple-200 text-sm mt-2">Computing and Information Technology Student at RIT</p>
        </div>
      </footer>
    </div>
  );
};

export default App;