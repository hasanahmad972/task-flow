import React from 'react'

export default function AdminFooter() {
  return (
  <footer
  className="mt-auto px-6 py-3
             bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100
             border-t border-indigo-200/60
             text-center"
>
  <p className="text-sm text-gray-600">
    © {new Date().getFullYear()} 
    <span className="mx-1 font-semibold
                     bg-gradient-to-r from-indigo-600 to-purple-600
                     bg-clip-text text-transparent">
      Admin Console
    </span>
    · All rights reserved
  </p>
</footer>


  )
}
