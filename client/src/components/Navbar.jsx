import { useState } from "react";
import { Home, Package, LayoutGrid } from "lucide-react"; // Icons for tabs

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { name: "Overview", icon: <Home className="w-4 h-4" /> },
    { name: "Projects", icon: <LayoutGrid className="w-4 h-4" /> },
    { name: "Packages", icon: <Package className="w-4 h-4" /> },
  ];

  return (
    <header className="border-b border-zinc-300">
      <div className="container mx-auto flex justify-center">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.name
                  ? "border-b-2 border-black text-black"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
