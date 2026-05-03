import { motion } from "framer-motion"

const reviews = [
  "⭐ 4.7 Stars on Google",
  "700+ Verified Reviews",
  "Voted Best in Renton",
  "Family Owned & Operated"
]

export default function SocialProofMarquee() {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden whitespace-nowrap flex items-center border-y border-border/20">
      <motion.div
        className="flex gap-16 pr-16 text-lg font-heading tracking-widest uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
          <span key={i} className="flex-shrink-0">
            {review}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
