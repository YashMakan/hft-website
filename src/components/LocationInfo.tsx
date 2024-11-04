import React from 'react';

interface Location {
  title: string;
  company: string[];
  address: string[];
  phone: string;
}

interface LocationInfoProps {
  locations: Location[];
}

export default function LocationInfo({ locations }: LocationInfoProps) {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {locations.map((location, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-red-800 text-xl font-medium">{location.title}</h2>
            {location.company.map((line, i) => (
              <p key={i} className="text-gray-800">{line}</p>
            ))}
            {location.address.map((line, i) => (
              <p key={i} className="text-gray-600">{line}</p>
            ))}
            <p className="text-gray-600">{location.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}