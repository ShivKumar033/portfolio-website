import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Calendar, ExternalLink, BookOpen, Target } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      status: 'In Progress',
      expectedDate: 'March 2024',
      description: 'Foundational cybersecurity certification covering network security, compliance, threats and vulnerabilities.',
      credentialUrl: null,
      priority: 'high'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      status: 'Planned',
      expectedDate: 'June 2024',
      description: 'Comprehensive ethical hacking and penetration testing certification.',
      credentialUrl: null,
      priority: 'high'
    },
    {
      name: 'TryHackMe King of the Hill',
      issuer: 'TryHackMe',
      status: 'Completed',
      completedDate: 'January 2024',
      description: 'Competitive cybersecurity challenges demonstrating practical security skills.',
      credentialUrl: 'https://tryhackme.com',
      priority: 'medium'
    },
    {
      name: 'Hack The Box Pro Labs',
      issuer: 'Hack The Box',
      status: 'Completed',
      completedDate: 'December 2023',
      description: 'Advanced penetration testing labs and real-world security scenarios.',
      credentialUrl: 'https://hackthebox.com',
      priority: 'medium'
    }
  ];

  const courses = [
    {
      title: 'Practical Ethical Hacking',
      provider: 'Udemy',
      instructor: 'Heath Adams',
      status: 'Completed',
      completedDate: 'November 2023',
      duration: '25 hours',
      topics: ['Network Penetration Testing', 'Web Application Testing', 'Active Directory']
    },
    {
      title: 'Web Application Security',
      provider: 'Coursera',
      instructor: 'University of Maryland',
      status: 'Completed',
      completedDate: 'October 2023',
      duration: '40 hours',
      topics: ['OWASP Top 10', 'SQL Injection', 'XSS', 'CSRF']
    },
    {
      title: 'Cybersecurity Fundamentals',
      provider: 'edX',
      instructor: 'MIT',
      status: 'Completed',
      completedDate: 'September 2023',
      duration: '60 hours',
      topics: ['Cryptography', 'Network Security', 'Risk Management']
    },
    {
      title: 'Digital Forensics',
      provider: 'University Course',
      instructor: 'Computer Science Department',
      status: 'In Progress',
      expectedDate: 'May 2024',
      duration: '15 weeks',
      topics: ['Evidence Collection', 'Memory Analysis', 'Network Forensics']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planned': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority: string) => {
    return priority === 'high' ? <Target className="w-4 h-4 text-red-500" /> : <Award className="w-4 h-4 text-blue-500" />;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Certifications & Education
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and educational achievements in cybersecurity
            </p>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-cyber-accent" />
              Professional Certifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-soft hover:shadow-cyber transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        {getPriorityIcon(cert.priority)}
                        <div>
                          <CardTitle className="text-xl">{cert.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(cert.status)}>
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.status === 'Completed' 
                        ? `Completed: ${cert.completedDate}` 
                        : `Expected: ${cert.expectedDate}`
                      }
                    </div>

                    {cert.credentialUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Credential
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-cyber-accent" />
              Courses & Training
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {course.provider} • {course.instructor}
                        </p>
                      </div>
                      <Badge className={getStatusColor(course.status)}>
                        {course.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {course.status === 'Completed' 
                          ? course.completedDate 
                          : course.expectedDate
                        }
                      </span>
                      <span>Duration: {course.duration}</span>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;