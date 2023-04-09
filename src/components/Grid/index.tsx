import React, { forwardRef, useImperativeHandle } from 'react'
import type { GridProps } from '../../types'
import '../../style.css'

const Grid = ({ source, innerRef }: GridProps) => {
  return (
    <table className="neumorphic" ref={innerRef}>
      <thead>
        <tr>
          <th>Adı</th>
          <th>Case Gönderildiği Tarih</th>
          <th>Çözüm Gönderildiği Tarih</th>
        </tr>
      </thead>
      <tbody>
        {source.map((data, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: data.isBackgroundColorRed ? 'red' : 'white'
            }}
          >
            <td>{data.name}</td>
            <td>{data.mailReceivedDate}</td>
            <td>{data.solutionSentDate ? data.solutionSentDate : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Grid
