import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Shield, Terminal, Monitor } from 'lucide-react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       icon: Code,
//       title: 'Programming Languages',
//       skills: [
//         { name: 'Python', level: 85, description: 'Automation, scripting, security tools' },
//         { name: 'JavaScript', level: 75, description: 'Web security, browser exploitation' },
//         { name: 'Bash/Shell', level: 80, description: 'System administration, automation' },
//         { name: 'PowerShell', level: 60, description: 'Windows security, AD enumeration' }
//       ]
//     },
//     {
//       icon: Shield,
//       title: 'Security Tools',
//       skills: [
//         { name: 'Burp Suite', level: 80, description: 'Web application testing' },
//         { name: 'Wireshark', level: 75, description: 'Network analysis and monitoring' },
//         { name: 'Nmap', level: 85, description: 'Network discovery and security auditing' },
//         { name: 'Metasploit', level: 70, description: 'Penetration testing framework' }
//       ]
//     },
//     {
//       icon: Terminal,
//       title: 'Domains & Concepts',
//       skills: [
//         { name: 'Vulnerability Assessment', level: 80, description: 'Identifying security weaknesses' },
//         { name: 'SIEM', level: 65, description: 'Security monitoring and analysis' },
//         { name: 'Incident Response', level: 70, description: 'Security incident handling' },
//         { name: 'Malware Analysis', level: 60, description: 'Reverse engineering threats' }
//       ]
//     },
//     {
//       icon: Monitor,
//       title: 'Operating Systems',
//       skills: [
//         { name: 'Linux', level: 85, description: 'Server administration, security hardening' },
//         { name: 'Windows', level: 75, description: 'Active Directory, Windows security' },
//         { name: 'macOS', level: 65, description: 'General administration and security' }
//       ]
//     }
//   ];

//   const additionalSkills = [
//     'OWASP Top 10', 'CTF Competitions', 'Digital Forensics', 'Social Engineering',
//     'Risk Assessment', 'Compliance (ISO 27001)', 'Cloud Security', 'Cryptography',
//     'API Security', 'Mobile Security', 'IoT Security', 'DevSecOps'
//   ];

//   return (
//     <Layout>
//       <div className="container mx-auto px-4 py-16">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Skills & Expertise
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Technical skills and security domains I've been developing through coursework and practical experience
//             </p>
//           </div>

//           {/* Main Skills Grid */}
//           <div className="grid lg:grid-cols-2 gap-8 mb-16">
//             {skillCategories.map((category, index) => (
//               <Card key={index} className="shadow-soft">
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-3">
//                     <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
//                       <category.icon className="w-5 h-5 text-primary-foreground" />
//                     </div>
//                     <span className="text-xl">{category.title}</span>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex} className="space-y-2">
//                       <div className="flex justify-between items-center">
//                         <h4 className="font-semibold text-foreground">{skill.name}</h4>
//                         <span className="text-sm text-muted-foreground">{skill.level}%</span>
//                       </div>
//                       <Progress value={skill.level} className="h-2" />
//                       <p className="text-sm text-muted-foreground">{skill.description}</p>
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', description: 'Automation, scripting, security tools' },
        { name: 'JavaScript', description: 'Web security, browser exploitation' },
        { name: 'Bash/Shell', description: 'System administration, automation' },
        { name: 'PowerShell', description: 'Windows security, AD enumeration' }
      ]
    },
    {
      icon: Shield,
      title: 'Security Tools',
      skills: [
        { name: 'Burp Suite', description: 'Web application testing' },
        { name: 'Wireshark', description: 'Network analysis and monitoring' },
        { name: 'Nmap', description: 'Network discovery and security auditing' },
        { name: 'Metasploit', description: 'Penetration testing framework' }
      ]
    },
    {
      icon: Terminal,
      title: 'Domains & Concepts',
      skills: [
        { name: 'Vulnerability Assessment', description: 'Identifying security weaknesses' },
        { name: 'SIEM', description: 'Security monitoring and analysis' },
        { name: 'Incident Response', description: 'Security incident handling' },
        { name: 'Malware Analysis', description: 'Reverse engineering threats' }
      ]
    },
    {
      icon: Monitor,
      title: 'Operating Systems',
      skills: [
        { name: 'Linux', description: 'Server administration, security hardening' },
        { name: 'Windows', description: 'Active Directory, Windows security' },
        { name: 'macOS', description: 'General administration and security' }
      ]
    }
  ];

  const additionalSkills = [
    'OWASP Top 10', 'CTF Competitions', 'Digital Forensics', 'Social Engineering',
    'Risk Assessment', 'Compliance (ISO 27001)', 'Cloud Security', 'Cryptography',
    'API Security', 'Mobile Security', 'IoT Security', 'DevSecOps'
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical skills and security domains I've been developing through coursework and practical experience
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Additional Skills & Knowledge Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {additionalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;