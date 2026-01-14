"use client"

import { TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"
import ProgressBar from "../components/ProgressBar"

export default function Report({ onNavigate }) {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Posture Report</h1>
          <p className="text-white/60">Comprehensive analysis from your last assessment</p>
        </div>

        {/* Overall Score */}
        <div
          className="p-8 rounded-3xl mb-8"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <div className="text-center mb-8">
            <p className="text-white/60 mb-4">Overall Posture Score</p>
            <div
              className="text-7xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #0ea5e9, #06b6d4)",
              }}
            >
              72
            </div>
            <p className="text-white/70">Good alignment with room for improvement</p>
          </div>

          {/* Score breakdown */}
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgb(255 255 255 / 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle style={{ color: "rgb(16, 185, 129)" }} size={24} />
                <span className="font-semibold">Neck</span>
              </div>
              <div style={{ color: "rgb(16, 185, 129)" }} className="text-3xl font-bold mb-2">
                85
              </div>
              <p className="text-white/60 text-sm">Excellent alignment</p>
            </div>

            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgb(255 255 255 / 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle style={{ color: "rgb(245, 158, 11)" }} size={24} />
                <span className="font-semibold">Spine</span>
              </div>
              <div style={{ color: "rgb(245, 158, 11)" }} className="text-3xl font-bold mb-2">
                68
              </div>
              <p className="text-white/60 text-sm">Needs improvement</p>
            </div>

            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgb(255 255 255 / 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown style={{ color: "rgb(239, 68, 68)" }} size={24} />
                <span className="font-semibold">Knees</span>
              </div>
              <div style={{ color: "rgb(239, 68, 68)" }} className="text-3xl font-bold mb-2">
                55
              </div>
              <p className="text-white/60 text-sm">Requires attention</p>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div
            className="p-8 rounded-3xl"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <h2 className="text-2xl font-semibold mb-6">Back Pain Risk</h2>
            <ProgressBar label="Risk Level" value={65} max={100} />
            <div
              className="mt-6 p-4 rounded-lg"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.2)",
                border: "1px solid rgba(245, 158, 11, 0.5)",
              }}
            >
              <p className="text-white/80 text-sm">
                Your current posture shows moderate risk for back pain. Regular corrective exercises can reduce this
                risk significantly.
              </p>
            </div>
          </div>

          <div
            className="p-8 rounded-3xl"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <h2 className="text-2xl font-semibold mb-6">Knee Alignment Risk</h2>
            <ProgressBar label="Risk Level" value={42} max={100} gradientStart="#ef4444" gradientEnd="#f87171" />
            <div
              className="mt-6 p-4 rounded-lg"
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                border: "1px solid rgba(239, 68, 68, 0.5)",
              }}
            >
              <p className="text-white/80 text-sm">
                Knee alignment shows signs of stress. Strengthening exercises are recommended.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div
          className="p-8 rounded-3xl mb-8"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <h2 className="text-2xl font-semibold mb-6">Detailed Metrics</h2>
          <div className="space-y-6">
            <ProgressBar label="Neck Forward Position" value={12} max={30} />
            <ProgressBar label="Thoracic Kyphosis Angle" value={35} max={50} />
            <ProgressBar label="Lumbar Lordosis Angle" value={28} max={40} />
            <ProgressBar label="Knee Valgus Angle" value={18} max={25} />
            <ProgressBar label="Pelvic Tilt Angle" value={8} max={15} />
          </div>
        </div>

        {/* Recommendations */}
        <div
          className="p-8 rounded-3xl"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <h2 className="text-2xl font-semibold mb-6">Recommended Exercises</h2>
          <p className="text-white/70 mb-6">
            Based on your assessment results, we recommend the following exercises to improve your posture:
          </p>
          <div className="space-y-3">
            {[
              "Neck Flexion Stretch - Reduce forward neck position",
              "Cat-Cow Stretch - Improve spinal flexibility",
              "Lumbar Stabilization - Strengthen lower back",
              "Quadriceps Stretch - Improve leg alignment",
              "Shoulder Blade Squeeze - Open up chest",
            ].map((exercise, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#06b6d4" }} />
                <span className="text-white/80">{exercise}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigate("exercises")}
            className="mt-8 w-full px-6 py-4 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            style={{
              background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
            }}
          >
            Start Recommended Exercises
          </button>
        </div>
      </div>
    </div>
  )
}
