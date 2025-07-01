"use client"

import { motion } from "framer-motion"
import { XCircle, TrendingDown, Clock, AlertTriangle, CheckCircle2, ArrowRight, Users, DollarSign, BarChart3, Target, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const painPoints = [
  {
    icon: Clock,
    title: "Trading your best years for a paycheck",
    description: "Stuck in a soul-crushing 9-5 while watching others travel the world and live freely.",
  },
  {
    icon: XCircle,
    title: "Missing life's precious moments",
    description: "Can't attend your kid's game or take that trip because you need 'permission' from a boss.",
  },
  {
    icon: TrendingDown,
    title: "Living paycheck to paycheck",
    description: "Working 40+ hours a week but still stressed about bills and can't afford the life you want.",
  },
  {
    icon: AlertTriangle,
    title: "Dreams dying on the vine",
    description: "That business idea, that trip, that lifestyle - all waiting for 'someday' that never comes.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-32 bg-background/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Is This Your Life Right Now?
            </h2>
            <p className="text-xl text-muted-foreground">
              "Another day, another dollar, another dream deferred..."
            </p>
            <p className="text-lg font-semibold text-destructive mt-2">
              While you're stuck in the rat race, others are living your dream life
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-background border border-destructive/20 rounded-lg p-6 text-left space-y-3"
              >
                <point.icon className="w-10 h-10 text-destructive" />
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-destructive/5 border border-destructive/20 rounded-xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Reality Check
            </h3>
            <p className="text-lg text-muted-foreground mb-2">
              Right now, someone with less talent, fewer connections, and less experience than you…
            </p>
            <p className="text-lg font-semibold mb-6">
              Is making more money in a month than you make in a year.
            </p>
            <p className="text-base text-muted-foreground mb-6">
              The only difference? They know something you don't.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl" />
                <div className="relative bg-card border border-primary/20 rounded-lg p-6">
                  <DollarSign className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-primary">They just know</p>
                  <p className="text-muted-foreground mt-2">which content pays</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-transparent rounded-lg blur-xl" />
                <div className="relative bg-card border border-destructive/20 rounded-lg p-6">
                  <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-primary">and which content</p>
                  <p className="text-muted-foreground mt-2">doesn't work</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-lg blur-xl" />
                <div className="relative bg-card border border-accent/20 rounded-lg p-6">
                  <Zap className="w-12 h-12 text-accent mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-primary">And today,</p>
                  <p className="text-muted-foreground mt-2">we're exposing the playbook</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Course Is For You Section - Visual Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              "This Course Is For You If you're tired of…"
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                viewport={{ once: true }}
                className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl text-destructive/10 font-bold">
                  <AnimatedCounter value={12} duration={1.5} />
                </div>
                <BarChart3 className="w-8 h-8 text-destructive mb-3" />
                <h4 className="font-semibold mb-2">Low Engagement</h4>
                <p className="text-sm text-muted-foreground">Posting content that gets 12 likes while others go viral daily</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                viewport={{ once: true }}
                className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl text-destructive/10 font-bold">📉</div>
                <Target className="w-8 h-8 text-destructive mb-3" />
                <h4 className="font-semibold mb-2">Analytics Anxiety</h4>
                <p className="text-sm text-muted-foreground">Feeling like a failure every time you check your analytics</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                viewport={{ once: true }}
                className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-6xl text-destructive/10 font-bold">⏸️</div>
                <Shield className="w-8 h-8 text-destructive mb-3" />
                <h4 className="font-semibold mb-2">Stuck in Place</h4>
                <p className="text-sm text-muted-foreground">Pretending you're "building slowly" when really you're just stuck</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Agitation Statement with Visual Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl font-medium mb-4">
                The difference between you and successful creators <span className="text-destructive font-bold">isn't talent — it's knowledge.</span>
              </p>
            </div>
            
            {/* Two Paths Comparison */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {/* Left Path - Without Our System */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent rounded-xl blur-xl" />
                <div className="relative bg-card border-2 border-destructive/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="w-8 h-8 text-destructive" />
                    <h3 className="font-bold text-lg">Without Our System</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Today */}
                    <div className="flex items-start gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">NOW</span>
                        </div>
                        <div className="w-0.5 h-16 bg-destructive/20" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">Today</p>
                        <p className="text-sm text-muted-foreground">200 followers, minimal engagement</p>
                      </div>
                    </div>
                    
                    {/* 30 Days */}
                    <div className="flex items-start gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">30D</span>
                        </div>
                        <div className="w-0.5 h-16 bg-destructive/20" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">30 Days</p>
                        <p className="text-sm text-muted-foreground">Still struggling, maybe 250 followers</p>
                      </div>
                    </div>
                    
                    {/* 6 Months */}
                    <div className="flex items-start gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">6M</span>
                        </div>
                        <div className="w-0.5 h-16 bg-destructive/20" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">6 Months</p>
                        <p className="text-sm text-muted-foreground">500 followers, inconsistent content</p>
                      </div>
                    </div>
                    
                    {/* 12 Months */}
                    <div className="flex items-start gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">12M</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">12 Months</p>
                        <p className="text-sm text-destructive">Burnt out, gave up or still stuck under 1K followers</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                    <p className="text-sm font-medium text-destructive">Result: Wasted a year with nothing to show</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Path - With Our System */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl blur-xl" />
                <div className="relative bg-card border-2 border-accent/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                    <h3 className="font-bold text-lg">With Our System</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Today */}
                    <div className="flex items-start gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">NOW</span>
                        </div>
                        <div className="w-0.5 h-16 bg-accent/20" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">Today</p>
                        <p className="text-sm text-muted-foreground">200 followers, joins Creator Camp</p>
                      </div>
                    </div>
                    
                    {/* 30 Days */}
                    <div className="flex items-start gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">30D</span>
                        </div>
                        <div className="w-0.5 h-16 bg-accent/20" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">30 Days</p>
                        <p className="text-sm text-muted-foreground">First viral video, 5K+ followers</p>
                      </div>
                    </div>
                    
                    {/* 6 Months */}
                    <div className="flex items-start gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">6M</span>
                        </div>
                        <div className="w-0.5 h-16 bg-accent/20" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">6 Months</p>
                        <p className="text-sm text-muted-foreground">Consistent viral content, 50K+ followers</p>
                      </div>
                    </div>
                    
                    {/* 12 Months */}
                    <div className="flex items-start gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">12M</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">12 Months</p>
                        <p className="text-sm text-accent font-semibold">$10K+/month creator business 🚀</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm font-medium text-accent">Result: Full-time creator income & freedom</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Visual Arrow and CTA */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex justify-center mb-6"
              >
                <ArrowRight className="w-12 h-12 text-primary animate-pulse" />
              </motion.div>
              
              <p className="text-lg font-semibold text-primary mb-8">
                Which path will you choose? Your future starts with one decision.
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Now!
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}