import React from 'react'
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import NavigationBar from '@/components/NavigationBar'

export default function DefaultLayout() {

    return (
        <>
            <Toaster />
            <NavigationBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}