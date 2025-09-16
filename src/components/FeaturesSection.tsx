import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Map, 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  Trophy,
  Users,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import aiAssessmentIcon from "@/assets/ai-assessment-icon.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      image: aiAssessmentIcon,
      title: "AI Career Assessment",
      description: "Advanced AI-powered quiz that analyzes your personality, interests, and aptitude to predict your ideal career path.",
      badge: "Featured",
      badgeVariant: "default" as const,
      highlights: ["Personality Analysis", "Skill Mapping", "Career Predictions", "Local Job Market Insights"]
    },
    {
      icon: Map,
      title: "Career Path Visualizer", 
      description: "Interactive flowcharts showing degree options, industries, higher studies, and government job opportunities in J&K.",
      badge: "Popular",
      badgeVariant: "secondary" as const,
      highlights: ["Visual Career Maps", "Industry Insights", "Government Jobs", "Higher Education Routes"]
    },
    {
      icon: GraduationCap,
      title: "J&K College Directory",
      description: "Comprehensive database of government colleges in Jammu & Kashmir with eligibility criteria, cut-offs, and course details.",
      badge: "Local",
      badgeVariant: "outline" as const,
      highlights: ["100+ Colleges", "Real-time Updates", "Eligibility Checker", "Location Mapping"]
    },
    {
      icon: Calendar,
      title: "Smart Timeline Tracker",
      description: "Never miss important dates for admissions, exams, counseling sessions, and scholarship applications.",
      highlights: ["Admission Deadlines", "Exam Schedules", "Scholarship Alerts", "Counseling Dates"]
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Curated study materials, e-books, and skill-building modules available offline for low-internet areas.",
      highlights: ["Offline Access", "Study Materials", "Skill Modules", "Career Guides"]
    },
    {
      icon: Trophy,
      title: "Gamified Progress",
      description: "Earn badges and track milestones as you complete assessments and achieve your educational goals.",
      highlights: ["Achievement Badges", "Progress Tracking", "Milestone Rewards", "Leaderboards"]
    },
    {
      icon: Users,
      title: "Success Stories",
      description: "Learn from fellow J&K students who successfully navigated their career paths using our platform.",
      highlights: ["Local Success Stories", "Career Journeys", "Mentorship", "Community Support"]
    },
    {
      icon: MessageSquare,
      title: "Feedback System",
      description: "Rate recommendations and provide feedback to help us continuously improve our AI-powered suggestions.",
      highlights: ["Smart Feedback", "AI Refinement", "Community Input", "Continuous Learning"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="text-accent border-accent/30">
            Complete Career Ecosystem
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything You Need for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools and resources designed specifically for Jammu & Kashmir students 
            to make informed career decisions and achieve their dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-smooth card-shadow hover:glow-accent border-border/50 hover:border-accent/30"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {feature.image ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  )}
                  {feature.badge && (
                    <Badge variant={feature.badgeVariant} className="text-xs">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-accent transition-smooth">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-accent/10 group-hover:text-accent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;