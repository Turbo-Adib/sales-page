"use client"

import { motion } from "framer-motion"
import { Plane, Home, Clock, DollarSign, Heart, Sun, Coffee, Mountain, Laptop, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const lifestyleFeatures = [
  {
    icon: Plane,
    title: "Travel The World",
    description: "Work from Bali beaches, Tokyo cafes, or Swiss mountains. Your office is wherever you want it to be.",
  },
  {
    icon: Clock,
    title: "Time Freedom",
    description: "No more alarm clocks. Work when you're most creative, not when a boss tells you to.",
  },
  {
    icon: Home,
    title: "Family First",
    description: "Never miss another family dinner, kid's game, or important moment because of work.",
  },
  {
    icon: DollarSign,
    title: "Financial Security",
    description: "Make more in a month than most make in a year. Build real wealth, not just a paycheck.",
  },
  {
    icon: Heart,
    title: "Passion Work",
    description: "Create content you love, help thousands of people, and get paid for being yourself.",
  },
  {
    icon: Sun,
    title: "Live Your Best Life",
    description: "Morning yoga, afternoon surfing, evening with friends. Design your perfect day, every day.",
  },
]

export function DreamLifestyleSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 opacity-10"
      >
        <Plane className="w-32 h-32 text-primary" />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Your New Life Awaits: <span className="text-primary">Freedom on Your Terms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Imagine waking up excited every day, working from paradise, and having the freedom to live life exactly how you want it.
            </p>
          </motion.div>

          {/* Lifestyle Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Current Life */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border-2 border-destructive/20 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-destructive">Your Life Now 😔</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    <span>Wake up to an alarm, rush to a job you hate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    <span>Two weeks vacation a year (if you&apos;re lucky)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    <span>Living paycheck to paycheck, stressed about bills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    <span>Missing family events because "work comes first"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    <span>Dreams on hold until "someday" or retirement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    <span>Asking permission to live your own life</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Dream Life */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl blur-xl" />
              <div className="relative bg-card border-2 border-accent/30 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-accent">Your Life In 12 Months 🚀</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">✓</span>
                    <span>Wake up naturally in your dream location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">✓</span>
                    <span>Travel whenever, wherever, for as long as you want</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">✓</span>
                    <span>$10K+ months, money flows while you sleep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">✓</span>
                    <span>Present for every important family moment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">✓</span>
                    <span>Living your dreams NOW, not "someday"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">✓</span>
                    <span>Complete freedom to design your perfect life</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Lifestyle Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-12">
              This Is What Freedom Looks Like
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifestyleFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dream Day Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              A Day in Your New Life
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">9:00 AM</h4>
                <p className="text-sm text-muted-foreground">Wake up naturally, coffee on the balcony overlooking the ocean</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">10:00 AM</h4>
                <p className="text-sm text-muted-foreground">2 hours of focused content creation from your villa</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">12:00 PM</h4>
                <p className="text-sm text-muted-foreground">Explore, adventure, or relax - your day, your choice</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">6:00 PM</h4>
                <p className="text-sm text-muted-foreground">Dinner with fellow creators living the same dream</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl font-semibold mb-6">
              Stop dreaming about this life. Start living it.
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              In 12 months, you'll either be living this lifestyle or still dreaming about it. 
              The only difference is taking action today.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-pulse"
            >
              Claim Your Freedom Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}