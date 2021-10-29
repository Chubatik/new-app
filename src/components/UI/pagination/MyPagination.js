import React from 'react'

import { usePagination } from '../../../hooks/usePagination'
import MyButton from '../button/MyButton'

const MyPagination = ({ changePage, totalPages }) => {
  let pagesArray = usePagination(totalPages)
  return (
    <div style={{ margin: 25, textAlign: 'center' }}>
      {pagesArray.map((p) => (
        <MyButton key={p} onClick={() => changePage(p)}>
          {p}
        </MyButton>
      ))}
    </div>
  )
}

export default MyPagination
