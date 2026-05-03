import { MapPin, Clock, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export default function LocationStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      // Renton is in Pacific Time
      const now = new Date();
      const ptTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
      const hours = ptTime.getHours();
      const minutes = ptTime.getMinutes();
      const day = ptTime.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
      
      const currentTime = hours + minutes / 60;
      
      let open = false;
      if (day >= 1 && day <= 5) {
        // Mon-Fri: 10:30 AM (10.5) to 8:30 PM (20.5)
        if (currentTime >= 10.5 && currentTime < 20.5) open = true;
      } else if (day === 6) {
        // Sat: 11:30 AM (11.5) to 8:00 PM (20.0)
        if (currentTime >= 11.5 && currentTime < 20.0) open = true;
      }
      
      setIsOpen(open);
    };
    
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-24 bg-card border-y border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading text-primary uppercase tracking-wider mb-4">Find Us</h2>
              <p className="text-muted-foreground text-lg">We're located in the heart of Renton, ready to serve you the best teriyaki in town.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-foreground uppercase tracking-wide">Location</h3>
                  <p className="text-muted-foreground">305 Burnett Ave S<br/>Renton, WA 98057</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-foreground uppercase tracking-wide">Contact</h3>
                  <p className="text-muted-foreground">(425) 227-9089</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                    <h3 className="text-xl font-heading text-foreground uppercase tracking-wide">Hours</h3>
                    <Badge variant={isOpen ? "default" : "destructive"} className={isOpen ? "bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2 px-3 py-1 font-bold tracking-wide" : "flex items-center gap-2 px-3 py-1 font-bold tracking-wide"}>
                      {isOpen && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground"></span>
                        </span>
                      )}
                      {isOpen ? "Open Now" : "Closed - Visit us tomorrow!"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground/80">Mon - Fri:</span> 10:30 AM - 8:30 PM<br/>
                    <span className="font-medium text-foreground/80">Sat:</span> 11:30 AM - 8:00 PM<br/>
                    <span className="font-medium text-foreground/80">Sun:</span> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-2xl overflow-hidden border border-border/20 shadow-xl bg-muted flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=305+Burnett+Ave+S,+Renton,+WA+98057&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C305+Burnett+Ave+S,+Renton,+WA+98057&key=YOUR_API_KEY')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
            <div className="relative text-center p-8 text-muted-foreground bg-card/80 backdrop-blur-sm rounded-xl border border-border/20 m-4">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="font-heading tracking-widest text-xl text-foreground">305 Burnett Ave S</p>
              <p className="text-sm">Renton, WA 98057</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
