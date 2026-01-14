"use client"

import { Menu, X, Sun, Moon, LogOut } from "lucide-react"
import { useState } from "react"
import FeedbackModal from "./FeedbackModal"
import untitleddesign from "../assets/Untitled design.png"

export default function Navbar({ onNavigate, isDarkMode, onThemeToggle, isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Features", value: "exercises" },
    { label: "Pricing", value: "pricing" },
    { label: "Feedback", value: "feedback" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-300"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.5)",
        borderColor: "rgb(255 255 255 / 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div onClick={() => onNavigate("home")} className="flex items-center gap-2 cursor-pointer group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(14, 165, 233, 0.6)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <img src={untitleddesign} alt="" className="w-full h-full object-cover" />
            </div>
            <span
              className="hidden sm:inline text-xl font-bold bg-clip-text text-transparent transition-all duration-300"
              style={{
                backgroundImage: "linear-gradient(to right, #0ea5e9, #06b6d4)",
              }}
            >
              AlignX
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className="text-white/70 hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-sky-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            {/* Theme Toggle */}
            <button onClick={onThemeToggle} className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <div className="hidden sm:flex gap-3">
                <button
                  onClick={() => onNavigate("login")}
                  className="px-4 py-2 text-white/80 hover:text-white transition-all duration-300 relative group"
                >
                  Login
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-sky-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => onNavigate("signup")}
                  className="px-4 py-2 text-white rounded-lg hover:shadow-lg transition-all duration-300 active:scale-95"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 25px rgba(14, 165, 233, 0.5)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate("home")}
                className="px-4 py-2 flex items-center gap-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  color: "rgb(248, 113, 113)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(239, 68, 68, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden pb-4 space-y-3 border-t pt-4 animate-slideDown"
            style={{ borderColor: "rgb(255 255 255 / 0.1)" }}
          >
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value)
                  setIsOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="block w-full text-left px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg flex items-center gap-2 transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              <span className="hidden sm:inline">Toggle Theme</span>
            </button>
            {!isLoggedIn && (
              <>
                <button
                  onClick={() => {
                    onNavigate("login")
                    setIsOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    onNavigate("signup")
                    setIsOpen(false)
                  }}
                  className="block w-full px-4 py-2 text-white rounded-lg transition-all duration-300"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                  }}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Feedback Modal */}
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </nav>
  )
}
