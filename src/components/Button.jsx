import { color } from 'motion'
import React , {useState} from 'react'


const Button = ({activeMode , onModeChange}) => {
    const modes = [
  { id: "chat",    label: "Chat",    icon: "ti-robot",        color: "#7c3aed" },
  { id: "weather", label: "Weather", icon: "ti-cloud",        color: "#0ea5e9" },
  { id: "github",  label: "GitHub",  icon: "ti-brand-github", color: "#6b7280" },
]
  return (
   <div className="flex gap-2 px-4 pt-3 flex-wrap fixed top-0 left-15 z-3 bg-black">
      {modes.map(mode => (
        <button
          key={mode.id}
          onClick={() => onModeChange(mode.id)}
          style={{
            border: `1.5px solid ${activeMode === mode.id ? mode.color : '#333'}`,
            background: activeMode === mode.id ? mode.color : 'transparent',
            color: activeMode === mode.id ? 'white' : '#888',
            transition: 'all 0.2s'
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
        >
          {mode.label}
        </button>
      ))}
    </div>
  )
}

export default Button
