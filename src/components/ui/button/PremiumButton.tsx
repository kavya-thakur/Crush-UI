import React from "react";
import { ChevronRight } from "lucide-react";

export default function PremiumBeamButton() {
  return (
    <>
      <style>{`
        @keyframes continuous-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .beam-animate {
          /* Using 2 seconds for a faster, smoother sweep */
          animation: continuous-rotate 2s linear infinite;
        }

        .mask-layer {
          /* This ensures the beam only shows on the top and sides, then fades */
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 100%);
        }
      `}</style>

      <a
        href="#"
        className="group relative inline-flex items-center justify-center px-6 py-3 no-underline transition-all active:scale-[0.98]"
        style={{ borderRadius: "8px" }}
      >
        {/* Button Content */}
        <div className="relative z-10 flex items-center gap-2">
          <ChevronRight size={14} strokeWidth={3} color="white" />
          <span
            style={{
              color: "white",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            Build with our data
          </span>
        </div>

        {/* The Continuous Border Beam */}
        <div
          className="absolute -inset-px z-0 overflow-hidden"
          style={{ borderRadius: "8px" }}
        >
          {/* Mask ensures we don't see the giant square spinning, just the edge */}
          <div className="mask-layer absolute inset-0 size-full">
            <div
              className="beam-animate absolute"
              style={{
                width: "150%",
                aspectRatio: "1/1",
                top: "-25%",
                left: "-25%",
                /* A sharper, more focused beam for a cleaner look */
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #9595ea 360deg)",
              }}
            />
          </div>
        </div>

        {/* The Background Center (Fills the button) */}
        <div
          className="absolute inset-[1.5px] z-0"
          style={{
            borderRadius: "7px",
            backgroundColor: "#0c0d0e",
          }}
        />

        {/* Hover Lighten */}
        <div className="absolute inset-[1.5px] z-0 rounded-[7px] bg-white/0 group-hover:bg-white/5 transition-colors" />
      </a>
    </>
  );
}
