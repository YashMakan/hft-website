import React from 'react';
import Navbar from '../components/Navbar';
import LocationInfo from '../components/LocationInfo';
import Footer from '../components/Footer';

const locations = [
  {
    title: "Long Island",
    company: ["Renaissance Technologies LLC"],
    address: ["600 Route 25A", "East Setauket, New York 11733"],
    phone: "631 444 7000"
  },
  {
    title: "New York",
    company: [
      "Renaissance Technologies LLC",
      "Renaissance Institutional Management LLC"
    ],
    address: ["800 Third Avenue", "New York, New York 10022"],
    phone: "212 829 4460"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-red-900 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-light mb-6">
                <span className="bg-white/20 px-4 py-2">Renaissance Technologies</span>
              </h1>
              <p className="text-xl leading-relaxed">
                is an investment management firm that employs mathematical 
                and statistical methods in the design and execution of its investment programs.
              </p>
            </div>
          </div>
        </div>

        {/* Location Information */}
        <LocationInfo locations={locations} />
      </main>

      <Footer />
    </div>
  );
}