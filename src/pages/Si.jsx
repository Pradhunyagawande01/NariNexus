import { useState, useEffect } from 'react';

export default function EventSatisfactionDashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-indigo-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#gridGradient)" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="w-full max-w-6xl z-10 mb-16">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            Satisfaction Index Of Events
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 mt-2">Comprehensive analysis of our hosted events performance</p>
        </div>
      </div>
      
      {/* Main visualization */}
      <div className="w-full max-w-5xl z-10 relative">
        {/* Central index value */}
        <div className="mb-10 text-center">
          <div className="inline-block relative">
            <div className="bg-gradient-to-r from-violet-600 to-blue-600 p-px rounded-xl">
              <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-xl py-4 px-16 relative z-10">
                <h2 className="text-lg font-medium text-blue-200">OVERALL SATISFACTION INDEX</h2>
                <div className="flex items-center justify-center mt-1">
                  <span className="text-6xl font-bold text-white">94.33%</span>
                  <div className="ml-4 bg-green-500 bg-opacity-20 rounded-lg px-3 py-1">
                    <span className="text-green-400 font-medium text-sm">+2.4%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-16 h-1 bg-blue-500 rounded-full transform rotate-45"></div>
            <div className="absolute -bottom-3 -left-3 w-16 h-1 bg-purple-500 rounded-full transform rotate-45"></div>
          </div>
        </div>
        
        {/* Hexagonal grid layout */}
        <div className="relative">
          <svg className="w-full" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            {/* Connector lines */}
            <g stroke="#6366F1" strokeWidth="1" strokeOpacity="0.3">
              <line x1="400" y1="100" x2="600" y2="200" />
              <line x1="600" y1="200" x2="600" y2="350" />
              <line x1="600" y1="350" x2="400" y2="450" />
              <line x1="400" y1="450" x2="200" y2="350" />
              <line x1="200" y1="350" x2="200" y2="200" />
              <line x1="200" y1="200" x2="400" y2="100" />
            </g>
          </svg>
          
          {/* Metrics positioned over the SVG */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-5">
            {/* Event Engagement */}
            <div className="col-start-2 row-start-1 flex justify-center items-center">
              <MetricHexagon 
                score="94%" 
                title="Event Engagement" 
                color="from-red-500 to-orange-500" 
              />
            </div>
            
            {/* Event Organization */}
            <div className="col-start-3 row-start-1 flex justify-center items-center">
              <MetricHexagon 
                score="97%" 
                title="Event Organization" 
                color="from-red-600 to-red-700" 
              />
            </div>
            
            {/* Overall Experience */}
            <div className="col-start-3 row-start-2 flex justify-center items-center">
              <MetricHexagon 
                score="98%" 
                title="Overall Experience" 
                color="from-purple-600 to-fuchsia-600" 
              />
            </div>
            
            {/* Speaker Experience */}
            <div className="col-start-2 row-start-2 flex justify-center items-center">
              <MetricHexagon 
                score="90%" 
                title="Speaker Experience" 
                color="from-purple-800 to-indigo-800" 
              />
            </div>
            
            {/* Content Quality */}
            <div className="col-start-1 row-start-2 flex justify-center items-center">
              <MetricHexagon 
                score="90%" 
                title="Content Quality" 
                color="from-amber-500 to-yellow-500" 
              />
            </div>
            
            {/* Networking */}
            <div className="col-start-1 row-start-1 flex justify-center items-center">
              <MetricHexagon 
                score="92%" 
                title="Networking" 
                color="from-orange-500 to-amber-500" 
              />
            </div>
          </div>
        </div>
        
        {/* Legend/Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-4 border border-indigo-900 border-opacity-50">
            <div className="w-12 h-1 bg-green-500 mx-auto mb-3"></div>
            <p className="text-blue-100">Highest rated: Overall Experience (98%)</p>
          </div>
          
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-4 border border-indigo-900 border-opacity-50">
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-3"></div>
            <p className="text-blue-100">Average satisfaction: 94.33%</p>
          </div>
          
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-4 border border-indigo-900 border-opacity-50">
            <div className="w-12 h-1 bg-yellow-500 mx-auto mb-3"></div>
            <p className="text-blue-100">Areas for improvement: Speaker & Content (90%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hexagon Metric Component with modern design
function MetricHexagon({ score, title, color }) {
  return (
    <div className="relative group">
      <div className={`w-40 h-40 bg-gradient-to-br ${color} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105`} 
         style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}
      >
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-white">{score}</span>
          <span className="text-xs font-medium text-white opacity-80 mt-1">{title}</span>
        </div>
      </div>
      
      {/* Glowing effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
         style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}
      ></div>
    </div>
  );
}