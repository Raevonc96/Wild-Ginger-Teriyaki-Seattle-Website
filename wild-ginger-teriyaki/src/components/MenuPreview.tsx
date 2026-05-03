import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const menuCategories = {
  classics: [
    { id: 1, title: "Chicken Teriyaki", description: "The #1 Seller. Hand-trimmed, flame-grilled and served with rice & salad.", image: "/menu_classic_chicken.png", price: "$13.99" },
    { id: 2, title: "Spicy Chicken", description: "Tossed in our signature house-made chili-ginger glaze.", image: "/menu_classic_chicken.png", price: "$14.99" },
    { id: 3, title: "Beef Teriyaki", description: "Lean rib-eye strips, thinly sliced and seared to perfection.", image: "/menu_classic_chicken.png", price: "$15.99" }
  ],
  healthy: [
    { id: 4, title: "Tofu Teriyaki", description: "Crispy-edged organic tofu with glazed veggies.", image: "/menu_classic_chicken.png", price: "$12.99" },
    { id: 5, title: "Veggie Stir-Fry", description: "A mountain of broccoli, carrots, cabbage, and zucchini.", image: "/menu_classic_chicken.png", price: "$11.99" }
  ],
  combos: [
    { id: 6, title: "Chicken & Beef Combo", description: "For when you can't choose just one.", image: "/menu_classic_chicken.png", price: "$17.99" },
    { id: 7, title: "Chicken & Gyoza", description: "5-piece potstickers paired with classic chicken.", image: "/menu_classic_chicken.png", price: "$16.99" }
  ]
}

export default function MenuPreview() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4 uppercase tracking-wider">Our Signature Menu</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Fresh, high-quality ingredients prepared daily to order.</p>
        </div>
        
        <Tabs defaultValue="classics" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-card border border-border/20 h-auto p-1 flex-wrap justify-center">
              <TabsTrigger value="classics" className="text-lg py-2 px-6 font-heading uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Teriyaki Classics</TabsTrigger>
              <TabsTrigger value="healthy" className="text-lg py-2 px-6 font-heading uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Healthy Mix</TabsTrigger>
              <TabsTrigger value="combos" className="text-lg py-2 px-6 font-heading uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Combos</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="classics" className="mt-0 outline-none">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuCategories.classics.map(item => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </TabsContent>
          <TabsContent value="healthy" className="mt-0 outline-none">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {menuCategories.healthy.map(item => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </TabsContent>
          <TabsContent value="combos" className="mt-0 outline-none">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {menuCategories.combos.map(item => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 uppercase tracking-widest">
            View Full Menu & Order
          </Button>
        </div>
      </div>
    </section>
  )
}

function MenuItemCard({ item }: { item: any }) {
  return (
    <Card className="bg-card border-border/10 overflow-hidden hover:scale-[1.02] transition-transform duration-300 group flex flex-col h-full">
      <div className="h-64 overflow-hidden shrink-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-heading text-foreground uppercase pr-4 leading-tight">{item.title}</h3>
          <span className="text-primary font-bold shrink-0 text-lg">{item.price}</span>
        </div>
        <p className="text-muted-foreground">{item.description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 mt-auto">
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase font-bold tracking-wider">
          Add to Order
        </Button>
      </CardFooter>
    </Card>
  )
}
