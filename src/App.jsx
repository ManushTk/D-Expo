import React from "react";
import {
  LayoutDashboard,
  Users,
  Wallet,
  ChartNoAxesCombined,
  Search,
  Bell,
  MapPin,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Customers from "./components/Customers";
import LeadDashboard from "./components/Leader";

const App = () => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "My Customer", icon: Users },
    { name: "Commissions", icon: ChartNoAxesCombined },
    { name: "My Hierarchy", icon: Users },
    { name: "Wallet", icon: Wallet },
  ];

  const stats = [
    {
      title: "Available Balance",
      amount: "₹1,810.00",
    },
    {
      title: "Pending Commission",
      amount: "₹0",
    },
    {
      title: "Paid / Withdrawn",
      amount: "₹500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Background */}
      <div
        className="relative min-h-[395px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(9,48,40,0.92), rgba(9,48,40,0.72)), url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000')",
        }}
      >
        {/* Navbar */}
        <nav className="relative z-10 flex flex-wrap items-center justify-between gap-5 px-6 py-6 lg:px-14">
          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-tight text-yellow-400">
            D-EXPO
            <p className="text-center text-[8px] tracking-[4px]">PROPERTIES</p>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-2 xl:flex">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={`flex items-center gap-2 rounded-full px-5 py-4 text-sm font-medium transition ${
                    item.active
                      ? "border border-white/30 bg-white/15 text-white shadow-lg"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                  {item.name}
                </button>
              );
            })}

            <button className="flex items-center gap-2 px-4 py-4 text-sm text-white/80 hover:text-white">
              Report <ChevronDown size={16} />
            </button>
          </div>

          {/* Search and Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white/70 md:flex">
              <Search size={19} className="text-yellow-400" />
              <input
                type="text"
                placeholder="Search anything here"
                className="w-44 bg-transparent text-sm outline-none placeholder:text-white/70"
              />
            </div>

            <button className="rounded-full border border-white/20 bg-white/10 p-3 text-yellow-400">
              <Bell size={20} />
            </button>

            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Profile"
                className="h-12 w-12 rounded-full border-2 border-white/30 object-cover"
              />
              <ChevronDown className="text-white/70" size={18} />
            </div>
          </div>
        </nav>

        {/* Welcome Section */}
        <div className="px-6 pt-12 lg:px-14">
          <div className="flex items-center gap-2 text-white">
            <MapPin size={20} className="text-yellow-400" />
            <span className="font-medium">Chennai, Kerala</span>
          </div>

          <h1 className="mt-3 text-3xl font-light text-white md:text-4xl">
            Welcome back, <span className="font-semibold">Jhon arias!</span>
          </h1>
        </div>

        {/* Profile Card */}
        <div className="absolute right-6 top-[195px] hidden w-[590px] rounded-[30px] border border-white/40 bg-white/10 p-6 shadow-xl backdrop-blur-xl lg:block xl:right-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-5">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="User"
                className="h-20 w-20 rounded-full border-2 border-yellow-400 object-cover"
              />

              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-yellow-400">
                  <MapPin size={16} />
                  Chennai, Kerala
                </div>

                <h2 className="mt-1 text-3xl font-bold text-white">
                  Jhon arias!
                </h2>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-white/70">Total Income</p>
              <h2 className="text-3xl font-bold text-white">₹1,810.00</h2>
              <p className="text-xs text-yellow-400">
                Direct earnings · +12.5%
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="mr-2 font-semibold text-white">#PRM-000006</span>
            <span className="rounded-md bg-yellow-500/20 px-3 py-1 font-medium text-yellow-300">
              KYC Verified
            </span>
            <span className="rounded-md bg-yellow-500/20 px-3 py-1 font-medium text-yellow-300">
              Bank Linked
            </span>
            <span className="rounded-md bg-green-500/20 px-3 py-1 font-medium text-white">
              Promoter
            </span>

            <button className="ml-auto flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-gray-800 transition hover:bg-yellow-400">
              Withdraw <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Statistics */}
      <div className="relative z-20 -mt-[84px] px-6 pb-10 lg:px-14">
        <div className="grid max-w-[910px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-base font-medium text-gray-600">
                {stat.title}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-[#183d32]">
                  {stat.amount}
                </h2>
                <ArrowUpRight className="text-green-600" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Customers />
      <LeadDashboard />
    </div>
  );
};

export default App;
