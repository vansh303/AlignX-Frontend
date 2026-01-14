import { TrendingUp, Flame, Calendar } from "lucide-react"

export default function Progress() {
  const weekData = [40, 65, 55, 75, 85, 90, 88]
  const maxScore = 100
  const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Progress</h1>
          <p className="text-white/60">Track your improvement over time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Completion Streak</h3>
              <Flame style={{ color: "rgb(239, 68, 68)" }} size={24} />
            </div>
            <div style={{ color: "rgb(239, 68, 68)" }} className="text-4xl font-bold">
              12
            </div>
            <p className="text-white/60 text-sm mt-2">days in a row</p>
          </div>

          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">This Week</h3>
              <TrendingUp style={{ color: "rgb(16, 185, 129)" }} size={24} />
            </div>
            <div style={{ color: "rgb(16, 185, 129)" }} className="text-4xl font-bold">
              6
            </div>
            <p className="text-white/60 text-sm mt-2">exercises completed</p>
          </div>

          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Total Time</h3>
              <Calendar style={{ color: "#0ea5e9" }} size={24} />
            </div>
            <div style={{ color: "#0ea5e9" }} className="text-4xl font-bold">
              8.5
            </div>
            <p className="text-white/60 text-sm mt-2">hours exercised</p>
          </div>
        </div>

        {/* Weekly Chart */}
        <div
          className="p-8 rounded-3xl mb-8"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <h2 className="text-2xl font-semibold mb-8">Weekly Posture Score</h2>
          <div className="flex items-end justify-between gap-4 h-64">
            {weeks.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div
                  className="w-full rounded-t-lg relative group cursor-pointer"
                  style={{
                    height: `${(weekData[idx] / maxScore) * 100}%`,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-t-lg transition-opacity"
                    style={{
                      background: "linear-gradient(to top, #0ea5e9, #06b6d4)",
                    }}
                  />
                  <div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: "rgba(15, 23, 42, 0.9)" }}
                  >
                    {weekData[idx]}
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-4">{day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pain Reduction */}
        <div
          className="p-8 rounded-3xl"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <h2 className="text-2xl font-semibold mb-8">Pain Reduction Progress</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Back Pain</h3>
                <span style={{ color: "rgb(16, 185, 129)" }} className="font-semibold">
                  -45%
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                    width: "75%",
                  }}
                />
              </div>
              <p className="text-white/60 text-sm mt-2">Significant improvement in lower back pain intensity</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Neck Tension</h3>
                <span style={{ color: "rgb(16, 185, 129)" }} className="font-semibold">
                  -32%
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                    width: "50%",
                  }}
                />
              </div>
              <p className="text-white/60 text-sm mt-2">Regular stretching has reduced neck stiffness</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Knee Discomfort</h3>
                <span style={{ color: "rgb(16, 185, 129)" }} className="font-semibold">
                  -28%
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
                    width: "40%",
                  }}
                />
              </div>
              <p className="text-white/60 text-sm mt-2">Strengthening exercises are helping knee stability</p>
            </div>
          </div>

          <div
            className="mt-12 p-6 rounded-lg"
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              border: "1px solid rgba(16, 185, 129, 0.5)",
            }}
          >
            <p className="text-white text-lg font-semibold mb-2">🎉 Great Progress!</p>
            <p className="text-white/80">
              Your consistent exercise routine is showing real results. Keep up the excellent work and maintain your
              12-day streak!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
