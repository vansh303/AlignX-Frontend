"use client"

import { Camera, Play, Pause, Square } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function Assessment({ onNavigate }) {
  const [stage, setStage] = useState("bodypart") // bodypart, permission, analysis, complete
  const [selectedBodyPart, setSelectedBodyPart] = useState(null)
  const [cameraGranted, setCameraGranted] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const videoRef = useRef(null)
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)

  const bodyParts = [
    { name: "Shoulder", icon: "肩" },
    { name: "Knee", icon: "膝" },
    { name: "Back", icon: "背" },
    { name: "Neck", icon: "首" },
  ]

  useEffect(() => {
    let interval
    if (isStarted && !isPaused) {
      interval = setInterval(() => setTimeElapsed((t) => t + 1), 1000)
    }
    return () => clearInterval(interval)
  }, [isStarted, isPaused])

  const handleSelectBodyPart = (bodyPart) => {
    setSelectedBodyPart(bodyPart)
    setStage("permission")
  }

  const handleGrantCamera = () => {
    setCameraGranted(true)
    setStage("analysis")
  }

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setIsStarted(true)
    } catch (err) {
      alert("Camera access denied. Please allow camera permissions.")
    }
  }

  const handlePauseCamera = () => {
    setIsPaused(!isPaused)
  }

  const handleStopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach((track) => track.stop())
    }
    setIsStarted(false)
    setIsPaused(false)
    setTimeElapsed(0)
  }

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      handleStopCamera()
      setStage("complete")
      setIsAnalyzing(false)
    }, 3000)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Posture Assessment</h1>
          <p className="text-white/60">Real-time computer vision posture analysis</p>
        </div>

        {stage === "bodypart" && (
          <div
            className="p-12 rounded-3xl"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Which body part or movement do you want to assess?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {bodyParts.map((part) => (
                <button
                  key={part.name}
                  onClick={() => handleSelectBodyPart(part.name)}
                  className="p-8 rounded-2xl text-center transition-all hover:shadow-lg hover:scale-105"
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.5)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgb(255 255 255 / 0.1)",
                  }}
                >
                  <div className="text-4xl mb-4" style={{ color: "#0ea5e9" }}>
                    {part.icon}
                  </div>
                  <p className="text-lg font-semibold">{part.name}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {stage === "permission" && (
          <div
            className="p-12 rounded-3xl text-center"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <Camera className="w-16 h-16 mx-auto mb-6" style={{ color: "#0ea5e9" }} />
            <h2 className="text-2xl font-semibold mb-2">Assessing: {selectedBodyPart}</h2>
            <p className="text-white/60 mb-8">
              We need access to your camera to analyze your {selectedBodyPart?.toLowerCase()} posture in real-time. Your
              data is private and never stored.
            </p>
            <button
              onClick={handleGrantCamera}
              className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-lg transition-all mb-4"
              style={{
                background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
              }}
            >
              Grant Camera Access
            </button>
            <p className="text-xs text-white/40">No data is stored. Analysis is done locally on your device.</p>
            <button
              onClick={() => setStage("bodypart")}
              className="mt-6 text-white/60 hover:text-white transition-colors text-sm underline"
            >
              Change body part
            </button>
          </div>
        )}

        {stage === "analysis" && (
          <div className="space-y-6">
            {/* Header with title and body part */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedBodyPart} Assessment</h2>
              </div>
            </div>

            {/* Safety Note - ALWAYS VISIBLE */}
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              <p className="text-white/90 font-medium text-sm md:text-base">
                Demo ko dekhte hue posture ya movement follow karein.
                <br />
                Agar discomfort ho to turant ruk jaayein.
              </p>
            </div>

            {/* Desktop/Tablet Layout - Side by Side */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {/* Live Camera Feed */}
              <div className="space-y-2">
                <p className="text-white/80 text-sm font-medium">Live Camera Feed</p>
                <div
                  className="w-full aspect-video rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {isStarted ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                      style={{ transform: "scaleX(-1)" }}
                    />
                  ) : (
                    <div className="text-center">
                      <Play size={48} className="text-white/40 mx-auto mb-2" />
                      <p className="text-white/60">Camera will appear here</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Guidance Video */}
              <div className="space-y-2">
                <p className="text-white/80 text-sm font-medium">Demo Guidance Video</p>
                <div
                  className="w-full aspect-video rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(14, 165, 233, 0.1)",
                    border: "1px solid rgba(14, 165, 233, 0.3)",
                  }}
                >
                  <div className="text-center">
                    <Play size={48} style={{ color: "#0ea5e9" }} className="mx-auto mb-2" />
                    <p className="text-white/80 font-semibold">{selectedBodyPart} Posture Demo</p>
                    <p className="text-white/40 text-sm">(Looping, silent)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="md:hidden space-y-4">
              {/* Demo Video First on Mobile */}
              <div className="space-y-2">
                <p className="text-white/80 text-sm font-medium">Demo Guidance Video</p>
                <div
                  className="w-full aspect-video rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(14, 165, 233, 0.1)",
                    border: "1px solid rgba(14, 165, 233, 0.3)",
                  }}
                >
                  <div className="text-center">
                    <Play size={40} style={{ color: "#0ea5e9" }} className="mx-auto mb-2" />
                    <p className="text-white/80 font-semibold">{selectedBodyPart} Posture Demo</p>
                    <p className="text-white/40 text-xs">(Looping, silent)</p>
                  </div>
                </div>
              </div>

              {/* Camera Feed Second on Mobile */}
              <div className="space-y-2">
                <p className="text-white/80 text-sm font-medium">Live Camera Feed</p>
                <div
                  className="w-full aspect-video rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {isStarted ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                      style={{ transform: "scaleX(-1)" }}
                    />
                  ) : (
                    <div className="text-center">
                      <Play size={40} className="text-white/40 mx-auto mb-2" />
                      <p className="text-white/60 text-sm">Camera will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Timer and Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-white/60 text-xs md:text-sm">Time Elapsed</p>
                <p style={{ color: "#0ea5e9" }} className="text-xl md:text-2xl font-bold">
                  {formatTime(timeElapsed)}
                </p>
              </div>

              <div
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-white/60 text-xs md:text-sm">Status</p>
                <p
                  style={{
                    color: isStarted ? "#10b981" : "rgba(255, 255, 255, 0.6)",
                  }}
                  className="text-lg md:text-xl font-bold capitalize"
                >
                  {isStarted ? (isPaused ? "Paused" : "Active") : "Ready"}
                </p>
              </div>

              <div
                className="p-4 rounded-lg text-center col-span-2 md:col-span-1"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-white/60 text-xs md:text-sm">Assessment</p>
                <p className="text-base md:text-lg font-bold text-white truncate">{selectedBodyPart}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3 flex-wrap">
              {!isStarted ? (
                <button
                  onClick={handleStartCamera}
                  className="flex-1 min-w-24 py-3 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                  }}
                >
                  <Play size={18} />
                  Start Camera
                </button>
              ) : (
                <>
                  <button
                    onClick={handlePauseCamera}
                    className="flex-1 min-w-24 py-3 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: isPaused ? "rgba(255, 255, 255, 0.15)" : "rgba(245, 158, 11, 0.2)",
                      color: "white",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Pause size={18} />
                    {isPaused ? "Resume" : "Pause"}
                  </button>
                  <button
                    onClick={handleStopCamera}
                    className="flex-1 min-w-24 py-3 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.2)",
                      color: "white",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                    }}
                  >
                    <Square size={18} />
                    Stop
                  </button>
                </>
              )}

              <button
                onClick={() => {
                  handleStopCamera()
                  setStage("bodypart")
                }}
                className="flex-1 min-w-24 py-3 px-4 rounded-lg font-semibold transition-all hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                Back
              </button>
            </div>

            {/* Continue Button - Only show when camera is ready or has been used */}
            <button
              onClick={startAnalysis}
              disabled={isAnalyzing}
              className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg disabled:opacity-50"
              style={{
                background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
              }}
            >
              {isAnalyzing ? "Analyzing..." : "Continue to Report"}
            </button>
          </div>
        )}

        {stage === "complete" && (
          <div
            className="p-12 rounded-3xl text-center"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(16, 185, 129, 0.2)" }}
            >
              <svg
                className="w-8 h-8"
                style={{ color: "rgb(16, 185, 129)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">{selectedBodyPart} Assessment Complete!</h2>
            <p className="text-white/60 mb-8">
              Your posture analysis is ready. View your detailed report with personalized recommendations.
            </p>
            <button
              onClick={() => onNavigate("report")}
              className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              style={{
                background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
              }}
            >
              View Your Report
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
