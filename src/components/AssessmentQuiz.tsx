import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Target,
  BookOpen,
  Calculator,
  Palette,
  Wrench,
  Download,
  ExternalLink,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Zap,
  GraduationCap
} from "lucide-react";

interface Question {
  id: number;
  category: string;
  question: string;
  options: { text: string; icon: any; weight: { science: number; commerce: number; arts: number; vocational: number } }[];
  type: "interest" | "personality" | "aptitude" | "goals";
}

interface StreamResult {
  stream: string;
  icon: any;
  matchPercentage: number;
  description: string;
  subjects: string[];
  careerPaths: string[];
  topColleges: string[];
  futureScope: string;
  color: string;
}

const AssessmentQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      category: "Interests & Passions",
      question: "Which subject excites you the most?",
      options: [
        { text: "Physics & Mathematics", icon: BookOpen, weight: { science: 3, commerce: 1, arts: 0, vocational: 1 } },
        { text: "Business & Economics", icon: TrendingUp, weight: { science: 0, commerce: 3, arts: 1, vocational: 2 } },
        { text: "Literature & History", icon: Palette, weight: { science: 0, commerce: 1, arts: 3, vocational: 1 } },
        { text: "Practical & Technical Work", icon: Wrench, weight: { science: 1, commerce: 1, arts: 0, vocational: 3 } }
      ],
      type: "interest"
    },
    {
      id: 2,
      category: "Problem Solving Style",
      question: "How do you prefer to solve problems?",
      options: [
        { text: "Using formulas and logical reasoning", icon: Brain, weight: { science: 3, commerce: 2, arts: 0, vocational: 1 } },
        { text: "Analyzing data and market trends", icon: Calculator, weight: { science: 1, commerce: 3, arts: 1, vocational: 2 } },
        { text: "Creative thinking and discussions", icon: Lightbulb, weight: { science: 0, commerce: 1, arts: 3, vocational: 1 } },
        { text: "Hands-on experimentation", icon: Zap, weight: { science: 2, commerce: 1, arts: 0, vocational: 3 } }
      ],
      type: "aptitude"
    },
    {
      id: 3,
      category: "Future Goals",
      question: "What's your dream career path?",
      options: [
        { text: "Doctor, Engineer, or Researcher", icon: Award, weight: { science: 3, commerce: 0, arts: 0, vocational: 1 } },
        { text: "Business Owner or Financial Expert", icon: TrendingUp, weight: { science: 0, commerce: 3, arts: 1, vocational: 2 } },
        { text: "Civil Servant, Lawyer, or Teacher", icon: Users, weight: { science: 1, commerce: 2, arts: 3, vocational: 1 } },
        { text: "Skilled Professional or Entrepreneur", icon: Wrench, weight: { science: 1, commerce: 2, arts: 0, vocational: 3 } }
      ],
      type: "goals"
    },
    {
      id: 4,
      category: "Learning Preference",
      question: "Which learning style suits you best?",
      options: [
        { text: "Lab experiments and calculations", icon: BookOpen, weight: { science: 3, commerce: 1, arts: 0, vocational: 2 } },
        { text: "Case studies and market analysis", icon: Calculator, weight: { science: 0, commerce: 3, arts: 1, vocational: 1 } },
        { text: "Reading, writing, and debates", icon: Palette, weight: { science: 0, commerce: 1, arts: 3, vocational: 0 } },
        { text: "Practical projects and workshops", icon: Wrench, weight: { science: 2, commerce: 1, arts: 0, vocational: 3 } }
      ],
      type: "personality"
    },
    {
      id: 5,
      category: "Local Opportunities in J&K",
      question: "Which J&K sector interests you most?",
      options: [
        { text: "Healthcare & Technology", icon: BookOpen, weight: { science: 3, commerce: 1, arts: 0, vocational: 1 } },
        { text: "Tourism & Hospitality Business", icon: TrendingUp, weight: { science: 0, commerce: 3, arts: 2, vocational: 2 } },
        { text: "Government & Social Services", icon: Users, weight: { science: 1, commerce: 2, arts: 3, vocational: 1 } },
        { text: "Agriculture & Handicrafts", icon: Wrench, weight: { science: 1, commerce: 2, arts: 1, vocational: 3 } }
      ],
      type: "goals"
    }
  ];

  const calculateResults = (): StreamResult[] => {
    const scores = { science: 0, commerce: 0, arts: 0, vocational: 0 };
    
    Object.entries(answers).forEach(([questionIndex, optionIndex]) => {
      const question = questions[parseInt(questionIndex)];
      if (question && question.options[optionIndex]) {
        const weights = question.options[optionIndex].weight;
        scores.science += weights.science;
        scores.commerce += weights.commerce;
        scores.arts += weights.arts;
        scores.vocational += weights.vocational;
      }
    });

    const maxScore = Math.max(...Object.values(scores));
    const total = scores.science + scores.commerce + scores.arts + scores.vocational;

    const results: StreamResult[] = [
      {
        stream: "Science",
        icon: BookOpen,
        matchPercentage: Math.round((scores.science / maxScore) * 100),
        description: "Perfect for analytical minds who love problem-solving, experiments, and logical thinking. Opens doors to engineering, medical, and research careers.",
        subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English"],
        careerPaths: ["Engineering", "Medicine", "Research", "Data Science", "Biotechnology"],
        topColleges: ["NIT Srinagar", "GMC Srinagar", "SKUAST Kashmir", "Government College of Engineering"],
        futureScope: "High demand in IT, healthcare, and emerging technologies in J&K",
        color: "text-blue-400"
      },
      {
        stream: "Commerce",
        icon: Calculator,
        matchPercentage: Math.round((scores.commerce / maxScore) * 100),
        description: "Ideal for those interested in business, finance, and economics. Great foundation for entrepreneurship and corporate careers.",
        subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
        careerPaths: ["CA/CS", "MBA", "Banking", "Business Management", "Digital Marketing"],
        topColleges: ["Kashmir University", "Jammu University", "GDC Srinagar", "IMRT Jammu"],
        futureScope: "Growing opportunities in fintech, e-commerce, and tourism business",
        color: "text-green-400"
      },
      {
        stream: "Arts/Humanities",
        icon: Palette,
        matchPercentage: Math.round((scores.arts / maxScore) * 100),
        description: "Perfect for creative and socially conscious students. Leads to diverse careers in government, media, law, and social services.",
        subjects: ["History", "Political Science", "Geography", "English", "Psychology"],
        careerPaths: ["Civil Services", "Law", "Journalism", "Teaching", "Social Work"],
        topColleges: ["Kashmir University", "Jammu University", "Women's College Srinagar", "GGM Science College"],
        futureScope: "Strong demand in administration, education, and cultural preservation",
        color: "text-purple-400"
      },
      {
        stream: "Vocational",
        icon: Wrench,
        matchPercentage: Math.round((scores.vocational / maxScore) * 100),
        description: "Excellent for hands-on learners who want practical skills and direct career entry. Focus on industry-relevant technical expertise.",
        subjects: ["Based on chosen trade", "English", "Mathematics", "Science Basics"],
        careerPaths: ["Skilled Trades", "Tourism Guide", "Handicrafts", "Agriculture Tech", "Digital Skills"],
        topColleges: ["Polytechnic Colleges", "ITIs in J&K", "Skill Development Centers", "JKEDI Programs"],
        futureScope: "Rising demand in skilled trades, tourism, and traditional crafts revival",
        color: "text-orange-400"
      }
    ];

    return results.sort((a, b) => b.matchPercentage - a.matchPercentage);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsAnalyzing(true);
      // Simulate AI analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 3000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  // AI Analysis Loading Screen
  if (isAnalyzing) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="card-shadow animate-scale-in">
          <CardContent className="p-12 text-center space-y-8">
            <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto flex items-center justify-center animate-pulse-glow">
              <Brain className="h-10 w-10 text-accent-foreground animate-pulse" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">AI is analyzing your responses...</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground animate-fade-in-up">🧠 Processing your interests and aptitude</p>
                <p className="text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.5s'}}>📊 Matching with J&K career opportunities</p>
                <p className="text-muted-foreground animate-fade-in-up" style={{animationDelay: '1s'}}>🎯 Generating personalized recommendations</p>
              </div>
            </div>
            <Progress value={85} className="h-3 animate-pulse" />
            <p className="text-sm text-accent">This will just take a moment...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Results Display
  if (showResults) {
    const results = calculateResults();
    const topMatch = results[0];
    const alternatives = results.slice(1, 3);

    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Result */}
        <Card className="card-shadow animate-scale-in glow-accent">
          <CardHeader className="text-center pb-4">
            <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 bg-gradient-accent animate-pulse-glow`}>
              <topMatch.icon className="h-10 w-10 text-accent-foreground" />
            </div>
            <Badge className="bg-accent/20 text-accent text-lg px-6 py-2 mb-4">
              {topMatch.matchPercentage}% Perfect Match!
            </Badge>
            <CardTitle className="text-3xl mb-2">{topMatch.stream} Stream</CardTitle>
            <CardDescription className="text-lg">
              {topMatch.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Subjects */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center text-lg">
                  <BookOpen className="h-5 w-5 text-accent mr-2" />
                  Core Subjects
                </h4>
                <div className="space-y-2">
                  {topMatch.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center text-lg">
                  <Target className="h-5 w-5 text-accent mr-2" />
                  Career Opportunities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {topMatch.careerPaths.map((career, index) => (
                    <Badge key={index} variant="outline" className="border-accent/30">
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Colleges */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center text-lg">
                <Award className="h-5 w-5 text-accent mr-2" />
                Recommended Colleges in J&K
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {topMatch.topColleges.map((college, index) => (
                  <div key={index} className="flex items-center p-3 bg-card/50 rounded-lg border border-accent/20">
                    <GraduationCap className="h-5 w-5 text-accent mr-3" />
                    <span className="font-medium">{college}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Scope */}
            <div className="bg-gradient-hero p-6 rounded-lg border border-accent/20">
              <h4 className="font-semibold mb-2 flex items-center">
                <TrendingUp className="h-5 w-5 text-accent mr-2" />
                Future Scope in J&K
              </h4>
              <p className="text-muted-foreground">{topMatch.futureScope}</p>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Streams */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-center">Alternative Options for You</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {alternatives.map((stream, index) => (
              <Card key={index} className="card-shadow hover:scale-105 transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <stream.icon className={`h-6 w-6 ${stream.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{stream.stream}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {stream.matchPercentage}% Match
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{stream.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium">Top Careers:</p>
                    <div className="flex flex-wrap gap-1">
                      {stream.careerPaths.slice(0, 3).map((career, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="card-shadow">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Ready to Take the Next Step?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Now that you know your perfect stream, explore colleges, connect with counselors, 
                and start building your future in Jammu & Kashmir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-accent flex-1 sm:flex-none px-8"
                  onClick={() => window.open('/colleges', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Explore Colleges
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 sm:flex-none px-8"
                  onClick={() => {
                    // Simulate PDF download
                    const link = document.createElement('a');
                    link.href = '#';
                    link.download = `${topMatch.stream}_Stream_Report.pdf`;
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                  className="flex-1 sm:flex-none px-8"
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card className="card-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Brain className="h-6 w-6 text-accent animate-pulse" />
              <Badge variant="outline" className="text-sm px-3 py-1">
                {currentQ.category}
              </Badge>
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Getting started</span>
            <span>Almost done!</span>
          </div>
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="card-shadow animate-scale-in">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl leading-relaxed">{currentQ.question}</CardTitle>
          <CardDescription className="text-base">
            Choose the option that best describes your interests and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQ.options.map((option, index) => (
            <Button
              key={index}
              variant={answers[currentQuestion] === index ? "default" : "outline"}
              className={`w-full text-left justify-start p-6 h-auto group transition-all duration-300 ${
                answers[currentQuestion] === index 
                  ? "bg-gradient-accent scale-105 shadow-lg" 
                  : "hover:border-accent/50 hover:bg-accent/5 hover:scale-102"
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              <div className="flex items-center w-full">
                <option.icon className={`h-6 w-6 mr-4 ${
                  answers[currentQuestion] === index 
                    ? "text-accent-foreground" 
                    : "text-accent group-hover:text-accent"
                }`} />
                <div className="flex-1">
                  <span className={`font-medium ${
                    answers[currentQuestion] === index 
                      ? "text-accent-foreground" 
                      : "text-foreground"
                  }`}>
                    {option.text}
                  </span>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 ${
                  answers[currentQuestion] === index
                    ? "bg-accent-foreground border-accent-foreground"
                    : "border-muted-foreground group-hover:border-accent"
                }`} />
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <div 
              key={index} 
              className={`w-3 h-3 rounded-full transition-all ${
                index <= currentQuestion ? "bg-accent" : "bg-muted"
              }`} 
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={answers[currentQuestion] === undefined}
          className="bg-gradient-accent px-6"
        >
          {currentQuestion === questions.length - 1 ? (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Get Results
            </>
          ) : (
            <>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AssessmentQuiz;