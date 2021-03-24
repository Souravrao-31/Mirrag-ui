import React, { Component } from 'react'

const styleObj = {
   fontSize: 14,
   color: "#4a54f1",
   textAlign: "left",
   paddingTop: "100px",
}

class table extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          students: [
             { id: 1, name: 'Admin', time: '8:00', email: 'admin@email.com' },
             { id: 2, name: 'Instinct', time: '10:00', email: 'INs@email.com' },
             { id: 3, name: 'Tom', time: '14:00', email: 'cook00@email.com' },
             { id: 4, name: 'Virat', time: '8:00', email: 'sudo@email.com' }
          ]
       }
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.students[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.students.map((student, index) => {
          const { id, name, time, email } = student //destructuring
          return (
             <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{time}</td>
                <td>{email}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div >
             <h1 id='title' style={styleObj} > User Details</h1>
             <table id='students'  className="myAwesomeTable">
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 
export default table;