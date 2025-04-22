import { useState } from 'react'

const COLORS = ['#FFD980', '#FF8480', '#81FF80', '#80EAFF']

export default function Background() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full grid bg-[#050505]"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, 32px)',
        gridTemplateRows: 'repeat(auto-fill, 32px)',
      }}
    >
      {[...Array(3000)].map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}

function Cell() {
  const [tempActive, setTempActive] = useState(false)
  const color = COLORS[Math.floor(Math.random() * COLORS.length)]

  return (
    <div
      onMouseEnter={() => {
        setTempActive(true)
        setTimeout(() => setTempActive(false), 1000)
      }}
      className="w-8 h-8 border"
      style={{
        background: tempActive ? `${color}1a` : '#050505',
        border: `solid ${tempActive ? `1px ${color}` : '0.5px #20202099'}`,
      }}
    />
  )
}
