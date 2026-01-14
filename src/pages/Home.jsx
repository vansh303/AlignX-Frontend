"use client";

import { ArrowRight, Zap, Activity, Brain, TrendingUp } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import shoulderPNG from "../assets/shoulder-skeleton(1).png";
import spinePNG from "../assets/spin-skeleton.png";
import kneePNG from "../assets/knee-skeleton.png";

export default function Home({ onNavigate }) {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Posture Tracking",
      description:
        "Advanced computer vision analyzes your posture in real-time with millimeter precision.",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Get personalized recommendations based on your posture data and health patterns.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Monitor your improvement over weeks with detailed analytics and trend reports.",
    },
    {
      icon: Zap,
      title: "Personalized Exercises",
      description:
        "Tailored exercise routines designed by physical therapy experts.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Start Assessment",
      description:
        "Grant camera access and position yourself for posture analysis",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our computer vision model analyzes 27 body joints in real-time",
    },
    {
      number: "03",
      title: "Get Report",
      description:
        "Receive detailed posture assessment with risk indicators and recommendations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        {/* Background gradient orbs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "rgba(14, 165, 233, 0.2)" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            animationDelay: "1s",
          }}
        ></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div
            className="inline-block mb-6 px-4 py-2 rounded-full"
            style={{
              backgroundColor: "rgba(14, 165, 233, 0.2)",
              border: "1px solid rgba(14, 165, 233, 0.5)",
            }}
          >
            <span
              style={{ color: "rgb(6, 182, 212)" }}
              className="text-sm font-semibold"
            >
              ✨ Welcome to the Future of Posture
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0ea5e9, #06b6d4, #8b5cf6)",
              }}
            >
              Align Your Posture,
            </span>
            <br />
            <span className="text-white">Eliminate Your Pain</span>
          </h1>

          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            AlignX uses advanced AI-powered computer vision to analyze your
            posture in real-time, providing personalized insights and exercises
            to improve your alignment and eliminate chronic pain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => onNavigate("assessment")}
              className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              style={{
                background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(14, 165, 233, 0.5)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              Start Free Assessment
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button
              onClick={() => onNavigate("exercises")}
              className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgb(255 255 255 / 0.1)",
              }}
            >
              Explore Exercises
            </button>
          </div>

          {/* Mock visual */}
          <div
            className="relative p-8 rounded-3xl mb-20"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgb(255 255 255 / 0.1)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Shoulder Joint Skeleton */}
              <div
                className="aspect-square rounded-2xl flex flex-col items-center justify-center relative p-6"
                style={{
                  background: "rgba(15, 23, 42, 0.3)",
                }}
              >
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden"
                  style={{
                    border: "2px dashed rgba(14, 165, 233, 0.4)",
                    boxShadow:
                      "0 0 20px rgba(14, 165, 233, 0.2), inset 0 0 20px rgba(14, 165, 233, 0.1)",
                  }}
                >
                  <img
                    src={shoulderPNG}
                    alt="Shoulder Skeleton"
                    className="w-full h-full object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-white font-semibold mt-4 text-base">
                  Shoulder Joint Skeleton
                </p>
                <p className="text-white/50 text-xs mt-2">
                  Rendered using computer vision (demo UI)
                </p>
              </div>

              {/* Spine Alignment Skeleton */}
              <div
                className="aspect-square rounded-2xl flex flex-col items-center justify-center relative p-6"
                style={{
                  background: "rgba(15, 23, 42, 0.3)",
                }}
              >
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden"
                  style={{
                    border: "2px dashed rgba(6, 182, 212, 0.4)",
                    boxShadow:
                      "0 0 20px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)",
                  }}
                >
                  <img
                    src={spinePNG}
                    alt="Spine Skeleton"
                    className="w-full h-full object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-white font-semibold mt-4 text-base">
                  Spine Alignment Skeleton
                </p>
                <p className="text-white/50 text-xs mt-2">
                  Rendered using computer vision (demo UI)
                </p>
              </div>

              {/* Knee Joint Skeleton */}
              <div
                className="aspect-square rounded-2xl flex flex-col items-center justify-center relative p-6"
                style={{
                  background: "rgba(15, 23, 42, 0.3)",
                }}
              >
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden"
                  style={{
                    border: "2px dashed rgba(139, 92, 246, 0.4)",
                    boxShadow:
                      "0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)",
                  }}
                >
                  <img
                    src={kneePNG}
                    alt="Knee Skeleton"
                    className="w-full h-full object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-white font-semibold mt-4 text-base">
                  Knee Joint Skeleton
                </p>
                <p className="text-white/50 text-xs mt-2">
                  Rendered using computer vision (demo UI)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            How AlignX Works
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Three simple steps to better posture and less pain
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.5)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgb(255 255 255 / 0.1)",
                  }}
                >
                  <div
                    className="text-6xl font-bold mb-4 bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #0ea5e9, #06b6d4)",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2"
                    style={{ color: "#0ea5e9" }}
                  >
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div
          className="max-w-4xl mx-auto p-12 rounded-3xl text-center"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Posture?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Join thousands of users who have eliminated chronic pain with AlignX
          </p>
          <button
            onClick={() => onNavigate("signup")}
            className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
            style={{
              background: "linear-gradient(to right, #0ea5e9, #06b6d4)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 30px rgba(14, 165, 233, 0.5)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}
