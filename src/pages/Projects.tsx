// import Layout from '@/components/Layout';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Github, ExternalLink, Terminal, Shield, Bug, MonitorSpeaker } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       icon: Terminal,
//       title: 'Web Vulnerability Scanner',
//       description: 'A Python-based automated scanner that detects common web vulnerabilities including SQL injection, XSS, and CSRF. Features multi-threading and comprehensive reporting.',
//       technologies: ['Python', 'Requests', 'BeautifulSoup', 'Threading'],
//       githubUrl: 'https://github.com',
//       liveUrl: null,
//       status: 'Completed',
//       type: 'Tool Development'
//     },
//     {
//       icon: Shield,
//       title: 'Network Security Monitor',
//       description: 'Real-time network traffic analyzer built with Python and Scapy. Detects suspicious activities, port scans, and generates security alerts.',
//       technologies: ['Python', 'Scapy', 'Tkinter', 'SQLite'],
//       githubUrl: 'https://github.com',
//       liveUrl: null,
//       status: 'In Progress',
//       type: 'Network Security'
//     },
//     {
//       icon: Bug,
//       title: 'CTF Writeups Collection',
//       description: 'Comprehensive collection of writeups from various Capture The Flag competitions including TryHackMe, HackTheBox, and local CTF events.',
//       technologies: ['Documentation', 'Analysis', 'Research'],
//       githubUrl: 'https://github.com',
//       liveUrl: 'https://writeups.example.com',
//       status: 'Ongoing',
//       type: 'Research'
//     },
//     {
//       icon: MonitorSpeaker,
//       title: 'SOC Dashboard Demo',
//       description: 'Interactive security operations center dashboard built with React. Displays real-time security metrics, threat intelligence, and incident tracking.',
//       technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
//       githubUrl: 'https://github.com',
//       liveUrl: 'https://soc-demo.example.com',
//       status: 'Completed',
//       type: 'Dashboard'
//     },
//     {
//       icon: Shield,
//       title: 'Password Security Analyzer',
//       description: 'Tool that analyzes password strength, checks against known breaches using HaveIBeenPwned API, and provides security recommendations.',
//       technologies: ['Python', 'Flask', 'API Integration', 'Security'],
//       githubUrl: 'https://github.com',
//       liveUrl: null,
//       status: 'Completed',
//       type: 'Security Tool'
//     },
//     {
//       icon: Terminal,
//       title: 'Automated Recon Framework',
//       description: 'Comprehensive reconnaissance automation tool for ethical hacking. Integrates multiple tools for subdomain enumeration, port scanning, and vulnerability assessment.',
//       technologies: ['Bash', 'Python', 'Nmap', 'Sublist3r'],
//       githubUrl: 'https://github.com',
//       liveUrl: null,
//       status: 'In Progress',
//       type: 'Automation'
//     }
//   ];

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'Completed': return 'bg-green-100 text-green-800';
//       case 'In Progress': return 'bg-blue-100 text-blue-800';
//       case 'Ongoing': return 'bg-orange-100 text-orange-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <Layout>
//       <div className="container mx-auto px-4 py-16">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Projects & Work
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Cybersecurity projects, tools, and research that demonstrate my practical skills and learning journey
//             </p>
//           </div>

//           {/* Projects Grid */}
//           <div className="grid lg:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <Card key={index} className="shadow-soft hover:shadow-cyber transition-shadow duration-300">
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
//                         <project.icon className="w-6 h-6 text-primary-foreground" />
//                       </div>
//                       <div>
//                         <CardTitle className="text-xl">{project.title}</CardTitle>
//                         <Badge variant="outline" className="mt-1 text-xs">
//                           {project.type}
//                         </Badge>
//                       </div>
//                     </div>
//                     <Badge className={getStatusColor(project.status)}>
//                       {project.status}
//                     </Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-muted-foreground leading-relaxed">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="secondary" className="text-xs">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>

