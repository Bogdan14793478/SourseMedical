import React from "react"
import "./Loader.css"

export const Loader = () => {
  return (
    <div className="my-loader">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
