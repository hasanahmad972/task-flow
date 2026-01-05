import React from "react";

export default function UserFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left */}
        <h3 className="text-lg font-semibold text-white">
          MyApp
        </h3>

        {/* Center */}
        <p className="text-sm mt-2 md:mt-0">
          © 2026 MyApp. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}

