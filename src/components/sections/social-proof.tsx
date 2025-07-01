"use client"

import { motion } from "framer-motion"
import { Star, PlayCircle, TrendingUp } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SocialProofSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const featuredTestimonials = testimonials.filter(t => t.featured)

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
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
              From Cubicle to <span className="text-accent">Paradise</span> in 12 Months
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These creators escaped the 9-5 and now live life on their own terms
            </p>
          </motion.div>

          {/* Success Examples Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">Quit Job After 3 Months</h3>
              <p className="text-muted-foreground">Now working from Bali making $15K/month</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">12 Countries in 12 Months</h3>
              <p className="text-muted-foreground">Living the dream while earning $200K+/year</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">Retired Parents at 25</h3>
              <p className="text-muted-foreground">From broke college student to 6-figure creator</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">4-Hour Work Days</h3>
              <p className="text-muted-foreground">More money, more time, more freedom</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">Bought Dream Home at 23</h3>
              <p className="text-muted-foreground">From mom's basement to beachfront property</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">Family Time Every Day</h3>
              <p className="text-muted-foreground">Never miss another moment that matters</p>
            </motion.div>
          </div>


          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See More!
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo.replace('watch?v=', 'embed/')}
              title="Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}