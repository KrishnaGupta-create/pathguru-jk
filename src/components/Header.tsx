import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Menu, User, Bell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <div 
          className="flex items-center space-x-4 cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Brain className="h-8 w-8 text-accent animate-pulse-glow" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Path Guru
              </h1>
              <Badge variant="outline" className="text-xs px-2 py-0">
                J&K Students
              </Badge>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
            {t('dashboard')}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/colleges")}>
            {t('colleges')}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/career-paths")}>
            {t('careers')}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/ngos")}>
            {t('ngos')}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/resources")}>
            {t('resources')}
          </Button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <LanguageToggle />
          <Button variant="ghost" size="sm" onClick={() => navigate("/timeline")}>
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-accent hover:opacity-90"
            onClick={() => navigate("/assessment")}
          >
            {t('getStarted')}
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-6">
              <Button 
                variant="ghost" 
                className="justify-start"
                onClick={() => navigate("/assessment")}
              >
                Assessment
              </Button>
              <Button variant="ghost" className="justify-start">Colleges</Button>
              <Button variant="ghost" className="justify-start">Careers</Button>
              <Button variant="ghost" className="justify-start">Resources</Button>
              <Button variant="ghost" className="justify-start">Timeline</Button>
              <Button 
                className="bg-gradient-accent hover:opacity-90 mt-4"
                onClick={() => navigate("/assessment")}
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;