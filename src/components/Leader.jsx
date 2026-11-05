import React from "react";
import SideBar from "./SideBar";

/* Small helper so every icon shares the same stroke style */
const Icon = ({ children, className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export default function LeadDashboard() {
  const leadStats = [
    { label: "Total Leads", value: "24", tone: "gold" },
    { label: "New", value: "08" },
    { label: "Contacted", value: "06" },
    { label: "Follow-up", value: "11" },
    { label: "Site Visit", value: "05" },
    { label: "Converted", value: "05" },
    { label: "Lost", value: "0", tone: "red" },
  ];

  const earners = [
    {
      rank: 1,
      name: "Arjun Menon",
      id: "#PRM-000128",
      amount: "₹12,850",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      rank: 2,
      name: "Rahul Sharma",
      id: "#PRM-000117",
      amount: "₹10,420",
      initials: "RS",
    },
    {
      rank: 3,
      name: "Sneha Nair",
      id: "#PRM-000135",
      amount: "₹9,875",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      rank: 4,
      name: "Vishnu Raj",
      id: "#PRM-000109",
      amount: "₹8,640",
      initials: "VR",
    },
  ];

  const payments = [
    {
      label: "Paid",
      percent: "70%",
      amount: "₹12,45,000",
      value: 1245000,
      color: "#2d8059",
    },
    {
      label: "Unpaid",
      percent: "",
      amount: "₹3,20,000",
      value: 320000,
      color: "#c28a28",
    },
    {
      label: "Overdue",
      percent: "15%",
      amount: "₹1,85,000",
      value: 185000,
      color: "#c9514e",
    },
  ];




  // Donut chart calculations
  const size = 300;
  const stroke = 48;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const total = payments.reduce((sum, p) => sum + p.value, 0);
  let offset = 0;

  return (
    <div className="min-h-screen bg-slate-100/70 font-sans antialiased lg:flex">
      {/* ================= Main content ================= */}
      <main className="min-w-0 flex-1 space-y-5 p-6 lg:p-10">
        {/* ---------- Lead Tracker ---------- */}
        <section className="rounded-2xl bg-white px-8 pb-6 pt-7 shadow-sm">
          <div className="flex items-start justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Lead Tracker</h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Track your leads from enquiry to conversion
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-1 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
            >
              View all Leads
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.5 4.5 13 10l-5.5 5.5" />
              </svg>
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-y-5 sm:grid-cols-4 xl:grid-cols-7">
            {leadStats.map((s, i) => (
              <div
                key={s.label}
                className={`px-0 xl:px-5 ${i === 0 ? "xl:pl-0" : "xl:border-l xl:border-slate-100"}`}
              >
                <div
                  className={`text-2xl font-bold ${
                    s.tone === "gold"
                      ? "text-amber-600"
                      : s.tone === "red"
                        ? "text-red-500"
                        : "text-emerald-950"
                  }`}
                >
                  {s.value}
                </div>
                <div
                  className={`mt-1.5 text-base ${s.tone === "red" ? "text-red-500" : "text-slate-600"}`}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-5 xl:grid-cols-[1fr_1.1fr]">
          {/* ---------- Highest Earner ---------- */}
          <section className="rounded-2xl bg-gradient-to-br from-[#2a4a39] via-[#1f3a2d] to-[#183024] p-7 shadow-sm">
            <header className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-2xl">
                🏆
              </div>
              <div className="leading-tight">
                <h2 className="text-xl font-semibold text-white">
                  Highest Earner
                </h2>
                <p className="text-sm font-semibold text-amber-300">
                  August 2026
                </p>
              </div>
            </header>

            <ul className="mt-6 space-y-3">
              {earners.map((p) => {
                const first = p.rank === 1;
                return (
                  <li
                    key={p.id}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
                      first
                        ? "bg-gradient-to-r from-amber-200/20 to-white/10"
                        : "bg-white/10"
                    }`}
                  >
                    <span className="w-5 text-center text-lg font-medium text-white">
                      {p.rank}
                    </span>

                    {p.avatar ? (
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="h-12 w-12 rounded-full border-2 border-white/90 object-cover"
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-emerald-800 to-emerald-950 text-base font-bold text-amber-300 ring-1 ring-white/10">
                        {p.initials}
                      </div>
                    )}

                    <div className="min-w-0 flex-1 leading-tight">
                      <p className="truncate text-[15px] font-semibold text-white">
                        {p.name}
                      </p>
                      <p className="mt-0.5 text-xs text-white/60">{p.id}</p>
                    </div>

                    <span className="text-base font-bold text-amber-300">
                      {p.amount}
                    </span>

                    <span
                      className={`ml-2 rounded-lg px-2.5 py-1.5 text-xs font-bold ${
                        first
                          ? "bg-amber-300 text-emerald-950"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      #1
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ---------- Payment Status ---------- */}
          <section className="rounded-2xl bg-white px-8 pb-8 pt-7 shadow-sm">
            <header className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-slate-900">
                Payment Status
              </h2>
              <span className="text-base font-semibold text-slate-500">
                August 2026
              </span>
            </header>

            <div className="mt-6 flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
              <div className="flex w-full flex-col justify-between gap-10 self-stretch sm:w-auto">
                <div>
                  <p className="text-6xl font-bold tracking-tight text-slate-900">
                    70%
                  </p>
                  <p className="mt-1 text-base text-slate-600">Paid</p>
                </div>

                <ul className="space-y-3">
                  {payments.map((p) => (
                    <li
                      key={p.label}
                      className="flex items-center gap-3 text-[15px]"
                    >
                      <span
                        className="h-5 w-5 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <span className="font-medium text-slate-600">
                        {p.label}
                      </span>
                      <span className="font-semibold text-slate-900">
                        {p.percent && <span className="mr-2">{p.percent}</span>}
                        {p.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Donut chart */}
              <div className="h-56 w-56 shrink-0">
                <svg
                  viewBox={`0 0 ${size} ${size}`}
                  className="h-full w-full -rotate-90"
                >
                  {payments.map((s) => {
                    const len = (s.value / total) * circumference;
                    const circle = (
                      <circle
                        key={s.label}
                        cx={size / 2}
                        cy={size / 2}
                        r={r}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={stroke}
                        strokeDasharray={`${len - 3} ${circumference - len + 3}`}
                        strokeDashoffset={-offset}
                      />
                    );
                    offset += len;
                    return circle;
                  })}
                </svg>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ================= Right sidebar ================= */}
      <SideBar />
    </div>
  );
}
