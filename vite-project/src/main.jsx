import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function  MyApp(){
  return(
    <div>
      <h1>New div add in react</h1>
    </div>
  )
}
// const reactElement = {
//   type: "a",
//   props:{
//       href:"http://www.google.com",
//       target:'_blank',
//   },
//   children : "click me to visit google"
// }

// const anotherElement = (
//   <a href="http://google.com" target="_blank">visit Gooogle</a>
// )

const reactElement = React.createElement(
  'a',
  {href:"http://google.com"},
  "click me to visit"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    // <MyApp />
    // anotherElement
  // anotherElement
  // reactElement
)
