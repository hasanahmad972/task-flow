import React from "react";

export default function UserFooter() {
  return (
<footer
  className="
    fixed
    bottom-0
    h-[56px]
    bg-gray-900
    text-gray-300
    z-40

    /* desktop */
    md:left-60
    md:w-[calc(100%-15rem)]

    /* mobile */
    left-0
    w-full
  "
>
  <div className="h-full px-6 flex items-center justify-between">

    <h3 className="text-sm font-semibold text-white">
      MyApp
    </h3>

    <p className="text-xs">
      © 2026 MyApp. All rights reserved.
    </p>

    <div className="flex gap-4 text-sm">
      <a href="#" className="hover:text-white">Privacy</a>
      <a href="#" className="hover:text-white">Terms</a>
      <a href="#" className="hover:text-white">Contact</a>
    </div>

  </div>
</footer>



  );
}

