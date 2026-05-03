import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <>
      <footer className="bg-background py-12 border-t border-border/20 pb-28 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-3xl font-heading text-primary tracking-wider">WILD GINGER</span>
              <span className="text-3xl font-heading text-foreground tracking-wider ml-2">TERIYAKI</span>
              <p className="text-muted-foreground mt-2">Renton's Gold Standard. Since 2010.</p>
            </div>
            
            <div className="flex gap-6 text-sm font-medium">
              <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Our Secret</a>
              <a href="#location" className="text-muted-foreground hover:text-primary transition-colors">Location</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="text-center mt-12 text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Wild Ginger Teriyaki. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-md border-t border-border/20 z-50">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg uppercase tracking-wider py-6">
          Start Pickup Order
        </Button>
      </div>
    </>
  )
}
