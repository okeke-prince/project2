"use client"
import React from 'react'
import Login from '../../../public/components/Login'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className="d-flex align-items-center justify-content-center h-100 w-100 login">
            <Login />
        </div>

    )
}