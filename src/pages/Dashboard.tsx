import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Users, 
  GraduationCap, 
  Award, 
  MapPin, 
  TrendingUp,
  Calendar,
  BookOpen,
  Target
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const Dashboard = () => {
  const { t } = useLanguage();

  // Mock data for charts
  const enrollmentData = [
    { year: '2020', students: 45000 },
    { year: '2021', students: 52000 },
    { year: '2022', students: 58000 },
    { year: '2023', students: 65000 },
    { year: '2024', students: 72000 }
  ];

  const districtData = [
    { district: 'Srinagar', students: 15420 },
    { district: 'Jammu', students: 18230 },
    { district: 'Baramulla', students: 8560 },
    { district: 'Anantnag', students: 7890 },
    { district: 'Kathua', students: 6750 },
    { district: 'Kupwara', students: 5430 }
  ];

  const careerOutcomes = [
    { name: 'Government Jobs', value: 35, color: '#0D7377' },
    { name: 'Private Sector', value: 28, color: '#14FFEC' },
    { name: 'Higher Education', value: 22, color: '#323232' },
    { name: 'Entrepreneurship', value: 15, color: '#0D7377' }
  ];

  const recentActivities = [
    { title: "Kashmir University Admission Portal Opened", time: "2 hours ago", type: "admission" },
    { title: "New Scholarship Program Announced for ST/SC Students", time: "4 hours ago", type: "scholarship" },
    { title: "Career Counseling Camp in Baramulla - 200+ Students Attended", time: "1 day ago", type: "event" },
    { title: "Technical Training Program Started in Jammu", time: "2 days ago", type: "training" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Stats */}
      <section className="py-12 bg-gradient-to-r from-card via-background to-card">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              J&K Student {" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {t('dashboard')}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of educational progress and career guidance in Jammu & Kashmir
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">72,450</div>
                <div className="text-sm text-muted-foreground">{t('studentsGuided')}</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">{t('collegesListed')}</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm text-muted-foreground">{t('ngoPartners')}</div>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">94%</div>
                <div className="text-sm text-muted-foreground">{t('successRate')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Enrollment Growth Chart */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Student Enrollment Growth
                </CardTitle>
                <CardDescription>
                  Year-over-year enrollment in J&K government colleges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={enrollmentData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="students" 
                        stroke="hsl(var(--accent))" 
                        fill="hsl(var(--accent) / 0.2)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* District-wise Distribution */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  District-wise Student Distribution
                </CardTitle>
                <CardDescription>
                  Students guided across major districts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={districtData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="district" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Career Outcomes & Recent Activities */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            
            {/* Career Outcomes Pie Chart */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Career Path Outcomes
                </CardTitle>
                <CardDescription>
                  Where our guided students end up
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={careerOutcomes}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {careerOutcomes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {careerOutcomes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Recent Activities
                </CardTitle>
                <CardDescription>
                  Latest updates and events in J&K education
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activity.type === 'admission' ? 'bg-accent' :
                        activity.type === 'scholarship' ? 'bg-primary' :
                        activity.type === 'event' ? 'bg-secondary' : 'bg-muted'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activities
                </Button>
              </CardContent>
            </Card>

          </div>

          {/* Quick Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="card-shadow hover:scale-105 transition-smooth cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Scholarship Alert</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  15 new scholarships available for J&K students
                </p>
                <Badge variant="outline" className="text-accent border-accent/30">
                  View All
                </Badge>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:scale-105 transition-smooth cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Admission Deadlines</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upcoming deadlines for major universities
                </p>
                <Badge variant="outline" className="text-accent border-accent/30">
                  Check Dates
                </Badge>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:scale-105 transition-smooth cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Career Counseling</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a session with expert counselors
                </p>
                <Badge variant="outline" className="text-accent border-accent/30">
                  Book Now
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;