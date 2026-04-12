import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to={'/'} className='flex items-end'>
        <img src={logo} alt="" />
        <h1 className='-ml-3 text-3xl font-extrabold'>ZapShift</h1>
    </Link>
  )
}
