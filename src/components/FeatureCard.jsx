"use client"

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div
      className="p-6 rounded-2xl group cursor-pointer transform hover:scale-105 transition-all duration-300"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.5)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgb(255 255 255 / 0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(14, 165, 233, 0.2)"
        e.currentTarget.style.borderColor = "rgba(14, 165, 233, 0.3)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none"
        e.currentTarget.style.borderColor = "rgb(255 255 255 / 0.1)"
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300"
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
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-white/95">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/75 transition-colors">{description}</p>
    </div>
  )
}
