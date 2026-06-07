"use client"

export default function BuildBadge() {
  const build = process.env.NEXT_PUBLIC_BUILD || "TEST"
  return (
    <div style={{position:"fixed",top:"4px",right:"4px",fontSize:"10px",background:"#000",color:"#aaa",padding:"2px 6px",borderRadius:"4px",zIndex:9999,fontFamily:"monospace"}}>
      {build}
    </div>
  )
}
