import React, { useEffect, useState } from "react"
import "../scss/_staging.scss"

export default function StagingBadge() {
  const [version, setVersion] = useState("")
  useEffect(() => {
    const getVersion = () => {
      const launchDate = new Date("2026-01-01T00:00:00+10:00")
      const currentDate = new Date()
      const daysSinceLaunch = Math.floor((currentDate - launchDate) / 86400000)
      return `1.${daysSinceLaunch}`
    }
    setVersion(getVersion())
  }, [])

  if (!version) return null
  
  return (
    <div className='staging-badge' aria-label={`Staging Site Version ${version}`}>
      <div className='staging-badge__marquee'>
        <span>Staging Site Ver.{version}</span>
        <span aria-hidden='true'>Staging Site Ver. {version}</span>
      </div>
    </div>
  )
}