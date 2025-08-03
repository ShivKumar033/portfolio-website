import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Shield, Target, Code, Search } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Understanding network protocols, firewalls, and intrusion detection systems.'
    },
    {
      icon: Target,
      title: 'Penetration Testing',
      description: 'Learning ethical hacking techniques and vulnerability assessment methodologies.'
    },
    {
      icon: Code,
      title: 'Web Application Security',
      description: 'Identifying and mitigating web application vulnerabilities and threats.'
    },
    {
      icon: Search,
      title: 'Bug Hunting',
      description: 'Discovering and reporting security vulnerabilities in web applications.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about cybersecurity and committed to building a career in digital defense
            </p>
          </div>

          {/* Bio Section */}
          <Card className="mb-12 shadow-soft">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-6">
                  I'm a dedicated cybersecurity student with a strong passion for protecting digital assets 
                  and systems from evolving threats. My journey into cybersecurity began with a fascination 
                  for understanding how systems work and how they can be secured against malicious actors.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  Through hands-on learning, capture-the-flag competitions, and practical lab exercises, 
                  I've developed a solid foundation in various cybersecurity domains. I'm particularly 
                  interested in offensive security, vulnerability research, and incident response. My goal 
                  is to contribute to making the digital world safer while continuously learning and 
                  adapting to new security challenges.
                </p>
                
                <div className="flex justify-center mt-8">
                  <Button className="bg-gradient-primary hover:shadow-cyber transition-all duration-300">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Focus Areas */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Areas of Focus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-soft transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {area.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {area.description}
                        </p>
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

export default About;