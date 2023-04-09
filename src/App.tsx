import * as React from 'react'
import './style.css'
import { Grid } from './components'
import dataList from './assets/data.json'

function App() {
  const [wrongSubmissions, setWrongSubmissions] = React.useState<number>()
  const tableRef = React.useRef<any>()

  React.useEffect(() => {
    control('2021-10-04', 20)
  }, [])

  const daysBetweenDates = (date1: string, date2: string) => {
    const time1 = new Date(date1).getTime()
    const time2 = new Date(date2).getTime()
    const diffTime = Math.abs(time2 - time1)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const control = (today: string, limit: number) => {
    const rows = tableRef.current.getElementsByTagName('tr')
    let wrongBgCount = 0

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i]
      const mailReceivedDate = new Date(row.cells[1].textContent).toISOString()
      const solutionSentDate = row.cells[2].textContent
        ? new Date(row.cells[2].textContent).toISOString()
        : today
      let daysBetween = 0
      daysBetween = daysBetweenDates(solutionSentDate, mailReceivedDate)
      if (daysBetween > limit) {
        row.style.backgroundColor = 'red'
        wrongBgCount++
      } else if (daysBetween <= limit && row.style.backgroundColor === 'red') {
        row.style.backgroundColor = '#e0e5ec'
      }
    }

    setWrongSubmissions(wrongBgCount)
  }

  return (
    <div className="container">
      <div className="text">Dgpays Case Study </div>
      <Grid source={dataList} innerRef={tableRef} />
      <p>Geç gönderim sayısı: {wrongSubmissions}</p>
    </div>
  )
}

export default App
