"use client"

import { Filter } from "lucide-react"
import ExerciseCard from "../components/ExerciseCard"
import { useState } from "react"

export default function Exercises({ exercises, onStartExercise }) {
  const [selectedAge, setSelectedAge] = useState("all")
  const [selectedArea, setSelectedArea] = useState("all")

  const areas = ["Neck", "Shoulders", "Back", "Legs", "Knees", "Lower Back"]
  const ageGroups = ["18-30", "30-50", "50-65", "65+"]

  const filteredExercises = exercises.filter((ex) => {
    if (selectedArea !== "all" && ex.area !== selectedArea) return false
    if (selectedAge !== "all" && ex.ageGroup !== selectedAge) return false
    return true
  })

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Exercise Library</h1>
          <p className="text-white/60">Professionally designed exercises for posture improvement</p>
        </div>

        {/* Filters */}
        <div
          className="p-6 rounded-2xl mb-8"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Filter size={20} style={{ color: "#0ea5e9" }} />
            <h3 className="font-semibold">Filter by:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pain Area Filter */}
            <div>
              <label className="block text-white/80 mb-3 font-semibold">Pain Area</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedArea("all")}
                  className="px-4 py-2 rounded-lg transition-all text-white"
                  style={{
                    background:
                      selectedArea === "all" ? "linear-gradient(to right, #0ea5e9, #06b6d4)" : "rgba(15, 23, 42, 0.5)",
                    border: selectedArea === "all" ? "none" : "1px solid rgb(255 255 255 / 0.1)",
                  }}
                >
                  All
                </button>
                {areas.map((area) => (
                  <button
                    key={area}
                    onClick={() => setSelectedArea(area)}
                    className="px-4 py-2 rounded-lg transition-all text-white"
                    style={{
                      background:
                        selectedArea === area ? "linear-gradient(to right, #0ea5e9, #06b6d4)" : "rgba(15, 23, 42, 0.5)",
                      border: selectedArea === area ? "none" : "1px solid rgb(255 255 255 / 0.1)",
                    }}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Group Filter */}
            <div>
              <label className="block text-white/80 mb-3 font-semibold">Age Group</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedAge("all")}
                  className="px-4 py-2 rounded-lg transition-all text-white"
                  style={{
                    background:
                      selectedAge === "all" ? "linear-gradient(to right, #0ea5e9, #06b6d4)" : "rgba(15, 23, 42, 0.5)",
                    border: selectedAge === "all" ? "none" : "1px solid rgb(255 255 255 / 0.1)",
                  }}
                >
                  All Ages
                </button>
                {ageGroups.map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className="px-4 py-2 rounded-lg transition-all text-white"
                    style={{
                      background:
                        selectedAge === age ? "linear-gradient(to right, #0ea5e9, #06b6d4)" : "rgba(15, 23, 42, 0.5)",
                      border: selectedAge === age ? "none" : "1px solid rgb(255 255 255 / 0.1)",
                    }}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Exercises Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} onStartExercise={onStartExercise} />
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div
            className="p-12 rounded-2xl text-center"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <p className="text-white/60">No exercises found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
