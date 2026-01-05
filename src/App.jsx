import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <header>
        <h1 className="title">📅 Weekly Timetable</h1>
      </header>

      <main>
        <table className="timetable">
          <thead>
            <tr>
              <th>Day</th>
              <th>7:10 - 8:00</th>
              <th>8:00 - 8:50</th>
              <th>9:20 - 10:10</th>
              <th>10:10 - 11:00</th>
              <th>11:10 - 12:00</th>
              <th>12:00 - 12:50</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>DDCA</td><td>DDCA</td><td>DSA</td><td>DSA</td><td>FEDUI</td><td>FEDUI</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>MTFAI</td><td>MTFAI</td><td>FEDUI</td><td>FEDUI</td><td>DSA</td><td>DSA</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>DDCA</td><td>DDCA</td><td>FEDUI</td><td>FEDUI</td><td>DSA</td><td>DSA</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>DSA</td><td>DSA</td><td>FEDUI</td><td>FEDUI</td><td>CSE</td><td>CSE</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>DSA</td><td>DSA</td><td>FEDUI</td><td>FEDUI</td><td>CSE</td><td>CSE</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>MTFAI</td><td>MTFAI</td><td>FEDUI</td><td>FEDUI</td><td>DDCA</td><td>DDCA</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>

    </>
  )
}


     
export default App