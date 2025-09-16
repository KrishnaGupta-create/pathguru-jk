import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { 
  MapPin, 
  Clock, 
  Users, 
  Search,
  Calendar as CalendarIcon,
  Phone,
  CheckCircle,
  Building2,
  UserCheck
} from "lucide-react";

const SupportCenters = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Mock support centers data
  const supportCenters = [
    {
      id: 1,
      name: "Srinagar Career Guidance Center",
      location: "Lal Chowk, Srinagar",
      district: "Srinagar",
      capacity: 50,
      services: ["Career Counseling", "Skill Assessment", "Job Placement"],
      timings: "9:00 AM - 5:00 PM",
      daysOpen: "Mon-Sat",
      contact: "+91-194-2400000",
      coordinator: "Dr. Amina Shah",
      nextAvailableSlot: "Tomorrow 10:00 AM",
      rating: 4.7,
      facilities: ["Computer Lab", "Conference Room", "Library", "Wi-Fi"],
      languages: ["English", "Urdu", "Kashmiri"]
    },
    {
      id: 2,
      name: "Jammu Youth Development Hub",
      location: "Gandhi Nagar, Jammu",
      district: "Jammu",
      capacity: 75,
      services: ["Entrepreneurship Training", "Digital Skills", "Interview Prep"],
      timings: "8:00 AM - 6:00 PM",
      daysOpen: "Mon-Sat",
      contact: "+91-191-2550000",
      coordinator: "Mr. Rajesh Kumar",
      nextAvailableSlot: "Today 2:00 PM",
      rating: 4.5,
      facilities: ["Training Hall", "Computer Lab", "Cafeteria", "Parking"],
      languages: ["English", "Hindi", "Dogri"]
    },
    {
      id: 3,
      name: "Baramulla Education Support Center",
      location: "Old Town, Baramulla",
      district: "Baramulla",
      capacity: 40,
      services: ["Academic Counseling", "Scholarship Guidance", "College Admissions"],
      timings: "9:30 AM - 4:30 PM",
      daysOpen: "Mon-Fri",
      contact: "+91-1954-230000",
      coordinator: "Ms. Fatima Begum",
      nextAvailableSlot: "Wednesday 11:00 AM",
      rating: 4.6,
      facilities: ["Meeting Rooms", "Resource Center", "Wi-Fi"],
      languages: ["English", "Urdu", "Kashmiri"]
    },
    {
      id: 4,
      name: "Anantnag Skills Development Center",
      location: "KP Road, Anantnag",
      district: "Anantnag",
      capacity: 60,
      services: ["Vocational Training", "Soft Skills", "Career Planning"],
      timings: "9:00 AM - 5:30 PM",
      daysOpen: "Mon-Sat",
      contact: "+91-1932-240000",
      coordinator: "Dr. Mohammad Yusuf",
      nextAvailableSlot: "Friday 3:00 PM",
      rating: 4.4,
      facilities: ["Workshop", "Seminar Hall", "Library", "Canteen"],
      languages: ["English", "Urdu", "Kashmiri"]
    },
    {
      id: 5,
      name: "Leh Career Excellence Center",
      location: "Main Bazaar, Leh",
      district: "Leh",
      capacity: 35,
      services: ["Higher Education Guidance", "STEM Promotion", "Research Support"],
      timings: "10:00 AM - 4:00 PM",
      daysOpen: "Tue-Sat",
      contact: "+91-1982-250000",
      coordinator: "Mr. Tenzin Norbu",
      nextAvailableSlot: "Thursday 1:00 PM",
      rating: 4.8,
      facilities: ["Research Lab", "Meeting Room", "Digital Library"],
      languages: ["English", "Hindi", "Ladakhi"]
    }
  ];

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Career Fair 2024",
      center: "Srinagar Career Guidance Center",
      date: "2024-03-15",
      time: "10:00 AM - 4:00 PM",
      description: "Meet with top recruiters from J&K and get job opportunities",
      registrations: 450,
      maxCapacity: 500
    },
    {
      id: 2,
      title: "Entrepreneurship Workshop",
      center: "Jammu Youth Development Hub",
      date: "2024-03-18",
      time: "2:00 PM - 5:00 PM",
      description: "Learn how to start your own business in J&K",
      registrations: 68,
      maxCapacity: 75
    },
    {
      id: 3,
      title: "College Admission Seminar",
      center: "Baramulla Education Support Center",
      date: "2024-03-20",
      time: "11:00 AM - 1:00 PM",
      description: "Get guidance on college applications and entrance exams",
      registrations: 35,
      maxCapacity: 40
    }
  ];

  const filteredCenters = supportCenters.filter(center => 
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBookSlot = (centerName: string, slot: string) => {
    toast({
      title: "Slot Booked Successfully!",
      description: `Your appointment at ${centerName} for ${slot} has been confirmed. You'll receive a confirmation SMS shortly.`,
    });
  };

  const handleRegisterEvent = (eventTitle: string) => {
    toast({
      title: "Registration Successful!",
      description: `You've been registered for ${eventTitle}. Check your email for event details.`,
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
              Offline {" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {t('supportCenters')}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find career counseling centers, book appointments, and attend workshops 
              across Jammu & Kashmir for personalized guidance.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Active Centers</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">2,340</div>
                <div className="text-sm text-muted-foreground">Monthly Visitors</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <CalendarIcon className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">Events This Month</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">94%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search centers by location, services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Support Centers Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              Career Support Centers ({filteredCenters.length})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCenters.map((center) => (
              <Card key={center.id} className="card-shadow hover:scale-105 transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-1">{center.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {center.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-accent border-accent/30">
                      {center.district}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Capacity</div>
                      <div className="text-muted-foreground">{center.capacity} people</div>
                    </div>
                    <div>
                      <div className="font-medium">Timings</div>
                      <div className="text-muted-foreground">{center.timings}</div>
                    </div>
                    <div>
                      <div className="font-medium">Days Open</div>
                      <div className="text-muted-foreground">{center.daysOpen}</div>
                    </div>
                    <div>
                      <div className="font-medium">Coordinator</div>
                      <div className="text-muted-foreground">{center.coordinator}</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-sm mb-2">Services</div>
                    <div className="flex flex-wrap gap-1">
                      {center.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="font-medium">Next Available:</span>
                      <span className="text-accent">{center.nextAvailableSlot}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="flex-1">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{center.name}</DialogTitle>
                          <DialogDescription>{center.location}</DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Center Information</h4>
                              <div className="text-sm space-y-1">
                                <div>Capacity: {center.capacity} people</div>
                                <div>Timings: {center.timings}</div>
                                <div>Open: {center.daysOpen}</div>
                                <div>Rating: {center.rating}/5</div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Contact & Coordinator</h4>
                              <div className="text-sm space-y-1">
                                <div className="flex items-center gap-2">
                                  <Phone className="h-3 w-3" />
                                  {center.contact}
                                </div>
                                <div className="flex items-center gap-2">
                                  <UserCheck className="h-3 w-3" />
                                  {center.coordinator}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Services Offered</h4>
                            <div className="flex flex-wrap gap-1">
                              {center.services.map((service, index) => (
                                <Badge key={index} variant="outline">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Facilities</h4>
                            <div className="flex flex-wrap gap-1">
                              {center.facilities.map((facility, index) => (
                                <Badge key={index} variant="outline">
                                  {facility}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Languages Supported</h4>
                            <div className="flex flex-wrap gap-1">
                              {center.languages.map((language, index) => (
                                <Badge key={index} variant="outline">
                                  {language}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-accent hover:opacity-90"
                      onClick={() => handleBookSlot(center.name, center.nextAvailableSlot)}
                    >
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      Book Slot
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-card/30">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Upcoming Events & Workshops
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.center}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-muted-foreground">{new Date(event.date).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="font-medium">Time</div>
                      <div className="text-muted-foreground">{event.time}</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>

                  <div className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span>Registrations:</span>
                      <span className="font-medium">
                        {event.registrations}/{event.maxCapacity}
                      </span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2 mt-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all" 
                        style={{ width: `${(event.registrations / event.maxCapacity) * 100}%` }}
                      />
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-accent hover:opacity-90"
                    disabled={event.registrations >= event.maxCapacity}
                    onClick={() => handleRegisterEvent(event.title)}
                  >
                    {event.registrations >= event.maxCapacity ? 'Event Full' : 'Register Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportCenters;