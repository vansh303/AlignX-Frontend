"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Assessment from "./pages/Assessment"
import Report from "./pages/Report"
import Exercises from "./pages/Exercises"
import Progress from "./pages/Progress"
import Assistant from "./pages/Assistant"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Pricing from "./pages/Pricing"
import PerformExercise from "./pages/PerformExercise"
import Feedback from "./pages/Feedback"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [performingExerciseId, setPerformingExerciseId] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedExercises, setSelectedExercises] = useState([
    {
      id: 1,
      name: "Neck Flexion Stretch",
      area: "Neck",
      difficulty: "Easy",
      steps: ["Sit upright", "Gently tilt head forward", "Hold 30 seconds", "Return to center"],
      safety: "Do not force the movement. Stop if pain occurs.",
    },
    {
      id: 2,
      name: "Shoulder Blade Squeeze",
      area: "Shoulders",
      difficulty: "Easy",
      steps: ["Sit with back straight", "Pull shoulder blades back", "Hold 5 seconds", "Release and repeat"],
      safety: "Keep chest open. Do 2 sets of 15 reps.",
    },
    {
      id: 3,
      name: "Cat-Cow Stretch",
      area: "Back",
      difficulty: "Medium",
      steps: ["Get on hands and knees", "Arch back (cow)", "Round back (cat)", "Repeat 10 times"],
      safety: "Move slowly and controlled. Do not rush.",
    },
    {
      id: 4,
      name: "Quadriceps Stretch",
      area: "Legs",
      difficulty: "Easy",
      steps: ["Stand on one leg", "Pull foot toward buttocks", "Hold 30 seconds", "Switch legs"],
      safety: "Keep knees aligned. Do not twist.",
    },
    {
      id: 5,
      name: "Knee Extension Isometric",
      area: "Knees",
      difficulty: "Medium",
      steps: ["Sit with legs extended", "Tighten thigh muscles", "Hold 5 seconds", "Release"],
      safety: "Do 3 sets of 10 repetitions daily.",
    },
    {
      id: 6,
      name: "Lumbar Stabilization",
      area: "Lower Back",
      difficulty: "Hard",
      steps: ["Lie on back, knees bent", "Engage core muscles", "Lift hips slightly", "Hold 10 seconds"],
      safety: "Do not hold breath. Breathe steadily throughout.",
    },
  ])

  useEffect(() => {
    document.documentElement.className = isDarkMode ? "dark" : "light-mode"
  }, [isDarkMode])

  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handleStartExercise = (exerciseId) => {
    setPerformingExerciseId(exerciseId)
  }

  const handleExitExercise = () => {
    setPerformingExerciseId(null)
  }

  const renderPage = () => {
    if (performingExerciseId) {
      const exercise = selectedExercises.find((e) => e.id === performingExerciseId)
      if (exercise) {
        return <PerformExercise exercise={exercise} onExit={handleExitExercise} />
      }
    }

    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigation} />
      case "assessment":
        return <Assessment onNavigate={handleNavigation} />
      case "report":
        return <Report onNavigate={handleNavigation} />
      case "exercises":
        return <Exercises exercises={selectedExercises} onStartExercise={handleStartExercise} />
      case "progress":
        return <Progress />
      case "login":
        return <Login onNavigate={handleNavigation} onLoginSuccess={() => setIsLoggedIn(true)} />
      case "signup":
        return <Signup onNavigate={handleNavigation} onSignupSuccess={() => setIsLoggedIn(true)} />
      case "pricing":
        return <Pricing />
      case "feedback":
        return <Feedback onNavigate={handleNavigation} />
      default:
        return <Home onNavigate={handleNavigation} />
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--color-dark-bg)",
        color: "var(--color-text-light)",
      }}
    >
      {!performingExerciseId && (
        <Navbar
          onNavigate={handleNavigation}
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
          isLoggedIn={isLoggedIn}
        />
      )}
      <main className="flex-grow">{renderPage()}</main>
      {!performingExerciseId && <Footer />}

      <Assistant exercises={selectedExercises} onStartExercise={handleStartExercise} />
    </div>
  )
}
