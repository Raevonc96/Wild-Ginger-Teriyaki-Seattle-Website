import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "The best teriyaki in Renton, hands down. The chicken is always so tender and the glaze is perfect.",
    author: "Sarah J.",
    rating: 5
  },
  {
    quote: "I've lived in Seattle my whole life and this is the gold standard. Their 24-hour marinade really makes a difference.",
    author: "Michael T.",
    rating: 5
  },
  {
    quote: "Fast, fresh, and friendly. The portions are huge and the spicy beef is incredible!",
    author: "Elena R.",
    rating: 5
  },
  {
    quote: "Been coming here for 5 years. Quality has never dropped once. It's a family favorite.",
    author: "David K.",
    rating: 5
  },
  {
    quote: "The vegan stir-fry is shockingly good. Usually teriyaki places treat veggies as an afterthought, but not here.",
    author: "Jessica M.",
    rating: 5
  },
  {
    quote: "Perfect char on the chicken every single time.",
    author: "Tom H.",
    rating: 5
  }
]

export default function TestimonialMasonry() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary uppercase tracking-wider mb-4">What Renton Says</h2>
          <p className="text-muted-foreground text-lg">Don't just take our word for it.</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="break-inside-avoid bg-card border-border/10 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex text-primary mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-foreground text-lg mb-4 italic">"{t.quote}"</p>
                <p className="text-muted-foreground font-semibold">— {t.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
