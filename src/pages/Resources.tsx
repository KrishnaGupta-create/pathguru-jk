import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { 
  BookOpen, 
  Download, 
  Search,
  Filter,
  Star,
  Users,
  Clock,
  FileText,
  Video,
  Headphones,
  Image,
  Code,
  Languages,
  Briefcase
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Resources = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  // Mock resources data
  const resources = [
    {
      id: 1,
      title: "Complete Guide to JKPSC Preparation",
      category: "guide",
      type: "pdf",
      language: "english",
      description: "Comprehensive preparation guide for J&K Public Service Commission exams with previous years papers and analysis.",
      author: "Career Experts Team",
      downloads: 45670,
      rating: 4.8,
      size: "12.5 MB",
      pages: 450,
      lastUpdated: "2024-03-01",
      tags: ["JKPSC", "Government Jobs", "Exam Prep", "Civil Services"],
      difficulty: "intermediate",
      estimatedTime: "30 hours"
    },
    {
      id: 2,
      title: "Kashmir University Entrance Exam Papers",
      category: "exam",
      type: "pdf",
      language: "english",
      description: "Last 10 years question papers with detailed solutions for all undergraduate courses.",
      author: "KU Academic Team",
      downloads: 32450,
      rating: 4.6,
      size: "8.2 MB",
      pages: 200,
      lastUpdated: "2024-02-15",
      tags: ["Kashmir University", "Entrance Exam", "UG Courses", "Question Papers"],
      difficulty: "beginner",
      estimatedTime: "20 hours"
    },
    {
      id: 3,
      title: "Spoken English for Rural Students",
      category: "skill",
      type: "video",
      language: "english",
      description: "Basic to advanced English speaking course designed specifically for rural J&K students.",
      author: "Language Academy",
      downloads: 28930,
      rating: 4.7,
      size: "2.1 GB",
      duration: "15 hours",
      lastUpdated: "2024-03-10",
      tags: ["English Speaking", "Communication", "Soft Skills", "Interview Prep"],
      difficulty: "beginner",
      estimatedTime: "15 hours"
    },
    {
      id: 4,
      title: "Saffron Farming: Modern Techniques",
      category: "vocational",
      type: "pdf",
      language: "urdu",
      description: "زعفران کی کاشت کی جدید تکنیکیں - Modern saffron cultivation techniques for better yield and quality.",
      author: "Agriculture Dept. J&K",
      downloads: 15670,
      rating: 4.5,
      size: "6.8 MB",
      pages: 120,
      lastUpdated: "2024-01-20",
      tags: ["Saffron", "Agriculture", "Farming", "Horticulture"],
      difficulty: "intermediate",
      estimatedTime: "8 hours"
    },
    {
      id: 5,
      title: "Digital Marketing Masterclass",
      category: "skill",
      type: "video",
      language: "hindi",
      description: "डिजिटल मार्केटिंग का पूरा कोर्स - Complete course on digital marketing for local businesses.",
      author: "Tech Academy J&K",
      downloads: 22340,
      rating: 4.6,
      size: "1.8 GB",
      duration: "12 hours",
      lastUpdated: "2024-02-28",
      tags: ["Digital Marketing", "Social Media", "Business", "Entrepreneurship"],
      difficulty: "intermediate",
      estimatedTime: "12 hours"
    },
    {
      id: 6,
      title: "Handicrafts Business Guide",
      category: "business",
      type: "pdf",
      language: "english",
      description: "How to start and scale a handicrafts business in J&K with market insights and export opportunities.",
      author: "Handicrafts Board J&K",
      downloads: 18900,
      rating: 4.4,
      size: "4.5 MB",
      pages: 85,
      lastUpdated: "2024-03-05",
      tags: ["Handicrafts", "Business", "Export", "Traditional Arts"],
      difficulty: "beginner",
      estimatedTime: "6 hours"
    },
    {
      id: 7,
      title: "Basic Computer Skills",
      category: "skill",
      type: "video",
      language: "kashmiri",
      description: "کمپیوٹر کی بنیادی معلومات - Basic computer skills course in Kashmiri language.",
      author: "Digital Literacy Mission",
      downloads: 34560,
      rating: 4.8,
      size: "900 MB",
      duration: "8 hours",
      lastUpdated: "2024-02-20",
      tags: ["Computer Skills", "Digital Literacy", "Basic Training"],
      difficulty: "beginner",
      estimatedTime: "8 hours"
    },
    {
      id: 8,
      title: "Tourism Industry Opportunities",
      category: "career",
      type: "pdf",
      language: "english",
      description: "Career opportunities in J&K tourism sector with skill requirements and salary insights.",
      author: "Tourism Dept. J&K",
      downloads: 25670,
      rating: 4.5,
      size: "7.2 MB",
      pages: 140,
      lastUpdated: "2024-01-15",
      tags: ["Tourism", "Career Guide", "Hospitality", "Adventure Sports"],
      difficulty: "beginner",
      estimatedTime: "10 hours"
    }
  ];

  // Stats data
  const stats = [
    { icon: BookOpen, label: "Total Resources", value: "2,450+" },
    { icon: Download, label: "Total Downloads", value: "1.2M+" },
    { icon: Users, label: "Active Users", value: "45K+" },
    { icon: Star, label: "Avg Rating", value: "4.6" }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "guide", label: "Study Guides" },
    { value: "exam", label: "Exam Papers" },
    { value: "skill", label: "Skill Development" },
    { value: "vocational", label: "Vocational Training" },
    { value: "business", label: "Business & Entrepreneurship" },
    { value: "career", label: "Career Guidance" }
  ];

  const languages = [
    { value: "all", label: "All Languages" },
    { value: "english", label: "English" },
    { value: "urdu", label: "Urdu" },
    { value: "hindi", label: "Hindi" },
    { value: "kashmiri", label: "Kashmiri" }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesLanguage = selectedLanguage === "all" || resource.language === selectedLanguage;
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return FileText;
      case 'video': return Video;
      case 'audio': return Headphones;
      case 'image': return Image;
      default: return FileText;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-500';
      case 'intermediate': return 'text-yellow-500';
      case 'advanced': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  const handleDownload = (resourceTitle: string) => {
    // Simulate download progress
    toast({
      title: "Download Started!",
      description: `"${resourceTitle}" is being downloaded to your device.`,
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
              Learning {" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {t('resources')} Library
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access free educational materials, guides, and courses designed specifically 
              for students and professionals in Jammu & Kashmir.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources, guides, courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map(language => (
                    <SelectItem key={language.value} value={language.value}>
                      {language.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              Available Resources ({filteredResources.length})
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <Card key={resource.id} className="card-shadow hover:scale-105 transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2 mb-2">{resource.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {resource.description}
                        </CardDescription>
                      </div>
                      <TypeIcon className="h-6 w-6 text-accent flex-shrink-0 ml-2" />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        <span className="font-medium">{resource.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Download className="h-3 w-3" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <Badge variant="outline" className={getDifficultyColor(resource.difficulty)}>
                        {resource.difficulty}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Size/Duration</div>
                        <div className="text-muted-foreground text-xs">
                          {resource.size || resource.duration}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">Study Time</div>
                        <div className="text-muted-foreground text-xs">{resource.estimatedTime}</div>
                      </div>
                      <div>
                        <div className="font-medium">Language</div>
                        <div className="text-muted-foreground text-xs capitalize">{resource.language}</div>
                      </div>
                      <div>
                        <div className="font-medium">Updated</div>
                        <div className="text-muted-foreground text-xs">
                          {new Date(resource.lastUpdated).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="font-medium text-sm mb-2">Topics Covered</div>
                      <div className="flex flex-wrap gap-1">
                        {resource.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {resource.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{resource.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-gradient-accent hover:opacity-90"
                        onClick={() => handleDownload(resource.title)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Free
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Preview
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No resources found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-card/30">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Featured Collections
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-accent" />
                  Government Job Prep
                </CardTitle>
                <CardDescription>
                  Complete preparation materials for JKPSC, JKSSB, and other government exams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-4">
                  45 Resources • 2.3M Downloads
                </div>
                <Button variant="outline" className="w-full">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-accent" />
                  Digital Skills
                </CardTitle>
                <CardDescription>
                  Learn coding, digital marketing, and other tech skills for modern careers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-4">
                  38 Resources • 1.8M Downloads
                </div>
                <Button variant="outline" className="w-full">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-accent" />
                  Local Languages
                </CardTitle>
                <CardDescription>
                  Resources available in Kashmiri, Urdu, and Hindi for better understanding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-4">
                  52 Resources • 1.1M Downloads
                </div>
                <Button variant="outline" className="w-full">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;