import React, { memo } from 'react'

function ChildCom({abc}) {
    console.log("child component")
  return (
    <div>ChildCom</div>
  )
}

export default memo(ChildCom) 