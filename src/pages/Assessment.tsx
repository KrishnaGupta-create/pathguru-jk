import Header from "@/components/Header";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, MapPin, TrendingUp, BookOpen, Calculator, Palette, Wrench } from "lucide-react";

const Assessment = () => {
  const assessmentFeatures = [
    { icon: GraduationCap, title: "Stream Selection", desc: "Choose the perfect path for Class 11 & 12" },
    { icon: Clock, title: "5-7 Minutes", desc: "Quick quiz, personalized recommendations" },
    { icon: MapPin, title: "J&K Focused", desc: "Local colleges, opportunities & career paths" },
    { icon: TrendingUp, title: "Future-Ready", desc: "Aligned with market demands & growth sectors" }
  ];

  const streamHighlights = [
    { icon: BookOpen, title: "Science", desc: "PCM/PCB • Engineering • Medical • Research", color: "text-blue-400" },
    { icon: Calculator, title: "Commerce", desc: "Accounts • Economics • Banking • Business", color: "text-green-400" },
    { icon: Palette, title: "Arts", desc: "Humanities • Literature • Social Studies • Design", color: "text-purple-400" },
    { icon: Wrench, title: "Vocational", desc: "Technical Skills • Trades • Entrepreneurship", color: "text-orange-400" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Stream Selection Header */}
      <section className="py-16 bg-gradient-hero border-b">
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge className="bg-accent/20 text-accent border-accent/30 animate-pulse-glow">
              AI-Powered Stream Selection
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Find Your{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Perfect Stream
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Take our interactive quiz and let AI guide you to the right stream for Class 11. 
              Discover which path - Science, Commerce, Arts, or Vocational - matches your unique talents and interests.
            </p>
            
            {/* Stream Options Preview */}
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {streamHighlights.map((stream, index) => (
                <Card key={index} className="card-shadow hover:scale-105 transition-smooth animate-float" 
                      style={{animationDelay: `${index * 0.2}s`}}>
                  <CardContent className="p-6 text-center">
                    <stream.icon className={`h-10 w-10 mx-auto mb-4 ${stream.color}`} />
                    <h3 className="font-bold text-lg mb-2">{stream.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stream.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Features */}
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

      {/* Stream Selection Quiz */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Stream?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answer a few fun questions about your interests, strengths, and goals. 
              Our AI will analyze your responses and recommend the best stream for your future success.
            </p>
          </div>
          <AssessmentQuiz />
        </div>
      </section>
    </div>
  );
};

export default Assessment;