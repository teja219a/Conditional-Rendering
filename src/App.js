import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  renderAuthButton = () => {}

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button>Login</button>}
        {!isLoggedIn && <button>Logout</button>}
      </div>
    )
  }
}

export default App

//-----------------------------------------Using an If...Else Statement-------------------------
// //import { Component } from "react"
// import './App.css'

// class App extends Component {
//   state = { isLoggedIn: true }

//    renderAuthButton = () => {
//     const {isLoggedIn} = this.state
//     if (isLoggedIn === true) {
//       return <button>Logout</button>
//     }
//     return <button>Login</button>
//   }

//   render() {
//     return (
//      <div className="container">
//         {this.renderAuthButton()}
//       </div>
//     )
//   }
// }

// export default App//

//-----------------------------------------------Using Element Variables-----------------------------
// import { Component } from "react"
// import './App.css'

// class App extends Component {
//   state = { isLoggedIn: true }

//   render() {
//     const { isLoggedIn } = this.state
//     let authButton
//     if (isLoggedIn) {
//       authButton = <button>Logout</button>
//     } else {
//       authButton = <button>Login</button>
//     }
//     return (
//       <div className="container">
//         <h1>React JS</h1>
//         {authButton}
//       </div>
//     )
//  }
// }

// export default App

//----------------------------------------------------------Using Ternary Operators-------------------------------
// import { Component } from "react"
// import './App.css'

// class App extends Component {

//   render() {
//     const { isLoggedIn } = this.state
//     return (
//       <div className="container">
//         {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
//       </div>
//     )
//   }
// }

// export default App

//---------------------------------------------------Using Logical && Operator------------------------
// import { Component } from "react"
// import './App.css'

// class App extends Component {

//   render() {
//     const { isLoggedIn } = this.state
//     return (
//       <div className="container">
//         {isLoggedIn && <button>Logout</button>}
//         {!isLoggedIn && <button>Login</button>}
//       </div>
//     )
//   }
// }

// export default App

