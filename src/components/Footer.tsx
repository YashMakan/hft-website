import React from 'react';
import { BarChart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <BarChart className="h-6 w-6 text-red-800 mr-2" />
            <span className="text-xl">Renaissance</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-400 space-y-4">
          <div className="flex justify-center space-x-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="/gdpr" className="hover:text-white">EU GDPR Policy</a>
            <span>|</span>
            <a href="/brokercheck" className="hover:text-white">FINRA's BrokerCheck</a>
            <span>|</span>
            <a href="/support" className="hover:text-white">Support</a>
          </div>
          
          <p className="text-center">© {new Date().getFullYear()} Renaissance Technologies LLC. All Rights Reserved.</p>
          
          <p className="text-center max-w-4xl mx-auto">
            The materials on this website are for illustration and discussion purposes only and do not constitute an offering. 
            An offering may be made only by delivery of a confidential offering memorandum to appropriate investors. 
            PAST PERFORMANCE IS NO GUARANTEE OF FUTURE RESULTS.
          </p>
          
          <p className="text-center">
            www.rentec.com and www.renfund.com are the only official Renaissance Technologies LLC websites. 
            Neither Renaissance Technologies nor any of its affiliates operates any other publicly available website. 
            Other websites purporting to be associated with our firm or our funds are not legitimate.
          </p>
        </div>
      </div>
    </footer>
  );
}