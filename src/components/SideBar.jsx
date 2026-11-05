
import React from "react";
import {
  Wallet,
  CreditCard,
  FileText,
  Users,
  User,
  ShoppingBag,
  Gift,
  Trophy,
  CheckCircle,
  Clock,
  Activity,
} from "lucide-react";

const SideBar = () => {
  // Quick Actions
  const quickActions = [
    {
      label: "Request Withdrawal",
      icon: <Wallet size={28} />,
    },
    {
      label: "View Commissions",
      icon: <CreditCard size={28} />,
    },
    {
      label: "My Downline",
      icon: <Users size={28} />,
    },
  ];

  // Overview
  const overview = [
    {
      label: "Total Customers",
      value: "1,250",
      icon: <Users size={20} />,
    },
    {
      label: "Active Customers",
      value: "850",
      icon: <User size={20} />,
    },
    {
      label: "Total Orders",
      value: "2,450",
      icon: <ShoppingBag size={20} />,
    },
    {
      label: "Total Earnings",
      value: "₹45,000",
      icon: <Wallet size={20} />,
    },
  ];

  // Rewards
  const rewards = [
    {
      title: "Bronze Member",
      customers: "10 Customers",
      tile: "bg-orange-100 text-orange-600",
      content: <Trophy size={22} />,
    },
    {
      title: "Silver Member",
      customers: "25 Customers",
      tile: "bg-slate-200 text-slate-600",
      content: <Gift size={22} />,
    },
    {
      title: "Gold Member",
      customers: "50 Customers",
      tile: "bg-yellow-100 text-yellow-600",
      content: <Trophy size={22} />,
    },
  ];

  // Recent Activities
  const activities = [
    {
      title: "New customer registered",
      desc: "A new customer joined your team",
      time: "2 min ago",
      box: "bg-emerald-100 text-emerald-700",
      icon: <Users size={22} />,
    },
    {
      title: "Commission received",
      desc: "Your commission has been credited",
      time: "1 hour ago",
      box: "bg-blue-100 text-blue-700",
      icon: <Wallet size={22} />,
    },
    {
      title: "New order completed",
      desc: "An order was successfully completed",
      time: "3 hours ago",
      box: "bg-purple-100 text-purple-700",
      icon: <CheckCircle size={22} />,
    },
  ];

  return (
    <aside className="w-full shrink-0 border-t border-slate-200 bg-white lg:w-[380px] lg:border-l lg:border-t-0">

     

      {/* Rewards */}
      <section className="px-8 pb-8 pt-8">
        <h2 className="text-xl font-bold text-slate-900">
          Rewards
        </h2>

        <ul className="mt-5">
          {rewards.map((item, i) => (
            <li
              key={item.title}
              className="relative flex items-center gap-4 pb-8 last:pb-0"
            >
              {i !== rewards.length - 1 && (
                <span className="absolute left-[11px] top-8 h-full w-px bg-slate-300" />
              )}

              <span className="relative z-10 h-6 w-6 shrink-0 rounded-full border-2 border-slate-300 bg-white" />

              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${item.tile}`}>
                {item.content}
              </div>

              <div className="min-w-0 leading-tight">
                <p className="truncate text-base font-semibold text-slate-900">
                  {item.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.customers}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-slate-100" />

      {/* Recent Activity */}
      <section className="px-8 pb-8 pt-8">
        <h2 className="text-xl font-bold text-slate-900">
          Recent Activity
        </h2>

        <ul className="mt-5 space-y-6">
          {activities.map((a) => (
            <li key={a.title} className="flex items-start gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${a.box}`}>
                {a.icon}
              </div>

              <div className="min-w-0 flex-1 leading-tight">
                <p className="text-base font-semibold text-slate-900">
                  {a.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {a.desc}
                </p>
              </div>

              <span className="shrink-0 pt-0.5 text-xs font-medium text-slate-600">
                {a.time}
              </span>
            </li>
          ))}
        </ul>
      </section>
       {/* Quick Actions */}
      <section className="px-8 pb-7 pt-8">
        <h2 className="text-xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {quickActions.map((a) => (
            <button
              key={a.label}
              type="button"
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <span className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-emerald-950 transition group-hover:bg-slate-50 group-focus-visible:ring-2 group-focus-visible:ring-emerald-700">
                {a.icon}
              </span>

              <span className="max-w-[84px] text-center text-xs font-semibold leading-snug text-slate-600">
                {a.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="border-t border-slate-100" />

      {/* Overview */}
      <section className="px-8 pb-8 pt-7">
        <h2 className="text-xl font-bold text-slate-900">
          Overview
        </h2>

        <ul className="mt-5 space-y-5">
          {overview.map((o) => (
            <li key={o.label} className="flex items-center gap-3">
              <span className="text-emerald-950">
                {o.icon}
              </span>

              <span className="flex-1 text-[15px] font-medium text-slate-600">
                {o.label}
              </span>

              <span className="text-[15px] font-bold text-slate-900">
                {o.value}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-slate-100" />
    </aside>
  );
};

export default SideBar;
