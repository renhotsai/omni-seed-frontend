import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left md:order-1 order-2">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Modern
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Dashboard{" "}
                </span>
                for Data-Driven Teams
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Powerful analytics, intuitive navigation, and customizable
                widgets in one comprehensive SaaS platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  Access Dashboard
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="#pricing"
                  className="inline-flex items-center px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="md:order-2 order-1 relative">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    Omni Dashboard
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="col-span-2 bg-blue-50 rounded-lg p-4 h-32 flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-blue-500" />
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 h-32 flex items-center justify-center">
                    <PieChart className="w-10 h-10 text-purple-500" />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 h-24 flex items-center justify-center mb-4">
                  <LineChart className="w-16 h-8 text-gray-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 h-20 flex items-center justify-center">
                    <div className="text-green-600 font-bold text-xl">+24%</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 h-20 flex items-center justify-center">
                    <div className="text-yellow-600 font-bold text-xl">
                      $12.5k
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -top-10 -right-10"></div>
              <div className="absolute -z-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 -bottom-10 -left-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
