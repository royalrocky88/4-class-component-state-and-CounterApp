//-------------------------------------------------------------
//  Class Component with passing props

import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name} = this.props
    return (
      <h1>
        Hello, {name}
        Class Component
      </h1>
    )
  }
}

// ------------------------------------------------------------
// Functional Component with passing props

// const Welcome = props => {
//   const {name} = props
//   return (
//     <h1>
//       Hello, {name} <b>Functional Component</b>
//     </h1>
//   )
// }

export default Welcome
