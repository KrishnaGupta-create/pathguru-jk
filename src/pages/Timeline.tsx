import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Calendar, 
  Clock, 
  Bell, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Filter,
  Download,
  Star,
  Users,
  GraduationCap,
  FileText
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Timeline = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock timeline data
  const timelineEvents = [
    {
      id: 1,
      title: "Kashmir University Admission Forms",
      category: "admission",
      institution: "University of Kashmir",
      date: "2024-03-20",
      deadline: "2024-04-15",
      status: "active",
      priority: "high",
      description: "Online application forms available for UG & PG courses",
      eligibility: "12th Pass / Graduation",
      fee: "₹500",
      daysLeft: 12,
      applicants: 25430,
      maxSeats: 15000,
      requirements: ["12th Marksheet", "Domicile Certificate", "Category Certificate"],
      importantDates: {
        formStart: "2024-03-20",
        formEnd: "2024-04-15",
        examDate: "2024-05-10",
        resultDate: "2024-06-15"
      }
    },
    {
      id: 2,
      title: "JKPSC Combined Competitive Exam",
      category: "exam",
      institution: "J&K Public Service Commission",
      date: "2024-03-25",
      deadline: "2024-04-20",
      status: "active",
      priority: "high",
      description: "Applications for Administrative Services recruitment",
      eligibility: "Graduation in any discipline",
      fee: "₹800",
      daysLeft: 17,
      applicants: 45678,
      maxSeats: 250,
      requirements: ["Graduation Certificate", "Domicile", "Character Certificate"],
      importantDates: {
        formStart: "2024-03-25",
        formEnd: "2024-04-20",
        examDate: "2024-06-15",
        resultDate: "2024-08-30"
      }
    },
    {
      id: 3,
      title: "J&K Merit Scholarship Applications",
      category: "scholarship",
      institution: "J&K Government",
      date: "2024-04-01",
      deadline: "2024-04-30",
      status: "upcoming",
      priority: "medium",
      description: "Merit-based scholarships for undergraduate students",
      eligibility: "85%+ in 12th, Family Income < ₹2.5L",
      fee: "Free",
      daysLeft: 27,
      applicants: 12340,
      maxSeats: 5000,
      requirements: ["12th Marksheet", "Income Certificate", "Bank Details"],
      importantDates: {
        formStart: "2024-04-01",
        formEnd: "2024-04-30",
        verification: "2024-05-15",
        disbursal: "2024-07-01"
      }
    },
    {
      id: 4,
      title: "NEET Counselling J&K State Quota",
      category: "counseling",
      institution: "Directorate of Health Services",
      date: "2024-04-10",
      deadline: "2024-04-25",
      status: "upcoming",
      priority: "high",
      description: "Medical college admission counselling for state quota",
      eligibility: "NEET Qualified + J&K Domicile",
      fee: "₹2000",
      daysLeft: 22,
      applicants: 8960,
      maxSeats: 400,
      requirements: ["NEET Scorecard", "Domicile", "Medical Fitness"],
      importantDates: {
        registration: "2024-04-10",
        choiceFilling: "2024-04-15",
        counselling: "2024-04-20",
        admission: "2024-04-25"
      }
    },
    {
      id: 5,
      title: "JKSSB Class-IV Recruitment",
      category: "recruitment",
      institution: "J&K Services Selection Board",
      date: "2024-03-15",
      deadline: "2024-04-10",
      status: "closing",
      priority: "medium",
      description: "Multi-tasking staff recruitment across departments",
      eligibility: "10+2 Pass",
      fee: "₹350",
      daysLeft: 7,
      applicants: 89450,
      maxSeats: 2500,
      requirements: ["12th Certificate", "Domicile", "Physical Standards"],
      importantDates: {
        notification: "2024-03-15",
        formEnd: "2024-04-10",
        examDate: "2024-05-20",
        resultDate: "2024-07-15"
      }
    },
    {
      id: 6,
      title: "NIT Srinagar GATE Admission",
      category: "admission",
      institution: "NIT Srinagar",
      date: "2024-04-15",
      deadline: "2024-05-10",
      status: "upcoming",
      priority: "high",
      description: "M.Tech admission through GATE scores",
      eligibility: "B.Tech + Valid GATE Score",
      fee: "₹1500",
      daysLeft: 37,
      applicants: 3450,
      maxSeats: 300,
      requirements: ["B.Tech Degree", "GATE Scorecard", "Category Certificate"],
      importantDates: {
        formStart: "2024-04-15",
        formEnd: "2024-05-10",
        counselling: "2024-05-25",
        admission: "2024-06-01"
      }
    }
  ];

  // Notifications data
  const notifications = [
    {
      id: 1,
      title: "New Scholarship Alert",
      message: "PM Scholarship scheme applications started",
      time: "2 hours ago",
      type: "scholarship",
      urgent: true
    },
    {
      id: 2,
      title: "Exam Date Updated",
      message: "JKPSC exam postponed to June 20th",
      time: "5 hours ago",
      type: "exam",
      urgent: false
    },
    {
      id: 3,
      title: "Last Date Reminder",
      message: "Only 3 days left for KU admissions",
      time: "1 day ago",
      type: "admission",
      urgent: true
    }
  ];

  const filteredEvents = selectedCategory === "all" 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBadge = (status: string, daysLeft: number) => {
    if (daysLeft <= 3) return { variant: "destructive" as const, text: "Closing Soon" };
    if (status === "active") return { variant: "default" as const, text: "Active" };
    if (status === "upcoming") return { variant: "secondary" as const, text: "Upcoming" };
    return { variant: "outline" as const, text: "Open" };
  };

  const handleSetReminder = (title: string) => {
    toast({
      title: "Reminder Set!",
      description: `You'll be notified about "${title}" deadline 3 days in advance.`,
    });
  };

  const handleDownloadCalendar = () => {
    toast({
      title: "Calendar Downloaded!",
      description: "Academic calendar has been downloaded to your device.",
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
              Academic {" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {t('timeline')} & Notifications
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with all important dates, deadlines, and notifications 
              for admissions, exams, and scholarships in Jammu & Kashmir.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">Active Events</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm text-muted-foreground">Closing Soon</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Bell className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">1,240</div>
                <div className="text-sm text-muted-foreground">Subscribers</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-gradient-accent hover:opacity-90" onClick={handleDownloadCalendar}>
              <Download className="h-4 w-4 mr-2" />
              Download Academic Calendar
            </Button>
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Subscribe to Notifications
            </Button>
          </div>
        </div>
      </section>

      <div className="container px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Notifications Sidebar */}
          <div className="lg:col-span-1">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-start gap-2">
                      {notification.urgent && (
                        <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="font-medium text-sm">{notification.title}</div>
                        <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                        <div className="text-xs text-muted-foreground mt-2">{notification.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Timeline */}
          <div className="lg:col-span-3">
            {/* Filter Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full mb-6">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="admission">Admissions</TabsTrigger>
                <TabsTrigger value="exam">Exams</TabsTrigger>
                <TabsTrigger value="scholarship">Scholarships</TabsTrigger>
                <TabsTrigger value="counseling">Counseling</TabsTrigger>
                <TabsTrigger value="recruitment">Jobs</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-6">
              {filteredEvents.map((event) => {
                const statusBadge = getStatusBadge(event.status, event.daysLeft);
                return (
                  <Card key={event.id} className="card-shadow hover:scale-105 transition-smooth">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                            <Badge variant={statusBadge.variant} className="text-xs">
                              {statusBadge.text}
                            </Badge>
                          </div>
                          <CardDescription className="flex items-center gap-4">
                            <span>{event.institution}</span>
                            <span className="text-xs">•</span>
                            <span>Deadline: {new Date(event.deadline).toLocaleDateString()}</span>
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${getPriorityColor(event.priority)}`}>
                            {event.daysLeft} days left
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Priority: {event.priority}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-medium">Eligibility</div>
                          <div className="text-muted-foreground text-xs">{event.eligibility}</div>
                        </div>
                        <div>
                          <div className="font-medium">Application Fee</div>
                          <div className="text-muted-foreground text-xs">{event.fee}</div>
                        </div>
                        <div>
                          <div className="font-medium">Available Seats</div>
                          <div className="text-muted-foreground text-xs">{event.maxSeats.toLocaleString()}</div>
                        </div>
                      </div>

                      {/* Application Progress */}
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span>Applications Received</span>
                          <span className="font-medium">
                            {event.applicants.toLocaleString()} / {event.maxSeats.toLocaleString()}
                          </span>
                        </div>
                        <Progress 
                          value={Math.min((event.applicants / event.maxSeats) * 100, 100)} 
                          className="h-2" 
                        />
                      </div>

                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" className="flex-1">
                              <FileText className="h-3 w-3 mr-1" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{event.title}</DialogTitle>
                              <DialogDescription>{event.institution}</DialogDescription>
                            </DialogHeader>
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2">Event Details</h4>
                                <div className="text-sm space-y-1">
                                  <div>Description: {event.description}</div>
                                  <div>Eligibility: {event.eligibility}</div>
                                  <div>Application Fee: {event.fee}</div>
                                  <div>Total Seats: {event.maxSeats.toLocaleString()}</div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2">Required Documents</h4>
                                <div className="flex flex-wrap gap-1">
                                  {event.requirements.map((req, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {req}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2">Important Dates</h4>
                                <div className="grid md:grid-cols-2 gap-2 text-sm">
                                  {Object.entries(event.importantDates).map(([key, date]) => (
                                    <div key={key} className="flex justify-between">
                                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                      <span>{new Date(date).toLocaleDateString()}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleSetReminder(event.title)}
                        >
                          <Bell className="h-3 w-3 mr-1" />
                          Set Reminder
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-accent hover:opacity-90">
                          Apply Now
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground">
                  No events match your current filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;