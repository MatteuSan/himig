import * as React from "react"
import '../scss/style.scss';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main className="wrap--content">
      <div className="title-bar">
        <h2>Welcome to StackCSS</h2>
      </div>
    </main>
  )
}

export default IndexPage
