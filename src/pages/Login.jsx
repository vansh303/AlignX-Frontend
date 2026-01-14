"use client"

import { ArrowRight, Mail, Lock } from "lucide-react"
import { useState } from "react"

export default function Login({ onNavigate, onLoginSuccess }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }
    onLoginSuccess()
    onNavigate("home")
  }

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-white/60">Login to your AlignX account</p>
        </div>

        <div
          className="p-8 rounded-3xl mb-6"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-white/80 mb-2 font-semibold">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none transition-colors"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgb(255 255 255 / 0.2)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#0ea5e9")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgb(255 255 255 / 0.2)")}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/80 mb-2 font-semibold">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none transition-colors"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgb(255 255 255 / 0.2)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#0ea5e9")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgb(255 255 255 / 0.2)")}
                />
              </div>
            </div>

            {error && (
              <div
                className="p-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  border: "1px solid rgba(239, 68, 68, 0.5)",
                  color: "rgb(248, 113, 113)",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-6"
              style={{
                background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
              }}
            >
              Login to AlignX
              <ArrowRight size={20} />
            </button>
          </form>

          <p className="text-center text-white/60 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => onNavigate("signup")}
              className="transition-colors font-semibold"
              style={{ color: "#0ea5e9" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#0ea5e9")}
            >
              Sign up
            </button>
          </p>
        </div>

        <button
          onClick={() => onNavigate("home")}
          className="w-full px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          Continue as Guest
        </button>
      </div>
    </div>
  )
}