//                   <div className="flex space-x-3 pt-4">
//                     <Button size="sm" variant="outline" asChild>
//                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                         <Github className="w-4 h-4 mr-2" />
//                         Code
//                       </a>
//                     </Button>
//                     {project.liveUrl && (
//                       <Button size="sm" asChild>
//                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           Live Demo
//                         </a>
//                       </Button>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-16">
//             <Card className="max-w-2xl mx-auto shadow-soft">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold text-foreground mb-4">
//                   Interested in Collaboration?
//                 </h3>
//                 <p className="text-muted-foreground mb-6">
//                   I'm always open to working on new cybersecurity projects and contributing to open-source security tools.
//                 </p>
//                 <Button className="bg-gradient-primary hover:shadow-cyber transition-all duration-300">
//                   <Github className="w-5 h-5 mr-2" />
//                   View All Projects on GitHub
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Projects;





import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Terminal, Shield, Bug, MonitorSpeaker, GraduationCap, Briefcase, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Terminal,
      title: 'Web Vulnerability Scanner',
      description: 'A Python-based automated scanner that detects common web vulnerabilities including SQL injection, XSS, and CSRF. Features multi-threading and comprehensive reporting.',
      technologies: ['Python', 'Requests', 'BeautifulSoup', 'Threading'],
      githubUrl: 'https://github.com',
      liveUrl: null,
      status: 'Completed',
      type: 'Tool Development'
    },
    {
      icon: Shield,
      title: 'Network Security Monitor',
      description: 'Real-time network traffic analyzer built with Python and Scapy. Detects suspicious activities, port scans, and generates security alerts.',
      technologies: ['Python', 'Scapy', 'Tkinter', 'SQLite'],
      githubUrl: 'https://github.com',
      liveUrl: null,
      status: 'In Progress',
      type: 'Network Security'
    },
    {
      icon: Bug,
      title: 'CTF Writeups Collection',
      description: 'Comprehensive collection of writeups from various Capture The Flag competitions including TryHackMe, HackTheBox, and local CTF events.',
      technologies: ['Documentation', 'Analysis', 'Research'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://writeups.example.com',
      status: 'Ongoing',
      type: 'Research'
    },
    {
      icon: MonitorSpeaker,
      title: 'SOC Dashboard Demo',
      description: 'Interactive security operations center dashboard built with React. Displays real-time security metrics, threat intelligence, and incident tracking.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://soc-demo.example.com',
      status: 'Completed',
      type: 'Dashboard'
    },
  ];

  const education = [
    {
      icon: GraduationCap,
      title: 'BSc in Computer Science',
      description: 'Focused on cybersecurity, networks, and ethical hacking. Developed hands-on skills with various tools and security concepts.',
      institution: 'XYZ University',
      year: '2019 – 2023'
    }
  ];

  const experience = [
    {
      icon: Briefcase,
      title: 'Cybersecurity Intern',
      description: 'Worked on vulnerability assessments, threat modeling, and internal security audits. Assisted in building internal security tools.',
      company: 'ABC Security Solutions',
      duration: 'Jan 2023 – Jun 2023'
    },
    {
      icon: Briefcase,
      title: 'Freelance Penetration Tester',
      description: 'Performed black-box and gray-box tests for small businesses and bug bounty programs. Delivered detailed reports with actionable fixes.',
      company: 'Self-Employed',
      duration: '2022 – Present'
    }
  ];

  const skills = [
    'Penetration Testing', 'Network Analysis', 'Python', 'Bash', 'Reconnaissance', 'Burp Suite', 'Nmap',
    'OWASP Top 10', 'Metasploit', 'Threat Intelligence', 'Wireshark', 'Linux Security'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Ongoing': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projects & Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cybersecurity projects, tools, and research that demonstrate my practical skills and learning journey
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-soft hover:shadow-cyber transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="p-4 shadow-soft">
                  <CardHeader className="flex items-center space-x-3">
                    <edu.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">{edu.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-base">{edu.description}</p>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">
                      {edu.institution} &mdash; {edu.year}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <CardTitle className="text-xl">Cybersecurity Intern</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base">
                    Worked on vulnerability assessments, threat modeling, and internal security audits. Assisted in building internal security tools.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">
                    ABC Security Solutions &mdash; Jan 2023 – Jun 2023
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Vulnerability Assessment', 'Threat Modeling', 'Internal Tools', 'Audit'].map((skill, idx) => (
                      <Button key={idx} variant="outline" size="sm" className="text-xs">
                        {skill}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

