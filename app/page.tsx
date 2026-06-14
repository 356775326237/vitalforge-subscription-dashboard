"use client";

import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Hernán</h1>
              <p className="text-gray-400 mt-1">
                Manage your VitalForge subscription and performance insights.
              </p>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition"
            >
              Log Out
            </button>
          </header>

          <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-gray-400">Current Plan</p>
              <h2 className="text-3xl font-bold mt-2 text-green-500">
                Premium
              </h2>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-gray-400">Subscription Status</p>
              <h2 className="text-3xl font-bold mt-2">Active</h2>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-gray-400">Next Renewal</p>
              <h2 className="text-3xl font-bold mt-2">July 15</h2>
            </div>
          </section>

          <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold">Subscription Management</h2>
            <p className="text-gray-400 mt-2">
              Review your current plan and manage your membership options.
            </p>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition">
                Upgrade Plan
              </button>

              <button className="bg-zinc-800 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-700 transition">
                Pause Subscription
              </button>

              <button className="bg-red-500/20 text-red-400 px-6 py-3 rounded-lg font-semibold hover:bg-red-500/30 transition">
                Cancel Subscription
              </button>
            </div>
          </section>
          <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
  <h2 className="text-2xl font-bold">Subscription Analytics</h2>

  <p className="text-gray-400 mt-2">
    Monthly supplement usage and subscription activity.
  </p>
  <div className="grid md:grid-cols-3 gap-4 mt-6">
  <div className="bg-zinc-800 p-4 rounded-xl">
    <p className="text-gray-400">Monthly Revenue</p>
    <h3 className="text-3xl font-bold">$4,250</h3>
  </div>

  <div className="bg-zinc-800 p-4 rounded-xl">
    <p className="text-gray-400">Active Subscribers</p>
    <h3 className="text-3xl font-bold">1,284</h3>
  </div>

  <div className="bg-zinc-800 p-4 rounded-xl">
    <p className="text-gray-400">Retention Rate</p>
    <h3 className="text-3xl font-bold">92%</h3>
  </div>
</div>

  <div className="mt-8 flex items-end gap-4 h-40">
    {[40, 55, 70, 60, 85, 95].map((height, index) => (
      <div
        key={index}
        className="flex-1 bg-green-500 rounded-t-lg"
        style={{ height: `${height}%` }}
      />
    ))}
  </div>

  <div className="mt-4 flex justify-between text-sm text-gray-400">
    <span>Jan</span>
    <span>Feb</span>
    <span>Mar</span>
    <span>Apr</span>
    <span>May</span>
    <span>Jun</span>
  </div>
</section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-center">
          VitalForge Dashboard
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Sign in to manage your subscription
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setIsLoggedIn(true);
          }}
          className="mt-8 space-y-4"
        >
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-black font-semibold py-3 rounded-lg hover:bg-green-400 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Demo authentication for challenge purposes
        </p>
      </div>

      {isLoggedIn && (
  <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
    <h2 className="text-3xl font-bold mb-6">
      Subscription Dashboard
    </h2>

    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <div className="bg-zinc-800 p-4 rounded-xl">
        <p className="text-gray-400">Plan</p>
        <h3 className="text-xl font-bold text-green-400">
          Premium
        </h3>
      </div>

      <div className="bg-zinc-800 p-4 rounded-xl">
        <p className="text-gray-400">Status</p>
        <h3 className="text-xl font-bold">
          Active
        </h3>
      </div>

      <div className="bg-zinc-800 p-4 rounded-xl">
        <p className="text-gray-400">Renewal</p>
        <h3 className="text-xl font-bold">
          July 15, 2026
        </h3>
      </div>
    </div>

    <div className="bg-zinc-800 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-4">
        Analytics
      </h3>

      <div className="space-y-4">
        <div>
          <p>Monthly Usage</p>
          <div className="w-full bg-zinc-700 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full w-3/4"></div>
          </div>
        </div>

        <div>
          <p>Subscription Engagement</p>
          <div className="w-full bg-zinc-700 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full w-2/3"></div>
          </div>
        </div>

        <div>
          <p>Customer Activity</p>
          <div className="w-full bg-zinc-700 rounded-full h-4">
            <div className="bg-purple-500 h-4 rounded-full w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </main>
  );
}