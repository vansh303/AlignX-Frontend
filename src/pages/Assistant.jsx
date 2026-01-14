"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export default function Assistant({ exercises, onStartExercise }) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState("initial") // initial, reason, age, area, severity, results, final
  const [userInputs, setUserInputs] = useState({
    reason: null,
    age: null,
    area: null,
    severity: null,
  })
  const [showSevereDisclaimer, setShowSevereDisclaimer] = useState(false)

  const getExercisesForArea = (area) => {
    if (!area || area === "Multiple areas") return exercises

    const areaMap = {
      Neck: exercises.filter((e) => e.area.toLowerCase().includes("neck")),
      Shoulder: exercises.filter((e) => e.area.toLowerCase().includes("shoulder")),
      Back: exercises.filter((e) => e.area.toLowerCase().includes("back")),
      Knee: exercises.filter((e) => e.area.toLowerCase().includes("knee")),
    }

    return areaMap[area] || exercises
  }

  const handleInitialChoice = (choice) => {
    if (choice === "start") {
      setStep("reason")
    } else {
      setStep("explore")
    }
  }

  const handleReason = (reason) => {
    setUserInputs({ ...userInputs, reason })
    setStep("age")
  }

  const handleAge = (age) => {
    setUserInputs({ ...userInputs, age })
    setStep("area")
  }

  const handleArea = (area) => {
    setUserInputs({ ...userInputs, area })
    setStep("severity")
  }

  const handleSeverity = (severity) => {
    setUserInputs({ ...userInputs, severity })

    if (severity === "Severe (normal movement me bhi pain)") {
      setShowSevereDisclaimer(true)
      setTimeout(() => {
        setStep("results")
      }, 2000)
    } else {
      setStep("results")
    }
  }

  const handleFinalChoice = (choice) => {
    if (choice === "another") {
      setUserInputs({ reason: userInputs.reason, age: userInputs.age, area: null, severity: null })
      setShowSevereDisclaimer(false)
      setStep("area")
    } else if (choice === "library") {
      setIsOpen(false)
    } else if (choice === "basics") {
      setStep("basics")
    } else if (choice === "close") {
      setIsOpen(false)
      setStep("initial")
      setUserInputs({ reason: null, age: null, area: null, severity: null })
      setShowSevereDisclaimer(false)
    }
  }

  const resetAssistant = () => {
    setIsOpen(false)
    setStep("initial")
    setUserInputs({ reason: null, age: null, area: null, severity: null })
    setShowSevereDisclaimer(false)
  }

  const recommendedExercises = getExercisesForArea(userInputs.area)

  return (
    <>
      {/* Floating AI Coach Orb */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
          boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)",
        }}
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-8 z-40 w-96 max-w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[32rem]"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
            boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)",
          }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center justify-between"
            style={{
              background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
            }}
          >
            <div>
              <h3 className="font-semibold text-white text-lg">AlignX Physio</h3>
              <p className="text-white/80 text-xs">Guidance & support</p>
            </div>
            <button onClick={() => resetAssistant()} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col justify-between">
            {/* INITIAL STATE */}
            {step === "initial" && (
              <div className="space-y-4">
                <div className="text-white space-y-3">
                  <p className="text-base font-medium">Hi 👋</p>
                  <p className="text-sm">I am an AlignX Physio Assistant.</p>
                  <p className="text-sm">I will help you understand yout posture or pain related problems.</p>
                  <p className="text-sm mt-3 pt-3 border-t border-white/20">I am not a doctor,</p>
                  <p className="text-sm">but I can suggest safe guidance and exercises.</p>
                  <p className="text-sm font-medium mt-4">Shall we get started?</p>
                </div>

                <div className="space-y-2 mt-6">
                  <button
                    onClick={() => handleInitialChoice("start")}
                    className="w-full py-3 rounded-lg text-white font-medium transition-all text-sm"
                    style={{
                      background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                    }}
                  >
                    Yes, start
                  </button>
                  <button
                    onClick={() => handleInitialChoice("explore")}
                    className="w-full py-3 rounded-lg font-medium transition-all text-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      border: "1px solid rgb(255 255 255 / 0.2)",
                    }}
                  >
                    Just exploring
                  </button>
                </div>
              </div>
            )}

            {/* REASON STATE */}
            {step === "reason" && (
              <div className="space-y-4">
                <p className="text-white font-medium">What is the reason you came here?</p>
                <div className="space-y-2">
                  {["Pain / Injury", "Posture Improvement", "Recovery & Mobility", "Just learning"].map((reason) => (
                    <button
                      key={reason}
                      onClick={() => handleReason(reason)}
                      className="w-full py-2 rounded-lg text-white font-medium transition-all text-sm"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgb(255 255 255 / 0.2)",
                      }}
                    >
                      {reason}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* AGE STATE */}
            {step === "age" && (
              <div className="space-y-4">
                <p className="text-white font-medium">Which age group do you belong to?</p>
                <div className="space-y-2">
                  {["Under 18", "18–30", "30–45", "45+"].map((age) => (
                    <button
                      key={age}
                      onClick={() => handleAge(age)}
                      className="w-full py-2 rounded-lg text-white font-medium transition-all text-sm"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgb(255 255 255 / 0.2)",
                      }}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* AREA STATE */}
            {step === "area" && (
              <div className="space-y-4">
                <p className="text-white font-medium">Which area feels the most uncomfortable?</p>
                <div className="space-y-2">
                  {["Shoulder", "Knee", "Back", "Neck", "Multiple areas"].map((area) => (
                    <button
                      key={area}
                      onClick={() => handleArea(area)}
                      className="w-full py-2 rounded-lg text-white font-medium transition-all text-sm"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgb(255 255 255 / 0.2)",
                      }}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SEVERITY STATE */}
            {step === "severity" && (
              <div className="space-y-4">
                <p className="text-white font-medium">What is your level of pain or discomfort?</p>
                <div className="space-y-2">
                  {[
                    "Mild (daily kaam ho jata hai)",
                    "Moderate (long sitting ya activity ke baad)",
                    "Severe (normal movement me bhi pain)",
                  ].map((severity) => (
                    <button
                      key={severity}
                      onClick={() => handleSeverity(severity)}
                      className="w-full py-2 rounded-lg text-white font-medium transition-all text-sm"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgb(255 255 255 / 0.2)",
                      }}
                    >
                      {severity}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SEVERE DISCLAIMER */}
            {showSevereDisclaimer && (
              <div
                className="p-4 rounded-lg text-white text-sm space-y-2"
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid rgb(239 68 68 / 0.3)",
                }}
              >
                <p className="font-medium">⚠️ Important</p>
                <p>I can only provide general guidance.</p>
                <p>If the pain is severe, it is important to consult a physiotherapist.</p>
              </div>
            )}

            {/* RESULTS STATE */}
            {step === "results" && (
              <div className="space-y-4">
                <p className="text-white font-medium text-sm">
                  Alright, based on your information…
                  <br />
                  These exercises can be safe and helpful👇
                </p>

                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {recommendedExercises.map((exercise) => (
                    <div
                      key={exercise.id}
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgb(255 255 255 / 0.1)",
                      }}
                    >
                      <p className="text-white font-medium text-sm">{exercise.name}</p>
                      <p className="text-white/60 text-xs">Target: {exercise.area}</p>
                      <p className="text-white/60 text-xs">
                        Difficulty:{" "}
                        <span
                          style={{
                            color:
                              exercise.difficulty === "Easy"
                                ? "#10b981"
                                : exercise.difficulty === "Medium"
                                  ? "#f59e0b"
                                  : "#ef4444",
                          }}
                        >
                          {exercise.difficulty}
                        </span>
                      </p>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => {
                            onStartExercise(exercise.id)
                            resetAssistant()
                          }}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: "rgba(14, 165, 233, 0.2)",
                            color: "#0ea5e9",
                          }}
                        >
                          Perform Now
                        </button>
                        <button
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: "rgba(6, 182, 212, 0.2)",
                            color: "#06b6d4",
                          }}
                        >
                          Watch Demo
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4">
                  <button
                    onClick={() => handleFinalChoice("another")}
                    className="w-full py-2 rounded-lg text-white font-medium transition-all text-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgb(255 255 255 / 0.2)",
                    }}
                  >
                    Try another area
                  </button>
                  <button
                    onClick={() => handleFinalChoice("library")}
                    className="w-full py-2 rounded-lg font-medium transition-all text-sm text-white"
                    style={{
                      background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                    }}
                  >
                    Go to exercise library
                  </button>
                  <button
                    onClick={() => handleFinalChoice("basics")}
                    className="w-full py-2 rounded-lg text-white font-medium transition-all text-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgb(255 255 255 / 0.2)",
                    }}
                  >
                    Learn posture basics
                  </button>
                  <button
                    onClick={() => handleFinalChoice("close")}
                    className="w-full py-2 rounded-lg text-white font-medium transition-all text-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgb(255 255 255 / 0.2)",
                    }}
                  >
                    Close assistant
                  </button>
                </div>
              </div>
            )}

            {/* EXPLORE STATE */}
            {step === "explore" && (
              <div className="space-y-4">
                <p className="text-white font-medium">Absolutely! Browse our exercise library whenever you’re ready.</p>
                <button
                  onClick={() => handleFinalChoice("close")}
                  className="w-full py-3 rounded-lg text-white font-medium transition-all text-sm"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                  }}
                >
                  Got it, close
                </button>
              </div>
            )}

            {/* BASICS STATE */}
            {step === "basics" && (
              <div className="space-y-4">
                <div className="text-white space-y-3 text-sm">
                  <p className="font-medium">Posture Basics 📋</p>
                  <p>✓ Sit with shoulders back</p>
                  <p>✓ Keep spine neutral (S-curve)</p>
                  <p>✓ Avoid slouching for long periods</p>
                  <p>✓ Take movement breaks every hour</p>
                  <p>✓ Strengthen core muscles</p>
                </div>
                <button
                  onClick={() => handleFinalChoice("close")}
                  className="w-full py-3 rounded-lg text-white font-medium transition-all text-sm"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                  }}
                >
                  Close assistant
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
