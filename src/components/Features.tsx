import { motion } from "framer-motion"

const features = [
  {
    title: "The 24-Hour Secret",
    description: "Every cut of meat spends a full 24 hours soaking in our proprietary family marinade. It's the only way to achieve the tender, melt-in-your-mouth flavor that has made us Renton's favorite.",
    image: "/hero_chicken_teriyaki.png",
    reverse: false
  },
  {
    title: "Wok-Fired Perfection",
    description: "We don't do fast food. We do good food, fast. Our wok-masters bring the heat to create that signature smoky char 'wok hei' you can't get anywhere else.",
    image: "/menu_classic_chicken.png",
    reverse: true
  },
  {
    title: "Fresh Daily Produce",
    description: "Our vegetables are chopped fresh every single morning. Crisp broccoli, sweet carrots, and snappy peas—never frozen, always vibrant.",
    image: "/hero_chicken_teriyaki.png",
    reverse: false
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-card border-y border-border/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary uppercase tracking-wider">The Wild Ginger Difference</h2>
        </div>
        
        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <h3 className="text-3xl md:text-4xl font-heading text-foreground uppercase tracking-wide">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="rounded-2xl overflow-hidden border border-border/20 shadow-xl aspect-video w-full">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
