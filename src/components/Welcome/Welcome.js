//  Class Component
// import {Component} from 'react'
// class Welcome extends Component {
//   render() {
//     return <h1>Hello, Class Component</h1>
//   }
// }
// ------------------------------------------------------------
// Functional Component
const Welcome = (props) => {
    const { name } = props;
    return (<h1>Hello, {props} </h1>
        ,
        <p>Functional Component</p>);
}
export default Welcome
