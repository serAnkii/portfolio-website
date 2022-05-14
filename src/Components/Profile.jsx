import React from 'react'

import { useParams } from 'react-router-dom'
export function Profile() {
    let {username} = useParams(); 
  return (
    <div>this is the Profile page for {username}</div>
  )
}

