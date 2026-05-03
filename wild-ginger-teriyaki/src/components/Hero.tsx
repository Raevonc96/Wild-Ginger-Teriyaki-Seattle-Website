import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const HERO_IMAGE = "/hero_chicken_teriyaki.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="space-y-6"
        >
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-heading text-foreground leading-[0.9]"
          >
            WILD GINGER: <span className="text-primary block">RENTON TERIYAKI</span> AT 305 BURNETT AVE S
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg"
          >
            Experience the difference of our signature 24-hour marinade. Wok-fired perfection served fresh daily.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 pt-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg uppercase tracking-wide">
              Start Order
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg uppercase tracking-wide">
              View Menu
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-border/20 shadow-2xl shadow-primary/10">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </div>
    </section>
  )
}
