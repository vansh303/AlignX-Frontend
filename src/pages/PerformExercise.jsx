"use client"

import { X, Play, Pause, Square } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function PerformExercise({ exercise, onExit }) {
  const videoRef = useRef(null)
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    let interval
    if (isStarted && !isPaused) {
      interval = setInterval(() => setTimeElapsed((t) => t + 1), 1000)
    }
    return () => clearInterval(interval)
  }, [isStarted, isPaused])

  const handleStart = async () => {
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

  const handlePause = () => {
    setIsPaused(!isPaused)
  }

  const handleStop = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach((track) => track.stop())
    }
    setIsStarted(false)
    setIsPaused(false)
    setTimeElapsed(0)
  }

  const handleExit = () => {
    handleStop()
    onExit()
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: "rgba(15, 23, 42, 1)" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{exercise.name}</h1>
          <p className="text-white/60 text-sm mt-1">Difficulty: {exercise.difficulty}</p>
        </div>
        <button onClick={handleExit} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <X size={24} className="text-white" />
        </button>
      </div>

      {/* Safety Note - ALWAYS VISIBLE */}
      <div
        className="max-w-7xl mx-auto mb-6 p-4 rounded-lg"
        style={{
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          border: "1px solid rgba(245, 158, 11, 0.3)",
        }}
      >
        <p className="text-white/90 font-medium text-sm md:text-base">
          Demo ko follow karein.
          <br />
          Agar pain ya discomfort ho to exercise turant rok dein.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop/Tablet Layout - Side by Side */}
        <div className="hidden md:grid grid-cols-2 gap-6 mb-6">
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
                <p className="text-white/80 font-semibold">Demo Video</p>
                <p className="text-white/40 text-sm">(Looping, silent)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden space-y-4 mb-6">
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
                <p className="text-white/80 font-semibold">Demo Video</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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
            className="p-4 rounded-lg text-center md:col-span-2"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <p className="text-white/60 text-xs md:text-sm">Exercise</p>
            <p className="text-base md:text-lg font-bold text-white truncate">{exercise.name}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 flex-wrap">
          {!isStarted ? (
            <button
              onClick={handleStart}
              className="flex-1 min-w-24 py-3 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
              }}
            >
              <Play size={18} />
              Start
            </button>
          ) : (
            <>
              <button
                onClick={handlePause}
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
                onClick={handleStop}
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
            onClick={handleExit}
            className="flex-1 min-w-24 py-3 px-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            Exit Exercise
          </button>
        </div>

        {/* Exercise Steps Info */}
        <div
          className="mt-8 p-6 rounded-2xl"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 className="text-white font-semibold mb-4">Exercise Steps</h3>
          <ol className="space-y-3">
            {exercise.steps.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-white/80 text-sm">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
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
      </div>
    </div>
  )
}
