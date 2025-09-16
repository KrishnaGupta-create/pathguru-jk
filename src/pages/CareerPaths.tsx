import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  MapPin,
  Filter,
  Star,
  Building2
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CareerPaths = () => {
  const { t } = useLanguage();
  const [selectedStream, setSelectedStream] = useState("all");

  // Mock career path data
  const careerPaths = [
    {
      id: 1,
      title: "Government Jobs",
      stream: "government",
      description: "Secure positions in J&K government departments and central services",
      avgSalary: "₹25,000 - ₹80,000/month",
      growth: "High",
      demand: 85,
      timeToLand: "6-18 months",
      topOpportunities: ["JKPSC", "JKSSB", "Banking", "Teaching", "Police Services"],
      education: ["Graduation", "Post-Graduation", "Professional Courses"],
      locations: ["Srinagar", "Jammu", "All Districts"],
      steps: [
        "Complete your graduation",
        "Prepare for competitive exams",
        "Apply for relevant positions",
        "Clear written & interview rounds"
      ],
      pros: ["Job Security", "Fixed Timings", "Pension Benefits", "Social Status"],
      cons: ["Competitive", "Lengthy Process", "Limited Growth"],
      icon: "🏛️"
    },
    {
      id: 2,
      title: "Tourism & Hospitality",
      stream: "tourism",
      description: "Capitalize on J&K's natural beauty and growing tourism industry",
      avgSalary: "₹15,000 - ₹50,000/month",
      growth: "Very High",
      demand: 92,
      timeToLand: "2-6 months",
      topOpportunities: ["Hotel Management", "Tour Operations", "Adventure Sports", "Travel Agencies", "Homestays"],
      education: ["Hotel Management", "Tourism Studies", "Language Courses", "Hospitality Training"],
      locations: ["Gulmarg", "Pahalgam", "Sonamarg", "Ladakh", "Jammu"],
      steps: [
        "Get hospitality training",
        "Learn multiple languages",
        "Gain experience in hotels/resorts",
        "Start your own venture"
      ],
      pros: ["Growing Industry", "International Exposure", "Entrepreneurship Opportunities"],
      cons: ["Seasonal", "Physical Demanding", "Weather Dependent"],
      icon: "🏔️"
    },
    {
      id: 3,
      title: "Agriculture & Horticulture",
      stream: "agriculture",
      description: "Modernize traditional farming with technology and export opportunities",
      avgSalary: "₹20,000 - ₹1,00,000/month",
      growth: "High",
      demand: 78,
      timeToLand: "1-12 months",
      topOpportunities: ["Saffron Cultivation", "Apple Farming", "Organic Products", "Food Processing", "Agricultural Tech"],
      education: ["Agricultural Sciences", "Horticulture", "Food Technology", "Business Management"],
      locations: ["Pampore", "Shopian", "Baramulla", "Pulwama", "Jammu"],
      steps: [
        "Study modern farming techniques",
        "Start with small investments",
        "Focus on quality & organic methods",
        "Build distribution networks"
      ],
      pros: ["Traditional Expertise", "Export Potential", "Government Support"],
      cons: ["Weather Risks", "Market Fluctuations", "Initial Investment"],
      icon: "🌱"
    },
    {
      id: 4,
      title: "Information Technology",
      stream: "technology",
      description: "Build tech solutions and work remotely for global companies",
      avgSalary: "₹30,000 - ₹1,50,000/month",
      growth: "Very High",
      demand: 95,
      timeToLand: "3-8 months",
      topOpportunities: ["Software Development", "Web Design", "Digital Marketing", "Cyber Security", "Data Analysis"],
      education: ["Computer Science", "IT Courses", "Online Certifications", "Self-Learning"],
      locations: ["Remote Work", "Srinagar IT Park", "Jammu", "Online"],
      steps: [
        "Learn programming languages",
        "Build a portfolio of projects",
        "Gain certifications",
        "Apply for remote positions"
      ],
      pros: ["High Salaries", "Remote Work", "Global Opportunities", "Fast Growing"],
      cons: ["Continuous Learning", "High Competition", "Technology Changes"],
      icon: "💻"
    },
    {
      id: 5,
      title: "Healthcare Services",
      stream: "healthcare",
      description: "Serve the community through medical and healthcare services",
      avgSalary: "₹25,000 - ₹2,00,000/month",
      growth: "High",
      demand: 88,
      timeToLand: "4-7 years",
      topOpportunities: ["Doctor", "Nursing", "Pharmacy", "Physiotherapy", "Medical Technology"],
      education: ["MBBS", "Nursing", "Pharmacy", "Paramedical Courses", "Specializations"],
      locations: ["SKIMS", "GMC Jammu", "District Hospitals", "Private Clinics"],
      steps: [
        "Complete medical education",
        "Clear entrance exams",
        "Gain practical experience",
        "Consider specialization"
      ],
      pros: ["Social Service", "High Respect", "Good Income", "Job Security"],
      cons: ["Long Education", "High Competition", "Stressful Work"],
      icon: "⚕️"
    },
    {
      id: 6,
      title: "Handicrafts & Arts",
      stream: "arts",
      description: "Preserve and monetize traditional Kashmiri arts and crafts",
      avgSalary: "₹10,000 - ₹75,000/month",
      growth: "Medium",
      demand: 65,
      timeToLand: "1-3 months",
      topOpportunities: ["Carpet Weaving", "Pashmina", "Wood Carving", "Papier Mache", "Jewelry Design"],
      education: ["Traditional Training", "Design Courses", "Business Skills", "Marketing"],
      locations: ["Srinagar", "Traditional Clusters", "Export Markets", "Online Platforms"],
      steps: [
        "Learn traditional skills",
        "Understand market demands",
        "Create unique designs",
        "Build online presence"
      ],
      pros: ["Cultural Heritage", "Unique Skills", "Export Market", "Creative Work"],
      cons: ["Market Competition", "Skill Intensive", "Price Pressure"],
      icon: "🎨"
    }
  ];

  // Success stories data
  const successStories = [
    {
      name: "Arjun Sharma",
      career: "IAS Officer",
      location: "Srinagar",
      story: "From a small village in Kupwara to serving as Deputy Commissioner",
      timeline: "3 years of preparation"
    },
    {
      name: "Priya Devi",
      career: "Tech Entrepreneur",
      location: "Remote/Global",
      story: "Started a successful SaaS company serving international clients",
      timeline: "2 years from idea to success"
    },
    {
      name: "Mohammad Yusuf",
      career: "Saffron Exporter",
      location: "Pampore",
      story: "Transformed family saffron business into international brand",
      timeline: "5 years of growth"
    }
  ];

  const filteredPaths = selectedStream === "all" 
    ? careerPaths 
    : careerPaths.filter(path => path.stream === selectedStream);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-card via-background to-card">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              J&K Career Path {" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Visualizer
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore career opportunities tailored for Jammu & Kashmir, with local insights, 
              salary ranges, and step-by-step guidance for each path.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-muted-foreground">Career Paths</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">₹45K</div>
                <div className="text-sm text-muted-foreground">Avg Salary</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">12K+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">4.7</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <Tabs value={selectedStream} onValueChange={setSelectedStream} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-7">
              <TabsTrigger value="all">All Paths</TabsTrigger>
              <TabsTrigger value="government">Government</TabsTrigger>
              <TabsTrigger value="technology">Tech</TabsTrigger>
              <TabsTrigger value="tourism">Tourism</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="arts">Arts & Crafts</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Career Paths Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              Career Opportunities ({filteredPaths.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map((path) => (
              <Card key={path.id} className="card-shadow hover:scale-105 transition-smooth overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl">{path.icon}</div>
                    <Badge variant="outline" className="text-accent border-accent/30">
                      {path.growth} Growth
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{path.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {path.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Avg. Salary</div>
                      <div className="text-muted-foreground text-xs">{path.avgSalary}</div>
                    </div>
                    <div>
                      <div className="font-medium">Time to Land</div>
                      <div className="text-muted-foreground text-xs">{path.timeToLand}</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-sm mb-2">Market Demand</div>
                    <div className="flex items-center gap-2">
                      <Progress value={path.demand} className="flex-1" />
                      <span className="text-sm font-medium">{path.demand}%</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-sm mb-2">Top Opportunities</div>
                    <div className="flex flex-wrap gap-1">
                      {path.topOpportunities.slice(0, 3).map((opp, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {opp}
                        </Badge>
                      ))}
                      {path.topOpportunities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{path.topOpportunities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="flex-1">
                          View Roadmap
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <span className="text-2xl">{path.icon}</span>
                            {path.title} Career Path
                          </DialogTitle>
                          <DialogDescription>{path.description}</DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Overview Stats */}
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                              <DollarSign className="h-6 w-6 text-accent mx-auto mb-1" />
                              <div className="font-semibold text-sm">Salary Range</div>
                              <div className="text-xs text-muted-foreground">{path.avgSalary}</div>
                            </div>
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                              <Clock className="h-6 w-6 text-accent mx-auto mb-1" />
                              <div className="font-semibold text-sm">Time Frame</div>
                              <div className="text-xs text-muted-foreground">{path.timeToLand}</div>
                            </div>
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                              <TrendingUp className="h-6 w-6 text-accent mx-auto mb-1" />
                              <div className="font-semibold text-sm">Growth</div>
                              <div className="text-xs text-muted-foreground">{path.growth}</div>
                            </div>
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                              <Users className="h-6 w-6 text-accent mx-auto mb-1" />
                              <div className="font-semibold text-sm">Demand</div>
                              <div className="text-xs text-muted-foreground">{path.demand}%</div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Roadmap Steps */}
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <ArrowRight className="h-4 w-4" />
                                Step-by-Step Roadmap
                              </h4>
                              <div className="space-y-3">
                                {path.steps.map((step, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                                      {index + 1}
                                    </div>
                                    <div className="text-sm">{step}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Education & Locations */}
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <GraduationCap className="h-4 w-4" />
                                  Required Education
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                  {path.education.map((edu, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {edu}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  Key Locations
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                  {path.locations.map((location, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {location}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2">Top Opportunities</h4>
                                <div className="flex flex-wrap gap-1">
                                  {path.topOpportunities.map((opp, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {opp}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Pros & Cons */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-green-600">✅ Advantages</h4>
                              <ul className="space-y-1">
                                {path.pros.map((pro, index) => (
                                  <li key={index} className="text-sm flex items-center gap-2">
                                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-orange-600">⚠️ Challenges</h4>
                              <ul className="space-y-1">
                                {path.cons.map((con, index) => (
                                  <li key={index} className="text-sm flex items-center gap-2">
                                    <div className="w-1 h-1 bg-orange-500 rounded-full" />
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button size="sm" className="flex-1 bg-gradient-accent hover:opacity-90">
                      Start Journey
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-card/30">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Success Stories from J&K
            </h2>
            <p className="text-muted-foreground">
              Real people who found success in their chosen career paths
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>
                    {story.career} • {story.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">"{story.story}"</p>
                  <Badge variant="outline" className="text-xs">
                    {story.timeline}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPaths;