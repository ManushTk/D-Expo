
import React from "react";
import { ChevronRight, Info } from "lucide-react";

const Customers = () => {
  const customerData = [
    { label: "Total Onboarded", value: "6" },
    { label: "Active", value: "6" },
    { label: "Inactive", value: "0" },
    { label: "Paid This Month", value: "0" },
    { label: "Unpaid", value: "0" },
    { label: "Overdue", value: "6" },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-900">
          My Customers
        </h2>

        <button className="flex items-center gap-1 rounded-lg bg-orange-50 px-3 py-1.5 text-sm font-semibold text-yellow-700 hover:bg-orange-100">
          View all customers
          <ChevronRight size={17} />
        </button>
      </div>

      {/* Customer Details and Income Chart */}
      <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-[1fr_1.15fr]">

        {/* Customer Statistics */}
        <div className="space-y-4 border-gray-100 lg:border-r lg:pr-8">

          {customerData.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between"
            >
              <span className="text-base font-medium text-gray-600">
                {item.label}
              </span>

              <span className="text-lg font-bold text-gray-800">
                {item.value}
              </span>
            </div>
          ))}

        </div>

        {/* Income Breakdown */}
        <div className="flex flex-col items-center justify-around gap-6 sm:flex-row">

          {/* Donut Chart */}
          <div className="relative flex h-[210px] w-[210px] shrink-0 items-center justify-center rounded-full"
            style={{
              background:
                "conic-gradient(#328366 0% 58%, #c68b2c 58% 100%)",
            }}
          >
            <div className="flex h-[145px] w-[145px] flex-col items-center justify-center rounded-full bg-white">
              <h3 className="text-xl font-bold text-gray-900">
                ₹3,120.00
              </h3>
              <p className="text-sm text-gray-500">
                Total Value
              </p>
            </div>
          </div>

          {/* Income Details */}
          <div className="w-full flex-1">

            <h3 className="mb-7 text-lg font-bold text-gray-900">
              Income Breakdown
            </h3>

            <div className="space-y-6">

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-gray-500">
                  Direct Bonus
                </span>
                <span className="whitespace-nowrap text-sm font-bold text-gray-800">
                  58% ₹1,810.00
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-gray-500">
                  Level Income
                </span>
                <span className="text-sm font-bold text-gray-800">
                  — ₹0.00
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-gray-500">
                  Pending Payout
                </span>
                <span className="whitespace-nowrap text-sm font-bold text-gray-800">
                  42% ₹1,310.00
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Pending Payout Message */}
      <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gray-50 px-3 py-2 text-xs text-gray-500">
        <Info size={14} />
        ₹1,310.00 pending payout — your first settlement is on the way.
      </div>

    </div>
  );
};

export default Customers;
