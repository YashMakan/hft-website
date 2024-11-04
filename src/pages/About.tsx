import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const aboutPoints = [
  "Founded in 1982",
  "Registered with the SEC, NFA, and CFTC",
  "Significant employee investment in the funds we manage",
  "Average tenure of more than 14 years across our approximately 300 employees",
  "Intellectually vibrant culture of collaboration, discipline, critical analysis, and intense research",
  "90 PhDs in mathematics, physics, computer science, and related fields",
  "A MacArthur Fellow, National Academy of Sciences members, and many authors of widely cited scientific papers",
  "On-the-job training in quantitative portfolio management",
  "Decades of experience in developing and managing proprietary quantitative trading strategies",
  "Uniform data-driven approach applied across all funds",
  "A research database that grows by more than 40 terabytes a day",
  "52,000 computer cores with 150 gigabits per second of global connectivity",
  "Redundant computational facilities, each fully capable of supporting our trading operations"
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {aboutPoints.map((point, index) => (
              <p key={index} className="text-gray-800 text-lg leading-relaxed">
                {point}
              </p>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}