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
  Lightbulb,
  Users
} from "lucide-react";

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  type: "multiple-choice" | "situational";
}

interface AssessmentResult {
  careerField: string;
  matchPercentage: number;
  description: string;
  skills: string[];
  recommendations: string[];
}

const AssessmentQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      category: "Interest Assessment",
      question: "Which activity do you find most engaging?",
      options: [
        "Analyzing data and finding patterns",
        "Creating art or designing visual content", 
        "Teaching or helping others learn",
        "Building or fixing mechanical things"
      ],
      type: "multiple-choice"
    },
    {
      id: 2,
      category: "Personality Traits",
      question: "In a group project, you typically:",
      options: [
        "Take the leadership role and organize tasks",
        "Focus on research and provide detailed analysis",
        "Ensure everyone's ideas are heard and valued",
        "Handle the technical implementation"
      ],
      type: "situational"
    },
    {
      id: 3,
      category: "Work Environment",
      question: "Your ideal work environment would be:",
      options: [
        "A modern office with the latest technology",
        "A creative studio with flexible hours",
        "A classroom or community center",
        "Outdoors or in field locations"
      ],
      type: "multiple-choice"
    },
    {
      id: 4,
      category: "Problem Solving",
      question: "When facing a complex problem, you prefer to:",
      options: [
        "Break it down into logical steps",
        "Brainstorm creative solutions",
        "Discuss it with others for different perspectives",
        "Find practical, hands-on solutions"
      ],
      type: "situational"
    },
    {
      id: 5,
      category: "Local Opportunities",
      question: "Which J&K sector interests you most?",
      options: [
        "Information Technology and Digital Services",
        "Tourism and Hospitality",
        "Agriculture and Food Processing",
        "Government and Public Administration"
      ],
      type: "multiple-choice"
    }
  ];

  const mockResults: AssessmentResult = {
    careerField: "Information Technology & Data Science",
    matchPercentage: 92,
    description: "Based on your responses, you show strong analytical thinking, problem-solving abilities, and interest in technology. The IT sector in J&K is rapidly growing with opportunities in software development, data analysis, and digital services.",
    skills: ["Analytical Thinking", "Problem Solving", "Technology Aptitude", "Logical Reasoning"],
    recommendations: [
      "Pursue B.Tech in Computer Science from NIT Srinagar",
      "Explore data science and machine learning courses",
      "Consider internships at IT companies in Jammu",
      "Join coding bootcamps and online programming communities"
    ]
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
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="card-shadow animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto flex items-center justify-center animate-pulse-glow mb-4">
              <Target className="h-8 w-8 text-accent-foreground" />
            </div>
            <CardTitle className="text-2xl">Your Career Assessment Results</CardTitle>
            <CardDescription>
              Based on your responses, here's your personalized career guidance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Career Match */}
            <div className="text-center">
              <Badge className="bg-accent/20 text-accent text-lg px-4 py-2 mb-4">
                {mockResults.matchPercentage}% Match
              </Badge>
              <h3 className="text-xl font-bold mb-2">{mockResults.careerField}</h3>
              <p className="text-muted-foreground">{mockResults.description}</p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Lightbulb className="h-4 w-4 text-accent mr-2" />
                Your Key Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {mockResults.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-accent/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Sparkles className="h-4 w-4 text-accent mr-2" />
                Recommended Next Steps
              </h4>
              <ul className="space-y-2">
                {mockResults.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                }}
                variant="outline"
                className="flex-1"
              >
                Retake Assessment
              </Button>
              <Button className="flex-1 bg-gradient-accent">
                Explore Colleges
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card className="card-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-accent" />
              <Badge variant="outline" className="text-xs">
                {currentQ.category}
              </Badge>
            </div>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="card-shadow animate-scale-in">
        <CardHeader>
          <CardTitle className="text-lg">{currentQ.question}</CardTitle>
          <CardDescription>
            Select the option that best describes you or your preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQ.options.map((option, index) => (
            <Button
              key={index}
              variant={answers[currentQuestion] === index ? "default" : "outline"}
              className={`w-full text-left justify-start p-4 h-auto ${
                answers[currentQuestion] === index 
                  ? "bg-gradient-accent" 
                  : "hover:border-accent/50"
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  answers[currentQuestion] === index
                    ? "bg-accent-foreground border-accent-foreground"
                    : "border-muted-foreground"
                }`} />
                {option}
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={answers[currentQuestion] === undefined}
          className="bg-gradient-accent"
        >
          {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AssessmentQuiz;