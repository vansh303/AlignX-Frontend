"use client"

import { ChevronDown, AlertCircle, Play } from "lucide-react"
import { useState } from "react"

export default function ExerciseCard({ exercise, onStartExercise }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const difficultyColor = {
    Easy: { bg: "rgba(16, 185, 129, 0.2)", color: "rgb(16, 185, 129)" },
    Medium: { bg: "rgba(245, 158, 11, 0.2)", color: "rgb(245, 158, 11)" },
    Hard: { bg: "rgba(239, 68, 68, 0.2)", color: "rgb(239, 68, 68)" },
  }

  const colors = difficultyColor[exercise.difficulty]

  return (
    <div
      className="p-6 rounded-2xl transition-all duration-300"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.5)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgb(255 255 255 / 0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(14, 165, 233, 0.15)"
        e.currentTarget.style.borderColor = "rgba(14, 165, 233, 0.2)"
        e.currentTarget.style.transform = "translateY(-2px)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none"
        e.currentTarget.style.borderColor = "rgb(255 255 255 / 0.1)"
        e.currentTarget.style.transform = "translateY(0)"
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg text-white/95">{exercise.name}</h3>
          <p className="text-white/60 text-sm">Target: {exercise.area}</p>
        </div>
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: colors.bg,
            color: colors.color,
          }}
        >
          {exercise.difficulty}
        </span>
      </div>

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => onStartExercise(exercise.id)}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg active:scale-95"
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
          <Play size={18} />
          Start Exercise
        </button>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
      >
        <span className="text-white/80">View Instructions</span>
        <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
      </button>

      {isExpanded && (
        <div
          className="space-y-4 border-t pt-4 mt-4 animate-fadeInUp"
          style={{ borderColor: "rgb(255 255 255 / 0.1)" }}
        >
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Steps:</h4>
            <ol className="space-y-2">
              {exercise.steps.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-white/80 text-sm">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(14, 165, 233, 0.2)",
                      color: "#0ea5e9",
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div
            className="border rounded-lg p-3 flex gap-3 transition-all duration-200"
            style={{
              backgroundColor: "rgba(245, 158, 11, 0.1)",
              borderColor: "rgba(245, 158, 11, 0.3)",
            }}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "rgb(245, 158, 11)" }} />
            <p className="text-sm text-white/80">{exercise.safety}</p>
          </div>
        </div>
      )}
    </div>
  )
}
