import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-heading text-primary tracking-wider">WILD GINGER</span>
          <span className="text-3xl font-heading text-foreground tracking-wider hidden sm:block">TERIYAKI</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#features" className="hover:text-primary transition-colors">Our Secret</a>
            <a href="#location" className="hover:text-primary transition-colors">Location</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  )
}
