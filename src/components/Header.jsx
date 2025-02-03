import { Link } from "react-router-dom";
import { Home, Binoculars, Wrench, Bell, EllipsisVertical } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-background bg-gray-400 shadow-lg shadow-gray-300/50">
      <div className="container flex h-16 items-center justify-between px-20">
        <Link to="" className="flex items-center space-x-2">
          <div className="text-xl font-bold">
            <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo" />
          </div>
        </Link>

        <nav className="flex items-center space-x-4">
          <button variant="ghost" size="icon" aria-label="Share" className="inline-flex items-center justify-center rounded-full bg-blue-600/100 p-2">
            <Home className="h-4 w-4 stroke-white" />
          </button>
          <button variant="ghost" size="icon" aria-label="binoculars" className="inline-flex items-center justify-center rounded-full bg-blue-600/100 p-2">
            <Binoculars className="h-4 w-4 stroke-white" />
          </button>
          <button variant="ghost" size="icon" aria-label="Wrench" className="inline-flex items-center justify-center rounded-full bg-blue-600/100 p-2">
            <Wrench className="h-4 w-4 stroke-white" />
          </button>
          <button variant="ghost" size="icon" aria-label="Notifications" className="inline-flex items-center justify-center rounded-full bg-blue-600/100 p-2">
            <Bell className="h-4 w-4 stroke-white" />
          </button>
          <button variant="ghost" size="icon" aria-label="More options" >
            <EllipsisVertical className="h-6 w-6 stroke-blue-600/100" />
          </button>
        </nav>
      </div>
    </header>
  )
}

