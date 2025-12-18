
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
  Plus,
  BookOpen,
  Terminal,
  Server,
  Database,
  Shield,
  Star
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
          {['About', 'Projects', 'Labwork', 'Contact'].map((item) => (
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
            {['About', 'Projects', 'Labwork', 'Contact'].map((item) => (
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

      <div className="flex flex-wrap gap-4 justify-center pt-6">
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
        <a 
          href="#labwork"
          className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 hover:scale-105 transition-all duration-300"
        >
          View Labwork
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
        skills: ['Switches', 'Routers', 'VLANs', 'OSI Model', 'TCP/IP', 'Wireshark'],
        labworkLink: 'NSSA 441'
      },
      {
        title: 'Wireless Networking',
        subtitle: 'Gained exposure to WLAN technologies and developed a site survey for proper WLAN coverage.',
        skills: ['WLANs', 'Access Points', 'IEEE 802.3 & 802.11', 'OFDM', 'DSSS', 'MIMO'],
        labworkLink: 'Wireless Networking'
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
        title: 'Network Services',
        subtitle: 'Introduced to IPs, as well as DNS, DHCP, TCP/UDP, and more network service protocols.',
        skills: ['TCP/IP', 'UDP', 'SSH', 'VoIP', 'DNS'],
        labworkLink: 'NSSA 245'
      },
      {
        title: 'Task Automation Using Interpreting Languages',
        subtitle: 'Introduced to Linux OS, with scripting experience in Python and Linux Bash.',
        skills: ['Python', 'Linux', 'Unix', 'Bash Scripting', 'Automation'],
        labworkLink: 'NSSA 220'
      },
      {
        title: 'Systems Administration I',
        subtitle: 'Learned server operating systems, system operations, and other essential system administration skills.',
        skills: ['Virtual Machines', 'Python', 'Windows Server', 'DNS', 'DHCP', 'Apache', 'VMWare'],
        labworkLink: 'NSSA 221'
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
                      <div className="mb-4">
                        <p className="font-semibold text-gray-800 mb-3">Skills Acquired:</p>
                        <div className="flex flex-wrap gap-2">
                          {classItem.skills.map((skill, skillIndex) => (
                            <SkillBadge key={skillIndex} skill={skill} />
                          ))}
                        </div>
                      </div>
                      {classItem.labworkLink && (
                        <div className="pt-4 border-t border-purple-200">
                          <a
                            href="#labwork"
                            onClick={(e) => {
                              e.preventDefault();
                              // Scroll to labwork section
                              const labworkElement = document.getElementById('labwork');
                              if (labworkElement) {
                                labworkElement.scrollIntoView({ behavior: 'smooth' });
                              }
                              // Expand the corresponding course
                              setTimeout(() => {
                                const courseButton = document.getElementById(`course-${classItem.labworkLink}`);
                                if (courseButton) {
                                  courseButton.click();
                                }
                              }, 300);
                            }}
                            className="inline-flex items-center gap-2 text-purple-600 hover:text-indigo-600 font-semibold transition-colors duration-300"
                          >
                            View related labs →
                          </a>
                        </div>
                      )}
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
            icon={Globe}
            title="iSchool Information Portal"
            description="Professional web portal for RIT's iSchool built with React, consuming data from a REST API. Displays information about academic programs, degrees, minors, employment opportunities, and faculty through interactive UI components with dynamic data fetching and formatting."
            link="https://people.rit.edu/mcg4527/project2/dist/"
            linkText="Visit Site"
            tags={['React', 'JavaScript', 'REST API', 'UI Components', 'Full Stack']}
          />
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
            link="https://people.rit.edu/~mcg4527/ISTE240/project1/bali_home.html"
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

const LabCard = ({ icon: Icon, course, labNumber, title, skills, takeaways }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 flex items-start justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300"
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-semibold text-purple-600">{course}</span>
              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">{labNumber}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-purple-600 transition-transform duration-300 flex-shrink-0 mt-1 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-4 animate-fade-in">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-600" />
              Skills Gained
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              Key Takeaways
            </h4>
            <ul className="space-y-2">
              {takeaways.map((takeaway, idx) => (
                <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Labs = () => {
  const [selectedLab, setSelectedLab] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const labsData = {
    'NSSA 441': {
      title: 'Advanced Network Routing and Switching',
      icon: Network,
      labs: [
        {
          labNumber: 'Capstone Lab',
          title: 'Load Balancing',
          skills: ['Load balancing architecture design', 'Round Robin', 'Weighted Round Robin', 'Least Connection', 'IP Hash', 'Least Response Time', 'Randomized', 'CDN configuration', 'GSLB deployment', 'AWS ELB', 'Alibaba Cloud SLB', 'Google CLB'],
          takeaways: ['Load balancing improves reliability, scalability, and performance through traffic distribution', 'Different algorithms serve different use cases (e.g., IP Hash for session persistence, Least Connection for capacity-based distribution)', 'CDNs utilize load balancing for latency reduction and bandwidth optimization', 'Real-world applications span from cloud services to streaming platforms and online gaming'],
          isFavorite: true,
          favoriteComment: 'Through exploring different load-balancing methodlogies, I gained better insight on how every business, group of ASes, DCNs, and more are upkept even on a global scale.'
        }
      ]
    },
    'NSSA 245': {
      title: 'Network Services',
      icon: Server,
      labs: [
        {
          labNumber: 'Lab 8',
          title: 'IP Multicast',
          skills: ['IP multicast traffic configuration', 'iperf server/client setup', 'IGMPv3 protocol', 'Wireshark packet capture', 'TTL configuration', 'Network topology design'],
          takeaways: ['Multicast requires router support for IGMP to function across networks', 'TTL values critical for multicast packet traversal across multiple networks', 'Multicast uses special MAC addresses (e.g., 01:00:5e:00:60:01) and IP ranges (225.x.x.x)', 'UDP is the transport protocol for multicast traffic']
        },
        {
          labNumber: 'Lab 7',
          title: 'DNS Part I',
          skills: ['BIND DNS server installation', 'DNS zone file creation', 'Forward and reverse DNS', 'SOA record configuration', 'nslookup, dig, and host commands', 'SELinux security policy', 'DNS integration'],
          takeaways: ['FQDN vs PQDN usage in zone data files', 'DNS resolution requires proper forward and reverse zone configuration', 'SRV records enable service discovery in domains', 'named.conf options control DNS server behavior', 'DNS is critical for Active Directory and domain services'],
          isFavorite: true,
          favoriteComment: 'Configuring forward and reverse DNS records was insightful to how DNS servers and configured, especially with instructions from named.conf and resolv.conf.'
        },
        {
          labNumber: 'Lab 6',
          title: 'DHCP Part II',
          skills: ['Rocky Linux DHCP server config', 'DHCP relay agent setup', 'DHCP failover implementation', 'dhclient.leases file management', 'systemctl and systemd', 'tcpdump and Wireshark', 'DHCP scope and reservation'],
          takeaways: ['DHCP failover provides redundancy with primary/secondary server architecture', 'Relay agents extend DHCP across network segments', 'Lease files track IP assignments and renewal times', 'DHCP configuration includes subnet declarations, ranges, and options', 'Collision detection prevents duplicate IP assignments']
        },
        {
          labNumber: 'Lab 5',
          title: 'DHCP Part I',
          skills: ['Windows Server DHCP installation', 'DORA process analysis', 'DHCP port 67/68 traffic capture', 'IP address release & renewal', 'DHCP lease mgmt', 'RFC 2132 DHCP options'],
          takeaways: ['DHCP uses ports 67 (server) and 68 (client) for communication', 'DORA process ensures proper IP assignment', 'Lease renewal occurs at 50% of lease duration', 'dhclient.leases (Linux) vs ipconfig /all (Windows) provide lease information', 'BOOTP and DHCP share similar port usage']
        },
        {
          labNumber: 'Lab 4',
          title: 'SSH Security',
          skills: ['SSH server configuration', 'SSH key-based authentication', 'ssh-keygen usage', 'SFTP implementation', 'Telnet vs SSH comparison', 'Wireshark analysis', 'Port 22 vs Port 23 analysis'],
          takeaways: ['SSH provides encrypted communication unlike Telnet', 'Key-based authentication offers stronger security than passwords', 'Public keys stored on server, private keys kept secure on client', 'SSH encrypts entire packet including payload', 'sftp uses port 22 for secure file transfers']
        },
        {
          labNumber: 'Lab 3',
          title: 'Transport Layer',
          skills: ['TCP teardown process analysis', 'Telnet client/server configuration', 'TCP state transitions', 'Three-way handshake analysis', 'IP fragmentation and reassembly', 'MTU understanding'],
          takeaways: ['Telnet is insecure due to plaintext credential transmission', 'TCP connection teardown requires proper FIN-ACK exchange', 'TCP states change during connection lifecycle', 'Fragmentation occurs when packet size exceeds MTU', 'TCP prevents fragmentation through MSS negotiation']
        },
        {
          labNumber: 'Lab 2',
          title: 'Scapy Packet Manipulation',
          skills: ['Scapy framework for packet crafting', 'IP spoofing techniques', 'TCP/IP header manipulation', 'SYN flood attack demonstration', 'iptables firewall rules', 'Packet header analysis'],
          takeaways: ['Scapy allows custom packet creation with arbitrary header values', 'IP spoofing demonstrates lack of source verification', 'SYN floods overwhelm target with incomplete handshakes', 'iptables can drop RST packets to observe connection behavior', 'TCP flags (SYN, ACK, FIN, RST) control connection states']
        },
        {
          labNumber: 'Lab 1',
          title: 'Network Fundamentals',
          skills: ['VMware virtual networking config', 'Network topology design', 'ICMP ping testing', 'L2 & L3 analysis', 'Windows & Linux config', 'Network troubleshooting'],
          takeaways: ['Virtual networks require proper interface and gateway configuration', 'Separate network segments for isolation', 'Connectivity testing essential for validation', 'Network documentation includes IP addresses, masks, gateways, DNS servers']
        }
      ]
    },
    'Wireless Networking': {
      title: 'Wireless Networking',
      icon: Wifi,
      labs: [
        {
          labNumber: 'Lab 5',
          title: '802.1X and RADIUS Authentication',
          skills: ['Port-based network access control', 'RADIUS AAA server setup', 'EAP implementation', 'WPA2-Enterprise configuration', 'EAP-TLS and PEAP protocols', 'Wireless client auth', 'TACACS+ comparison'],
          takeaways: ['802.1X works for both wired and wireless clients', 'Three entities: supplicant (client), authenticator (AP), authentication server (RADIUS)', 'RADIUS uses UDP; TACACS+ uses encrypted TCP', 'EAP provides flexibility for multiple authentication methods', 'WPA2-Enterprise offers certificate-based or username/password authentication']
        },
        {
          labNumber: 'Lab 4',
          title: '802.11n and Advanced Wi-Fi Features',
          skills: ['MCS (Modulation Coding Scheme)', 'Spatial streams and MIMO', 'Guard interval optimization', 'QAM', 'Channel bonding', 'A-MPDU analysis', 'RTS/CTS and Block-ACK mechanisms', 'IP fragmentation over wireless'],
          takeaways: ['MCS determines optimal data rate based on channel conditions', '802.11n offers higher throughput through aggregation', 'A-MPDUs reduce overhead by combining multiple frames', 'Channel bonding increases bandwidth but requires compatible equipment', 'Guard intervals prevent inter-symbol interference'],
          isFavorite: true,
          favoriteComment: 'Understanding the MCS table provides crucial knowledge on how wireless tech must achieve stable rates, highlighting the modulation techniques that help conserve bandwidth and prevent channel overlap.'
        },
        {
          labNumber: 'Lab 3',
          title: 'iPerf Network Performance Testing',
          skills: ['iPerf3 client/server configuration', 'TCP and UDP throughput testing', 'Bandwidth measurement and analysis', 'Network performance metrics interpretation', 'Wireless vs wired comparison', 'Multi-client contention analysis', 'Wireshark traffic capture'],
          takeaways: ['TCP shows more retransmissions and out-of-order packets under contention', 'Wireless performance significantly lower than wired', 'Multiple wireless clients cause severe contention and dropped connections', 'UDP provides consistent streaming without handshake overhead', 'Performance metrics help identify network bottlenecks'],
          isFavorite: true,
          favoriteComment: 'This introduction to iPerf got me hooked onto using it to perform metric tests. It is very useful when weighing wireless networks against each other, testing signal strength for APs, and observing what traffic is being transmitted.'
        },
        {
          labNumber: 'Lab 2',
          title: 'Wireless Frame Analysis and Security',
          skills: ['Probe Request/Response frame analysis', 'Active scanning process', 'Authentication exchange', 'Association process', 'RSN configuration', 'WPA/WPA2 security comparison', 'EAPOL key exchange analysis', 'Wireless frame encryption/decryption'],
          takeaways: ['Probe Requests can be broadcast (discovery) or directed (reconnection)', 'Authentication differs from Association', 'RSN provides advanced encryption and key management', 'Group ciphers for multicast/broadcast; pairwise ciphers for unicast', 'WPA2 uses AES-CCMP (superior to WPA\'s TKIP)']
        },
        {
          labNumber: 'Lab 1',
          title: 'Wireless Fundamentals',
          skills: ['802.11 frame structure analysis', 'Beacon frame examination', 'Radio information header interpretation', 'OFDM understanding', 'Channel and frequency relationship', 'SSID and BSSID identification', 'ESS vs IBSS topology', 'LLC layer purpose', 'Cisco EWC configuration'],
          takeaways: ['Beacon frames broadcast AP capabilities and SSID', 'Radio header contains modulation scheme, data rate, channel, frequency, signal strength', 'SSID is network name; BSSID is AP MAC address', '802.11 requires LLC layer due to wireless reliability challenges', 'Four addresses in 802.11 header: receiver, destination, transmitter, source']
        }
      ]
    },
    'NSSA 221': {
      title: 'Systems Administration I',
      icon: Server,
      labs: [
        {
          labNumber: 'Lab 6',
          title: 'Web, Mail, and Task Scheduling Services',
          skills: ['Apache web server configuration', 'DocumentRoot directive management', 'Virtual host setup', 'SSL/TLS certificate generation', 'HTTPS configuration', 'MUA/MDA/MTA understanding', 'SMTP, POP3, and IMAP configuration', 'Postfix and Dovecot setup', 'Rsyslog configuration', 'Cron, at, & anacron scheduling'],
          takeaways: ['DocumentRoot defines web content location (default /var/www/html)', 'Virtual hosts allow multiple websites on single server', 'Self-signed certificates provide encryption but lack external validation', 'MUA uses SMTP to send; POP3/IMAP to receive', 'Cron for recurring tasks; at for one-time; anacron handles system downtime']
        },
        {
          labNumber: 'Lab 4',
          title: 'Storage Management (RAID and LVM)',
          skills: ['RAID configuration (RAID 0, 1, 5)', 'Mirroring, striping, and parity', 'mdadm RAID management', 'RAID redundancy and rebuild', 'LVM setup', 'Physical volumes and logical volumes', 'Filesystem mounting', '/etc/fstab configuration', 'Partition table types (MBR vs GPT)'],
          takeaways: ['RAID 0: striping for performance, no redundancy', 'RAID 1: mirroring for redundancy, 50% storage efficiency', 'RAID 5: striping with parity, can survive single drive failure', 'LVM provides flexible storage management with online resizing', 'GPT supports >2TB drives and 128 partitions (vs MBR\'s 4)']
        },
        {
          labNumber: 'Lab 3',
          title: 'Git Version Control and SSH Security',
          skills: ['Git repository initialization', 'Git commit workflow', 'Branch management and merging', 'SSH key-based authentication setup', 'Authorized_keys file configuration', 'ps command for process monitoring', 'SSH key generation and fingerprint verification'],
          takeaways: ['Git tracks changes through blob objects (local and remote)', 'Commit messages document repository changes', 'SSH keys provide more secure authentication than passwords', 'Public key stored on server; private key on client', 'Git config --global sets user identity for commits']
        },
        {
          labNumber: 'Lab 2',
          title: 'Active Directory and Group Policy',
          skills: ['Windows Server AD installation', 'Domain Controller deployment', 'DNS integration with AD', 'Organizational Unit (OU) creation', 'Group Policy Object (GPO) creation', 'User account mgmt', 'DHCP scope config', 'PowerShell AD cmdlets', 'SamAccountName vs User Principal Name'],
          takeaways: ['Domain Controllers manage authentication and group policies', 'DNS SRV records enable AD service discovery', 'OUs create administrative boundaries; GPOs create security boundaries', 'GPO precedence: Local → Site → Domain → OU', 'Enterprise Admins (forest-wide), Schema Admins (directory structure), Domain Admins (domain-wide)'],
          isFavorite: true,
          favoriteComment: 'Configuring Active Directory through Windows Server features was insightful. Joining other Windows client VMs I started to the domain to see the effect of my set GPOs was also cool!'
        },
        {
          labNumber: 'Lab 1',
          title: 'pfSense and Virtual Network Setup',
          skills: ['pfSense firewall/router configuration', 'NAT (Network Address Translation) setup', 'WAN/LAN interface configuration', 'RFC 1918 private IP addressing', 'IP Masquerading understanding', 'VMware Workstation networking', 'VM snapshot mgmt', 'Linux man pages navigation', 'Windows PowerShell Get-Help command'],
          takeaways: ['pfSense separates private LAN from public WAN using NAT', 'IP Masquerading allows multiple devices to share single public IP', 'Full clones: independent, better performance; Linked clones: faster creation', 'Snapshots enable quick rollback for testing and troubleshooting', 'NAT translates private IPs to public IP for internet access'],
          isFavorite: true,
          favoriteComment: 'Configuring pfSense interfaces on a VM and configuring IPs and Gateways for the Windows/Linux VMs was great practice. Having the Windows/Linux VMs serve as clients and servers (DNS/DHCP) was the closest I got to homelabbing away from home!'
        }
      ]
    },
    'NSSA 220': {
      title: 'Task Automation Using Interpretive Languages',
      icon: Terminal,
      labs: [
        {
          labNumber: 'Lab 1',
          title: 'Linux Commands',
          skills: ['Advanced Linux command-line proficiency', 'Regular expressions (regex)', 'Pipe and redirection operators', 'Text processing with grep, sed, awk', 'CSV data manipulation', 'File system navigation', 'Error stream redirection', 'Complex command construction'],
          takeaways: ['Regex patterns for file matching', 'Find command with filters to locate inaccessible directories', 'CSV to text file conversion with delimiter replacement', 'Data filtering and sorting with awk and sort', 'Multi-field output formatting']
        },
        {
          labNumber: 'Lab 2',
          title: 'Bash Scripting',
          skills: ['Bash script development', 'Command-line argument parsing', 'Random number generation', 'Function creation and usage', 'File I/O operations', 'User account mgmt with useradd', 'File permissions and ownership modification', 'Directory structure creation', 'Interactive script prompts and loops'],
          takeaways: ['Scripts accept parameters stored in variables ($1, $2, $3)', 'Functions modularize code', '$RANDOM generates numbers 0-32767; custom ranges require modulo operations', 'Automated user provisioning with custom home directory setup', 'System administration automation reduces manual configuration errors']
        },
        {
          labNumber: 'Lab 3',
          title: 'Python Data Processing',
          skills: ['Python script dev', 'Command-line argument handling (sys.argv)', 'File reading and parsing', 'Data structure manipulation (Lists, Dictionaries)', 'Statistical analysis (min, max, average, standard deviation)', 'CSV data processing', 'MD5 hash comparison', 'System call execution in Python', 'Algorithm implementation for data mining'],
          takeaways: ['Iris dataset (demo file) analysis demonstrates machine learning data preprocessing', 'Functions separate concerns (read_data, process_numeric_field, count_iris_types)', 'Statistical calculations essential for data analysis', 'MD5 message digests verify file integrity and detect compromises', 'Python\'s flexibility for both data science and system administration'],
          isFavorite: true,
          favoriteComment: 'Through coding scripts for parsing through file info. and file logs demonstrated to me the capabilities python has for collecting and reporting crucial computer metrics. This skill I utilize in my NOC Dashboard.'
        }
      ]
    }
  };

  return (
    <div id="labwork" className="w-full px-4 py-20 bg-gradient-to-b from-transparent to-purple-50/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Technical Labs & Coursework
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          23 hands-on labs across networking, systems administration, wireless technologies, and automation
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Course and Lab List */}
        <div className="lg:col-span-1 space-y-3">
          {Object.entries(labsData).map(([courseCode, courseData]) => {
            const CourseIcon = courseData.icon;
            const isExpanded = expandedCourse === courseCode;
            
            return (
              <div key={courseCode} className="space-y-2">
                {/* Course Header - Clickable */}
                <button
                  id={`course-${courseCode}`}
                  onClick={() => setExpandedCourse(isExpanded ? null : courseCode)}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-purple-100 hover:bg-purple-50 transition-all duration-300"
                >
                  <CourseIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <p className="text-xs font-semibold text-purple-600">{courseCode}</p>
                    <p className="text-sm font-medium text-gray-800">{courseData.title}</p>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 text-purple-600 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Labs List - Collapsible */}
                {isExpanded && (
                  <div className="space-y-2 pl-2 animate-fade-in">
                    {courseData.labs
                      .slice()
                      .sort((a, b) => {
                        const aNum = parseInt(a.labNumber.match(/\d+/)?.[0] ?? '999');
                        const bNum = parseInt(b.labNumber.match(/\d+/)?.[0] ?? '999');
                        return aNum - bNum;
                      })
                      .map((lab, idx) => {
                      const labId = `${courseCode}-${courseData.labs.indexOf(lab)}`;
                      const isSelected = selectedLab === labId;

                      return (
                        <button
                          key={labId}
                          onClick={() => setSelectedLab(labId)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                            isSelected
                              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                              : 'bg-white text-gray-800 hover:bg-purple-50 border border-gray-200 shadow-sm'
                          }`}
                        >
                          <div className="flex-1">
                            <p className="text-xs font-semibold opacity-75">{lab.labNumber}</p>
                            <p className="text-sm font-medium">{lab.title}</p>
                          </div>
                          {lab.isFavorite && (
                            <Star 
                              className={`w-4 h-4 flex-shrink-0 ${
                                isSelected ? 'text-yellow-300' : 'text-yellow-400'
                              }`}
                              fill="currentColor"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Panel - Lab Details */}
        <div className="lg:col-span-2">
          {selectedLab ? (
            (() => {
              // Find the selected lab
              let selectedLabData = null;
              let courseName = null;

              for (const [courseCode, courseData] of Object.entries(labsData)) {
                const parts = selectedLab.split('-');
                const idx = parseInt(parts[1]);
                if (courseCode === parts[0] && courseData.labs[idx]) {
                  selectedLabData = courseData.labs[idx];
                  courseName = courseCode;
                  break;
                }
              }

              return selectedLabData ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-purple-600 px-3 py-1 bg-purple-50 rounded-full">{courseName}</span>
                      <span className="text-xs font-semibold text-gray-600 px-3 py-1 bg-gray-100 rounded-full">{selectedLabData.labNumber}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">{selectedLabData.title}</h3>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Code className="w-5 h-5 text-purple-600" />
                      <h4 className="text-xl font-bold text-gray-800">Skills Gained</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedLabData.skills.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} />
                      ))}
                    </div>
                  </div>

                  {/* Takeaways Section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      <h4 className="text-xl font-bold text-gray-800">Key Takeaways</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedLabData.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Favorite Comment Section */}
                  {selectedLabData.isFavorite && (
                    <div className="pt-8 border-t border-purple-200">
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                        <h4 className="text-xl font-bold text-gray-800">Why I Love This Lab</h4>
                      </div>
                      {selectedLabData.favoriteComment ? (
                        <p className="text-gray-700 leading-relaxed">{selectedLabData.favoriteComment}</p>
                      ) : (
                        <p className="text-gray-400 italic">No comment yet</p>
                      )}
                    </div>
                  )}
                </div>
              ) : null;
            })()
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-12 flex items-center justify-center min-h-[500px]">
              <div className="text-center">
                <Code className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">Select a lab to view details</p>
              </div>
            </div>
          )}
        </div>
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
      <Labs />
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