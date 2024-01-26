import { useState, useEffect } from 'react'
function Color() {
  
  const [color, setColor] = useState("blue")
  const click = color => {
    setColor(color)
  }
  /* This is where we actually
     change background color */
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])
  /* Display clickable
      button */
  return (<div className = "App">
    <button onClick = {
      () => click("yellow")
    }>Change BG Color</button>
  </div>)
}
export default Color;