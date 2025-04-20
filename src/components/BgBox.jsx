"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BgBox = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1)
  const cols = new Array(200).fill(1)

  const colors = ["#93c5fd", "#f9a8d4", "#86efac", "#fde047", "#fca5a5", "#d8b4fe", "#93c5fd", "#a5b4fc", "#c4b5fd"]

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div
      style={{
        transform: "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)",
        position: "absolute",
        top: 0,
        left: 0,
        width: "200%",
        height: "200%",
        zIndex: 1,
        // Contain the BgBox within its parent
        pointerEvents: "auto",
      }}
      className={cn("flex", className)}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="relative h-8 w-16 border-l border-slate-700">
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = getRandomColor()
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
              }}
              className="relative h-8 w-16 border-t border-r border-slate-700"
              style={{ pointerEvents: "auto" }}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default BgBox
