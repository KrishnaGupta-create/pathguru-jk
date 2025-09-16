import Header from "@/components/Header";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Users, Target } from "lucide-react";

const Assessment = () => {
  const assessmentFeatures = [
    { icon: Brain, title: "AI-Powered Analysis", desc: "Advanced algorithms analyze your responses" },
    { icon: Clock, title: "10-15 Minutes", desc: "Quick assessment, comprehensive results" },
    { icon: Users, title: "J&K Focused", desc: "Tailored for local opportunities and culture" },
    { icon: Target, title: "95% Accuracy", desc: "Proven career match predictions" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Assessment Header */}
      <section className="py-12 bg-gradient-hero border-b">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              AI Career Assessment
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold">
              Discover Your{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Perfect Career Path
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our AI-powered assessment analyzes your interests, personality, and aptitude to 
              recommend the best career paths available in Jammu & Kashmir.
            </p>
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              {assessmentFeatures.map((feature, index) => (
                <Card key={index} className="card-shadow hover:scale-105 transition-smooth">
                  <CardContent className="p-4 text-center">
                    <feature.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Quiz */}
      <section className="py-16">
        <div className="container px-4">
          <AssessmentQuiz />
        </div>
      </section>
    </div>
  );
};

export default Assessment;