import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, TrendingUp, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: "50,000+", label: "J&K Students Guided" },
    { icon: Target, value: "95%", label: "Career Match Accuracy" },
    { icon: TrendingUp, value: "200+", label: "Career Paths Mapped" },
    { icon: MapPin, value: "100+", label: "Local Colleges Listed" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students and career guidance in Kashmir"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent/20 text-accent border-accent/30 animate-fade-in-up">
                🚀 AI-Powered Career Guidance
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
                Your Path to Success Starts{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Here
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up">
                Empowering Jammu & Kashmir students with personalized career guidance, 
                AI-driven assessments, and local college insights. Discover your perfect career path today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 animate-pulse-glow"
                onClick={() => navigate("/assessment")}
              >
                Take AI Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-accent/30 hover:bg-accent/10">
                Explore Colleges
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 animate-scale-in">
              {stats.map((stat, index) => (
                <Card key={index} className="card-shadow hover:scale-105 transition-smooth">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-float">
            <Card className="card-shadow bg-card/50 backdrop-blur-sm border-accent/20">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-accent rounded-full flex items-center justify-center animate-pulse-glow">
                    <Target className="h-12 w-12 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Career Assessment</h3>
                    <p className="text-muted-foreground">
                      Advanced AI analyzes your interests, skills, and personality to recommend 
                      the perfect career path tailored for J&K opportunities.
                    </p>
                  </div>
                  <Button 
                    className="w-full bg-gradient-primary"
                    onClick={() => navigate("/assessment")}
                  >
                    Start Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;