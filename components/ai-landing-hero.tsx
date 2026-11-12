'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUp, BarChart2, Zap, MousePointer2, Play } from 'lucide-react';

export function AILandingHero() {
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">

        {/* Hero Content */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-[64px] font-medium tracking-tight text-white leading-[1.1]"
          >
            Your Ai assistant for <br className="hidden md:block" />
            smarter productivity.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg md:text-[19px] max-w-2xl mx-auto leading-relaxed"
          >
            Harness the power of AI to automate tasks, streamline workflows,
            <br className="hidden md:block" />
            and boost your team&apos;s efficiency — all in one simple platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] w-full sm:w-auto text-[15px]">
              Get started
            </button>
            <button className="bg-[#0f172a]/80 hover:bg-[#1e293b] border border-slate-700 text-white px-8 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-3 w-full sm:w-auto backdrop-blur-sm text-[15px]">
              <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              </div>
              See it in Action
            </button>
          </motion.div>
        </div>

        {/* Interactive Visualization */}
        <div className="mt-24 relative max-w-5xl mx-auto h-[600px] flex items-center justify-center">

          {/* Connecting Lines (Desktop Only) */}
          <div className="absolute inset-0 hidden lg:block z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Path 1: Top Left */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                d="M 280 200 C 380 200 400 300 450 300"
                stroke="#3b82f6"
                strokeWidth="2"
                className="opacity-60"
              />
              <circle cx="280" cy="200" r="3" fill="#60a5fa" filter="url(#glow)" />
              <circle cx="450" cy="300" r="3" fill="#60a5fa" filter="url(#glow)" />

              {/* Path 2: Bottom Left */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                d="M 280 400 C 380 400 400 300 450 300"
                stroke="#3b82f6"
                strokeWidth="2"
                className="opacity-60"
              />
              <circle cx="280" cy="400" r="3" fill="#60a5fa" filter="url(#glow)" />

              {/* Path 3: Top Right */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                d="M 720 200 C 620 200 600 300 550 300"
                stroke="#3b82f6"
                strokeWidth="2"
                className="opacity-60"
              />
              <circle cx="720" cy="200" r="3" fill="#60a5fa" filter="url(#glow)" />
              <circle cx="550" cy="300" r="3" fill="#60a5fa" filter="url(#glow)" />

              {/* Path 4: Bottom Right */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                d="M 720 400 C 620 400 600 300 550 300"
                stroke="#3b82f6"
                strokeWidth="2"
                className="opacity-60"
              />
              <circle cx="720" cy="400" r="3" fill="#60a5fa" filter="url(#glow)" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full relative z-10 gap-12 lg:gap-0">

            {/* Left Column */}
            <div className="flex flex-col gap-8 lg:gap-24 w-full max-w-[280px]">

              {/* Task Lists Card */}``
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-[#0b1221]/80 backdrop-blur-xl border border-blue-900/40 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <h3 className="text-[13px] font-medium text-slate-300 mb-4">Task Lists</h3>
                <div className="flex flex-col gap-2.5">
                  <div className="bg-[#131b2f] border border-slate-800/80 rounded-[10px] p-2.5 px-3">
                    <span className="text-[12px] text-slate-400">Draft client proposal</span>
                  </div>
                  <div className="bg-blue-600/10 border border-blue-500/20 rounded-[10px] p-2.5 px-3 flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-[12px] text-blue-100">Update analytics report</span>
                  </div>
                  <div className="bg-blue-600/10 border border-blue-500/20 rounded-[10px] p-2.5 px-3 flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-[12px] text-blue-100">Schedule team sync</span>
                  </div>
                </div>
              </motion.div>

              {/* Workflows Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-[#0b1221]/80 backdrop-blur-xl border border-blue-900/40 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative"
              >
                <h3 className="text-[13px] font-medium text-slate-300 mb-4">Workflows</h3>
                <div className="space-y-3 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-[12px] text-slate-200">Draft client proposal</span>
                  </div>

                  <div className="w-[1px] h-3 bg-slate-700 ml-2.5"></div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded border border-amber-500/30 flex items-center justify-center bg-amber-500/10">
                      <div className="w-1.5 h-1.5 rounded-sm bg-amber-400"></div>
                    </div>
                    <span className="text-[12px] text-slate-400">Manager review & approval</span>
                  </div>

                  <div className="mt-4 bg-[#131b2f] border border-slate-800/80 rounded-lg p-2.5 flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 truncate">Create a workflow to publish a ...</span>
                  </div>

                  <MousePointer2 className="w-4 h-4 text-[#3b82f6] absolute bottom-1 right-4 transform rotate-[-15deg] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                </div>
              </motion.div>

            </div>

            {/* Center Orb */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-64 h-64 lg:w-[320px] lg:h-[320px] flex-shrink-0"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[80px]" />

              {/* Core sphere */}
              <div className="absolute inset-8 lg:inset-12 rounded-full border border-blue-400/40 shadow-[0_0_80px_rgba(59,130,246,0.6)] bg-gradient-to-br from-blue-600/30 to-blue-900/50 backdrop-blur-md overflow-hidden flex items-center justify-center">

                {/* Internal energy rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-10%] rounded-full border border-transparent border-t-blue-400/60 border-r-blue-400/60"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(96, 165, 250, 0.8))' }}
                />
                <motion.div
                  animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[10%] rounded-full border-[1.5px] border-transparent border-b-cyan-300/80 border-l-cyan-300/80"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.6))' }}
                />
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[25%] rounded-full border border-transparent border-t-blue-200/90 border-r-blue-200/90"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(191, 219, 254, 0.9))' }}
                />

                {/* Core light */}
                <div className="absolute w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[20px]" />

                {/* Abstract lines imitating the image */}
                <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100">
                  <motion.path
                    animate={{ pathLength: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    d="M 10 50 C 30 10, 70 10, 90 50"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="0.5"
                  />
                  <motion.path
                    animate={{ pathLength: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    d="M 10 50 C 30 90, 70 90, 90 50"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="0.5"
                  />
                  <motion.path
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    d="M 20 20 Q 50 80, 80 20"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="0.5"
                  />
                </svg>

              </div>
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 lg:gap-24 w-full max-w-[280px]">

              {/* Analytics Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-[#0b1221]/80 backdrop-blur-xl border border-blue-900/40 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[13px] font-medium text-slate-300">Analytics</h3>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5 flex items-center gap-1">
                    <ArrowUp className="w-2.5 h-2.5 text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-medium">60% from last mth</span>
                  </div>
                </div>

                <div className="relative h-24 mt-2">
                  <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] text-slate-500">
                    <span>100%</span>
                    <span>60%</span>
                    <span>40%</span>
                    <span>0%</span>
                  </div>

                  <div className="absolute left-7 right-0 bottom-6 top-0 flex items-end justify-between gap-1.5">
                    <div className="w-full bg-[#1e3a8a] rounded-t-[3px] h-[30%] relative">
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-slate-500">Apr</div>
                    </div>
                    <div className="w-full bg-[#1e3a8a] rounded-t-[3px] h-[45%] relative">
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-slate-500">May</div>
                    </div>
                    <div className="w-full bg-[#3b82f6] rounded-t-[3px] h-[60%] relative shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-slate-500">Jun</div>
                    </div>
                    <div className="w-full bg-[#1e3a8a] rounded-t-[3px] h-[55%] relative">
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-slate-500">Jul</div>
                    </div>
                    <div className="w-full bg-[#3b82f6] rounded-t-[3px] h-[80%] relative shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-slate-500">Aug</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Insights Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-[#0b1221]/80 backdrop-blur-xl border border-blue-900/40 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <h3 className="text-[13px] font-medium text-slate-300 mb-4">Insights</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 bg-[#131b2f] border border-slate-800/80 rounded-lg p-2.5 px-3">
                    <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[12px] text-slate-300">Automate weekly reports</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="bg-[#131b2f] border border-slate-800/80 rounded-full px-3 py-1.5 flex items-center">
                      <span className="text-[11px] text-slate-400">Productivity trend</span>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      <span className="text-[11px] text-emerald-300">Focus on top p...</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
