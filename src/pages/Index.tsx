import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Award, 
  MapPin, 
  Clock,
  ArrowRight,
  Star,
  Quote,
  ChevronRight
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const successStories = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      location: "Jammu",
      story: "Path Guru's AI assessment helped me discover my passion for coding. Now I'm working at TCS Jammu and loving every moment!",
      rating: 5
    },
    {
      name: "Arjun Singh", 
      role: "Agricultural Scientist",
      location: "Srinagar",
      story: "The career mapping showed me how agriculture and technology could merge. I'm now developing smart farming solutions in Kashmir.",
      rating: 5
    },
    {
      name: "Fatima Khan",
      role: "Government Officer",
      location: "Leh",
      story: "The timeline tracker helped me prepare for JKPSC exams systematically. Secured my dream government job in Ladakh!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      
      {/* Success Stories */}
      <section className="py-24 bg-card/30">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="text-accent border-accent/30 mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Real Students,{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Real Success
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from J&K students who found their perfect career paths using Path Guru
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="card-shadow hover:scale-105 transition-smooth">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 text-accent/50" />
                  </div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>
                    {story.role} • {story.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{story.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-card via-background to-card">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Discover Your{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Career Path?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of J&K students who've found their perfect career match. 
              Take our AI-powered assessment and unlock your potential today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 animate-pulse-glow"
                onClick={() => navigate("/assessment")}
              >
                Start AI Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-accent/30 hover:bg-accent/10">
                Browse Colleges
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">50,000+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">J&K Colleges</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-card">
        <div className="container px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Path Guru. Empowering J&K students for a brighter future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
