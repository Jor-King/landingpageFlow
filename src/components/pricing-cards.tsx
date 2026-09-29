import React, { useState } from "react";
import { PLANS } from "@/constants/flow-data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2Icon } from "lucide-react";
import { motion } from "framer-motion";

export const PricingCards = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Tabs */}
      <div className="flex items-center justify-center p-1 bg-neutral-100 border border-neutral-200 rounded-xl shadow-xs">
        <button
          onClick={() => setActiveTab("monthly")}
          className={cn(
            "relative px-6 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
            activeTab === "monthly" ? "text-neutral-900 font-semibold" : "text-neutral-500 hover:text-neutral-900"
          )}
        >
          {activeTab === "monthly" && (
            <motion.div
              layoutId="active-tab-indicator"
              transition={{ type: "spring", bounce: 0.4 }}
              className="absolute inset-0 bg-white shadow-sm rounded-lg z-0"
            />
          )}
          <span className="relative z-10">Monthly</span>
        </button>

        <button
          onClick={() => setActiveTab("yearly")}
          className={cn(
            "relative px-6 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
            activeTab === "yearly" ? "text-neutral-900 font-semibold" : "text-neutral-500 hover:text-neutral-900"
          )}
        >
          {activeTab === "yearly" && (
            <motion.div
              layoutId="active-tab-indicator"
              transition={{ type: "spring", bounce: 0.4 }}
              className="absolute inset-0 bg-white shadow-sm rounded-lg z-0"
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5">
            Yearly
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-blue-100 text-blue-700">
              -12%
            </span>
          </span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:gap-8 max-w-5xl mx-auto pt-10">
        {PLANS.map((plan) => {
          const isPro = plan.name === "Flow Pro";
          const price =
            activeTab === "monthly" ? plan.price.monthly : plan.price.yearly;

          return (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col w-full rounded-2xl bg-white transition-all duration-300",
                isPro
                  ? "border-2 border-blue-600 shadow-[0_12px_40px_-10px_rgba(37,99,235,0.18)] lg:-translate-y-2 ring-1 ring-blue-500/20"
                  : "border border-neutral-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-neutral-300"
              )}
            >
              <CardHeader
                className={cn(
                  "border-b rounded-t-2xl",
                  isPro
                    ? "bg-gradient-to-b from-blue-50/80 to-blue-50/20 border-blue-100"
                    : "bg-neutral-50/60 border-neutral-100"
                )}
              >
                <div className="flex items-center justify-between">
                  <CardTitle
                    className={cn(
                      isPro ? "text-blue-900 font-bold" : "text-neutral-800",
                      "text-xl font-heading"
                    )}
                  >
                    {plan.name}
                  </CardTitle>
                  {isPro && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-xs">
                      Popular
                    </span>
                  )}
                </div>
                <CardDescription className="text-neutral-500 text-xs pt-1">
                  {plan.info}
                </CardDescription>
                <h5 className="text-4xl font-bold flex items-baseline pt-4 text-neutral-950 font-mono tracking-tight">
                  ${price}
                  <span className="text-sm text-neutral-500 font-normal ml-1">
                    {activeTab === "monthly" ? "/mes" : "/año"}
                  </span>
                </h5>
              </CardHeader>

              <CardContent className="pt-6 space-y-3.5 flex-1">
                {plan.features.map((feature, index) => {
                  const tooltip =
                    "tooltip" in feature ? (feature as any).tooltip : undefined;
                  return (
                    <div key={index} className="flex items-center gap-2.5">
                      <CheckCircle2Icon className="text-blue-600 w-4 h-4 shrink-0" />
                      <p
                        title={tooltip}
                        className={cn(
                          "text-sm text-neutral-700 leading-tight",
                          tooltip &&
                            "border-b border-dashed border-neutral-300 cursor-help"
                        )}
                      >
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
              </CardContent>

              <CardFooter className="w-full mt-auto pt-4 pb-6">
                <a
                  href={plan.btn.href}
                  className={cn(
                    buttonVariants({
                      className: isPro
                        ? "bg-blue-600 hover:bg-blue-700 text-white w-full shadow-md shadow-blue-600/25 py-2.5 font-medium"
                        : "w-full bg-neutral-900 text-white hover:bg-neutral-800 py-2.5",
                    })
                  )}
                >
                  {plan.btn.text}
                </a>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCards;
