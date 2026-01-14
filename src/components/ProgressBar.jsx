export default function ProgressBar({ label, value, max = 100, gradientStart = "#0ea5e9", gradientEnd = "#06b6d4" }) {
  const percentage = (value / max) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{label}</span>
        <span className="text-white/60">
          {value}/{max}
        </span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-500"
          style={{
            background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  )
}
