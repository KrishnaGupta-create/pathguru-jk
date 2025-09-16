import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { 
  MapPin, 
  Users, 
  GraduationCap, 
  Search,
  Filter,
  Star,
  Phone,
  Globe,
  Building2,
  BookOpen
} from "lucide-react";

const Colleges = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  // Mock college data
  const colleges = [
    {
      id: 1,
      name: "University of Kashmir",
      district: "Srinagar",
      location: "Hazratbal, Srinagar",
      courses: ["Engineering", "Medical", "Arts", "Science", "Commerce"],
      rating: 4.5,
      students: 25000,
      established: 1948,
      type: "State University",
      phone: "+91-194-2414000",
      website: "www.kashmiruniversity.ac.in",
      hostel: true,
      cutoff: "85%",
      fees: "₹15,000/year",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "University of Jammu",
      district: "Jammu",
      location: "Baba Saheb Ambedkar Road, Jammu",
      courses: ["Engineering", "Medical", "Law", "Management", "Arts"],
      rating: 4.3,
      students: 22000,
      established: 1969,
      type: "State University",
      phone: "+91-191-2434000",
      website: "www.jammuuniversity.ac.in",
      hostel: true,
      cutoff: "83%",
      fees: "₹12,000/year",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "NIT Srinagar",
      district: "Srinagar",
      location: "Hazratbal, Srinagar",
      courses: ["Engineering", "Technology", "Computer Science"],
      rating: 4.7,
      students: 3500,
      established: 1960,
      type: "Central University",
      phone: "+91-194-2420533",
      website: "www.nitsri.net",
      hostel: true,
      cutoff: "95%+",
      fees: "₹85,000/year",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Government College for Women",
      district: "Srinagar",
      location: "M.A. Road, Srinagar",
      courses: ["Arts", "Science", "Commerce", "Education"],
      rating: 4.2,
      students: 2800,
      established: 1950,
      type: "Government College",
      phone: "+91-194-2502345",
      website: "www.gcwsrinagar.edu.in",
      hostel: true,
      cutoff: "75%",
      fees: "₹8,000/year",
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "Government Medical College Jammu",
      district: "Jammu",
      location: "Sector 5, Bhagwati Nagar, Jammu",
      courses: ["Medical", "Nursing", "Paramedical"],
      rating: 4.4,
      students: 1200,
      established: 1973,
      type: "Government Medical College",
      phone: "+91-191-2540000",
      website: "www.gmcjammu.nic.in",
      hostel: true,
      cutoff: "98%+",
      fees: "₹50,000/year",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      name: "Islamic University of Science & Technology",
      district: "Pulwama",
      location: "Awantipora, Pulwama",
      courses: ["Engineering", "Management", "Computer Science", "Applied Sciences"],
      rating: 4.1,
      students: 4500,
      established: 2005,
      type: "State University",
      phone: "+91-1933-247955",
      website: "www.iust.ac.in",
      hostel: true,
      cutoff: "80%",
      fees: "₹25,000/year",
      image: "/api/placeholder/300/200"
    }
  ];

  const districts = ["All", "Srinagar", "Jammu", "Baramulla", "Anantnag", "Pulwama", "Kupwara", "Kathua"];
  const courseTypes = ["All", "Engineering", "Medical", "Arts", "Science", "Commerce", "Management", "Law"];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === "" || selectedDistrict === "All" || 
                           college.district === selectedDistrict;
    const matchesCourse = selectedCourse === "" || selectedCourse === "All" || 
                         college.courses.some(course => course === selectedCourse);
    
    return matchesSearch && matchesDistrict && matchesCourse;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-card via-background to-card">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              J&K Government {" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {t('colleges')}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the best government colleges across Jammu & Kashmir with detailed information, 
              admission requirements, and facilities.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t('searchColleges')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                <SelectTrigger>
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map(district => (
                    <SelectItem key={district} value={district}>{district}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Course Type" />
                </SelectTrigger>
                <SelectContent>
                  {courseTypes.map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="bg-gradient-accent hover:opacity-90">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>

            {/* Interactive Map Placeholder */}
            <Card className="mb-8 card-shadow">
              <CardContent className="p-6">
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Interactive J&K College Map</h3>
                    <p className="text-sm text-muted-foreground">
                      Click on districts to explore colleges in that region
                    </p>
                    <Button variant="outline" className="mt-4">
                      View Full Map
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* College Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              Found {filteredColleges.length} Colleges
            </h2>
            <div className="text-sm text-muted-foreground">
              Showing results for {selectedDistrict || "All Districts"} 
              {selectedCourse && selectedCourse !== "All" && ` • ${selectedCourse}`}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <Card key={college.id} className="card-shadow hover:scale-105 transition-smooth overflow-hidden">
                <div className="h-48 bg-muted bg-cover bg-center relative">
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {college.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 rounded px-2 py-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span className="text-xs font-medium">{college.rating}</span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-1">{college.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {college.location}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Students</div>
                      <div className="text-muted-foreground">{college.students.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="font-medium">Established</div>
                      <div className="text-muted-foreground">{college.established}</div>
                    </div>
                    <div>
                      <div className="font-medium">Cutoff</div>
                      <div className="text-muted-foreground">{college.cutoff}</div>
                    </div>
                    <div>
                      <div className="font-medium">Fees</div>
                      <div className="text-muted-foreground">{college.fees}</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-sm mb-2">Popular Courses</div>
                    <div className="flex flex-wrap gap-1">
                      {college.courses.slice(0, 3).map((course, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                      {college.courses.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{college.courses.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="flex-1 bg-gradient-accent hover:opacity-90">
                          {t('viewDetails')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{college.name}</DialogTitle>
                          <DialogDescription>{college.location}</DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold flex items-center gap-2">
                                  <Building2 className="h-4 w-4" />
                                  College Information
                                </h4>
                                <div className="text-sm space-y-1 mt-2">
                                  <div>Type: {college.type}</div>
                                  <div>Established: {college.established}</div>
                                  <div>Total Students: {college.students.toLocaleString()}</div>
                                  <div>Hostel: {college.hostel ? "Available" : "Not Available"}</div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold flex items-center gap-2">
                                  <GraduationCap className="h-4 w-4" />
                                  Admission Details
                                </h4>
                                <div className="text-sm space-y-1 mt-2">
                                  <div>Cutoff Percentage: {college.cutoff}</div>
                                  <div>Annual Fees: {college.fees}</div>
                                  <div>Application Deadline: March 31, 2024</div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold flex items-center gap-2">
                                  <BookOpen className="h-4 w-4" />
                                  Available Courses
                                </h4>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {college.courses.map((course, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {course}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold">Contact Information</h4>
                                <div className="text-sm space-y-1 mt-2">
                                  <div className="flex items-center gap-2">
                                    <Phone className="h-3 w-3" />
                                    {college.phone}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Globe className="h-3 w-3" />
                                    {college.website}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-3 w-3" />
                                    {college.location}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1 bg-gradient-accent hover:opacity-90">
                              Apply Online
                            </Button>
                            <Button variant="outline" className="flex-1">
                              Download Brochure
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm">
                      Compare
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredColleges.length === 0 && (
            <div className="text-center py-12">
              <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No colleges found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Colleges;