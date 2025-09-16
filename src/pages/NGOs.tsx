import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Search,
  MapPin,
  Star,
  Phone,
  Globe,
  Award,
  TrendingUp,
  Handshake
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const NGOs = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock NGO data
  const ngos = [
    {
      id: 1,
      name: "HELP Foundation Kashmir",
      focus: "Education & Skill Development",
      location: "Srinagar, J&K",
      studentsHelped: 15420,
      programs: ["Career Guidance", "Skill Training", "Scholarship Support"],
      established: 2010,
      rating: 4.8,
      contact: "+91-194-2400000",
      website: "www.helpkashmir.org",
      description: "Dedicated to empowering Kashmiri youth through education and skill development programs.",
      impact: "92% placement rate for trained students",
      districts: ["Srinagar", "Baramulla", "Anantnag"]
    },
    {
      id: 2,
      name: "Chinar Foundation",
      focus: "Women's Education",
      location: "Jammu, J&K",
      studentsHelped: 8930,
      programs: ["Women's Empowerment", "Higher Education", "Digital Literacy"],
      established: 2015,
      rating: 4.6,
      contact: "+91-191-2550000",
      website: "www.chinarfoundation.org",
      description: "Focused on empowering women through education and creating opportunities in rural J&K.",
      impact: "85% women enrolled in higher education",
      districts: ["Jammu", "Kathua", "Udhampur"]
    },
    {
      id: 3,
      name: "Serving Nations J&K",
      focus: "Rural Education",
      location: "Baramulla, J&K",
      studentsHelped: 12350,
      programs: ["Mobile Education Units", "Teacher Training", "Infrastructure Development"],
      established: 2008,
      rating: 4.7,
      contact: "+91-1954-230000",
      website: "www.servingnationsjk.org",
      description: "Bringing quality education to remote villages across Jammu & Kashmir.",
      impact: "200+ schools supported",
      districts: ["Baramulla", "Kupwara", "Bandipora"]
    },
    {
      id: 4,
      name: "Kashmir Youth Development Trust",
      focus: "Youth Entrepreneurship",
      location: "Pulwama, J&K",
      studentsHelped: 5670,
      programs: ["Startup Incubation", "Business Training", "Micro-Finance"],
      established: 2012,
      rating: 4.5,
      contact: "+91-1933-240000",
      website: "www.kydt.org",
      description: "Supporting young entrepreneurs and fostering innovation in Kashmir valley.",
      impact: "150+ successful startups launched",
      districts: ["Pulwama", "Shopian", "Kulgam"]
    },
    {
      id: 5,
      name: "Ladakh Education Alliance",
      focus: "STEM Education",
      location: "Leh, Ladakh",
      studentsHelped: 3420,
      programs: ["Science Labs", "Coding Bootcamps", "Scholarship Programs"],
      established: 2016,
      rating: 4.4,
      contact: "+91-1982-250000",
      website: "www.ladakhedu.org",
      description: "Promoting STEM education and preparing students for technology careers in Ladakh.",
      impact: "78% students pursue STEM careers",
      districts: ["Leh", "Kargil"]
    }
  ];

  // Impact data for charts
  const impactData = [
    { district: 'Srinagar', students: 15420 },
    { district: 'Baramulla', students: 12350 },
    { district: 'Jammu', students: 8930 },
    { district: 'Pulwama', students: 5670 },
    { district: 'Leh', students: 3420 }
  ];

  const focusAreaData = [
    { name: 'Education & Skills', value: 35, color: '#0D7377' },
    { name: 'Women Empowerment', value: 25, color: '#14FFEC' },
    { name: 'Rural Development', value: 20, color: '#323232' },
    { name: 'Youth Programs', value: 20, color: '#0D7377' }
  ];

  const filteredNGOs = ngos.filter(ngo => 
    ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.focus.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCollaborate = (ngoName: string) => {
    toast({
      title: "Collaboration Request Sent!",
      description: `Your collaboration request has been sent to ${ngoName}. They will contact you within 2-3 business days.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-card via-background to-card">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              NGO Partnership &{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Community Support
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with leading NGOs across Jammu & Kashmir working to empower students 
              through education, skills, and opportunities.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm text-muted-foreground">Active NGOs</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">45,790</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">Programs Running</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search NGOs by name, focus area, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Impact Analytics */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            NGO Impact Analytics
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* District-wise Impact */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Students Supported by District
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={impactData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="district" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Focus Areas */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  NGO Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={focusAreaData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {focusAreaData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {focusAreaData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NGO Directory */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              NGO Directory ({filteredNGOs.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNGOs.map((ngo) => (
              <Card key={ngo.id} className="card-shadow hover:scale-105 transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-1">{ngo.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {ngo.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 bg-background rounded px-2 py-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span className="text-xs font-medium">{ngo.rating}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit text-accent border-accent/30">
                    {ngo.focus}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {ngo.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Students Helped</div>
                      <div className="text-muted-foreground">{ngo.studentsHelped.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="font-medium">Since</div>
                      <div className="text-muted-foreground">{ngo.established}</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-sm mb-2">Key Programs</div>
                    <div className="flex flex-wrap gap-1">
                      {ngo.programs.slice(0, 2).map((program, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                      {ngo.programs.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{ngo.programs.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="flex-1">
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{ngo.name}</DialogTitle>
                          <DialogDescription>{ngo.location}</DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">About</h4>
                            <p className="text-sm text-muted-foreground">{ngo.description}</p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Impact</h4>
                              <div className="text-sm space-y-1">
                                <div>Students Helped: {ngo.studentsHelped.toLocaleString()}</div>
                                <div>Success Impact: {ngo.impact}</div>
                                <div>Districts Covered: {ngo.districts.join(", ")}</div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Programs</h4>
                              <div className="space-y-1">
                                {ngo.programs.map((program, index) => (
                                  <Badge key={index} variant="outline" className="mr-1 mb-1">
                                    {program}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Contact Information</h4>
                            <div className="text-sm space-y-1">
                              <div className="flex items-center gap-2">
                                <Phone className="h-3 w-3" />
                                {ngo.contact}
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="h-3 w-3" />
                                {ngo.website}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-accent hover:opacity-90"
                      onClick={() => handleCollaborate(ngo.name)}
                    >
                      <Handshake className="h-3 w-3 mr-1" />
                      {t('collaborate')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNGOs.length === 0 && (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No NGOs found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NGOs;