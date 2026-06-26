import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  Building2, 
  Eye, 
  Zap, 
  GraduationCap,
  Brain,
  MapPin,
  TrendingUp,
  Users,
  Shield,
  Rocket
} from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-[#020808] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#0D2A29] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0D2A29] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#18C8A3] rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#18C8A3] to-[#8FEFD5] rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(24,200,163,0.3)]">
              <Brain className="w-10 h-10 text-[#020808]" />
            </div>
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#18C8A3] via-[#8FEFD5] to-[#D8E5DF] bg-clip-text text-transparent"
          >
            Where Intelligence Meets Purpose
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#9CA8A3] max-w-3xl mx-auto"
          >
            The story behind India's most innovative AI academy
          </motion.p>
        </div>

        {/* The Name Section */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#071212] to-[#0D2A29] rounded-3xl p-8 md:p-12 mb-16 border border-[#0D2A29] shadow-[0_0_60px_rgba(13,42,41,0.3)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18C8A3]">The Meaning Behind Elevox</h2>
              <p className="text-[#9CA8A3] text-lg leading-relaxed">
                <span className="text-[#8FEFD5] font-semibold">Elevox</span> emerges from the fusion of 
                <span className="text-[#18C8A3] font-semibold"> "Elevate"</span> and 
                <span className="text-[#18C8A3] font-semibold"> "Vox"</span> (voice in Latin). 
                It represents our mission to elevate the voice of Indian talent in the global AI landscape.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-[#0D2A29] border border-[#18C8A3] rounded-full text-[#18C8A3] text-sm">
                  🚀 Elevate
                </span>
                <span className="px-4 py-2 bg-[#0D2A29] border border-[#8FEFD5] rounded-full text-[#8FEFD5] text-sm">
                  🗣️ Voice
                </span>
                <span className="px-4 py-2 bg-[#0D2A29] border border-[#D8E5DF] rounded-full text-[#D8E5DF] text-sm">
                  ✨ Purpose
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-[#18C8A3] to-[#8FEFD5] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(24,200,163,0.2)]">
                <span className="text-[#020808] text-4xl font-bold">E</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Elevox Was Created */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-[#071212] rounded-3xl p-8 border border-[#0D2A29] hover:border-[#18C8A3] transition-all duration-300 shadow-[0_0_30px_rgba(13,42,41,0.2)]">
            <div className="w-14 h-14 bg-[#0D2A29] rounded-xl flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-[#18C8A3]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#18C8A3]">Why Elevox Was Created</h3>
            <p className="text-[#9CA8A3] leading-relaxed">
              Born from a simple observation: India produces millions of graduates annually, 
              yet only a fraction are equipped with practical AI skills. Elevox was created 
              to bridge this gap, transforming theoretical knowledge into real-world AI expertise 
              that drives innovation and economic growth.
            </p>
          </div>

          <div className="bg-[#071212] rounded-3xl p-8 border border-[#0D2A29] hover:border-[#18C8A3] transition-all duration-300 shadow-[0_0_30px_rgba(13,42,41,0.2)]">
            <div className="w-14 h-14 bg-[#0D2A29] rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-[#18C8A3]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#18C8A3]">The AI Skills Gap in India</h3>
            <p className="text-[#9CA8A3] leading-relaxed">
              India faces a critical shortage of AI-ready talent. With only 10% of engineers 
              possessing relevant AI skills, the gap between demand and supply continues to widen. 
              Elevox addresses this by providing industry-aligned training that prepares students 
              for the AI-driven future.
            </p>
          </div>
        </motion.div>

        {/* Tier-2 Cities Section */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-[#071212] to-[#0D2A29] rounded-3xl p-8 md:p-12 mb-16 border border-[#0D2A29]"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-[#18C8A3]">
                <MapPin className="inline-block w-8 h-8 mr-2 text-[#8FEFD5]" />
                Why Tier-2 Cities Need AI Infrastructure
              </h2>
              <p className="text-[#9CA8A3] text-lg leading-relaxed mb-6">
                Tier-2 cities are India's untapped goldmines of talent. By bringing world-class 
                AI infrastructure to these regions, Elevox is democratizing access to cutting-edge 
                technology education. This isn't just about skills—it's about creating economic 
                opportunities where they're needed most.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#020808] p-4 rounded-xl border border-[#0D2A29]">
                  <span className="text-[#18C8A3] font-bold block">🎯 40+</span>
                  <span className="text-[#9CA8A3] text-sm">Cities Reached</span>
                </div>
                <div className="bg-[#020808] p-4 rounded-xl border border-[#0D2A29]">
                  <span className="text-[#18C8A3] font-bold block">📈 200%</span>
                  <span className="text-[#9CA8A3] text-sm">Talent Growth</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[#18C8A3] to-[#8FEFD5] rounded-full opacity-10 blur-2xl"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-40 h-40 border-2 border-[#18C8A3] rounded-full flex items-center justify-center">
                    <span className="text-4xl">🌆</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision & What Makes Us Different */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-[#071212] rounded-3xl p-8 border border-[#0D2A29]">
            <div className="w-14 h-14 bg-[#0D2A29] rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#18C8A3]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#18C8A3]">Vision for the Future</h3>
            <p className="text-[#9CA8A3] leading-relaxed mb-6">
              By 2030, Elevox aims to create a network of 100 AI centers across India, 
              nurturing 100,000 AI professionals who will drive innovation in every sector—from 
              healthcare to agriculture, manufacturing to finance. We envision an India that 
              leads the world in AI innovation.
            </p>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#18C8A3] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#8FEFD5] rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-[#D8E5DF] rounded-full animate-pulse delay-200"></div>
            </div>
          </div>

          <div className="bg-[#071212] rounded-3xl p-8 border border-[#0D2A29]">
            <div className="w-14 h-14 bg-[#0D2A29] rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-[#18C8A3]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#18C8A3]">What Makes Elevox Different</h3>
            <ul className="space-y-3 text-[#9CA8A3]">
              <li className="flex items-start gap-3">
                <span className="text-[#18C8A3] mt-1">✦</span>
                <span>Industry-designed curriculum by AI leaders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#18C8A3] mt-1">✦</span>
                <span>Real-world projects from day one</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#18C8A3] mt-1">✦</span>
                <span>1:1 mentorship from AI experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#18C8A3] mt-1">✦</span>
                <span>Strong focus on ethical AI development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#18C8A3] mt-1">✦</span>
                <span>Global certification and placement support</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.7 }}
          className="text-center bg-gradient-to-br from-[#071212] to-[#0D2A29] rounded-3xl p-12 border border-[#0D2A29] mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-[#18C8A3] to-[#8FEFD5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(24,200,163,0.2)]">
              <Brain className="w-10 h-10 text-[#020808]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#18C8A3]">
              The Philosophy of "Where Intelligence Meets Purpose"
            </h2>
            <p className="text-[#9CA8A3] text-lg leading-relaxed">
              At Elevox, we believe that intelligence without purpose is just data. 
              Our philosophy centers on harnessing AI for meaningful impact—solving real problems, 
              creating sustainable solutions, and empowering communities. Every line of code, 
              every algorithm, every innovation serves a greater purpose: to create a better future 
              for all.
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#18C8A3] rounded-full"></div>
                <span className="text-[#D8E5DF]">Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#8FEFD5] rounded-full"></div>
                <span className="text-[#D8E5DF]">Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#D8E5DF] rounded-full"></div>
                <span className="text-[#D8E5DF]">Integrity</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "10K+", label: "Students Trained", icon: <GraduationCap className="w-6 h-6 text-[#18C8A3]" /> },
            { number: "50+", label: "Expert Mentors", icon: <Users className="w-6 h-6 text-[#18C8A3]" /> },
            { number: "95%", label: "Placement Rate", icon: <Target className="w-6 h-6 text-[#18C8A3]" /> },
            { number: "40+", label: "Partner Companies", icon: <Building2 className="w-6 h-6 text-[#18C8A3]" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#071212] p-6 rounded-2xl border border-[#0D2A29] text-center hover:border-[#18C8A3] transition-all duration-300 shadow-[0_0_20px_rgba(13,42,41,0.2)]"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#8FEFD5]">{stat.number}</div>
              <div className="text-[#9CA8A3] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;