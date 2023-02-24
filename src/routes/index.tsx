import React from 'react'

import { useRoutes } from "react-router-dom"
import type { RouteObject } from "react-router-dom"

// Layouts
import DefaultLayout from '@/layouts/Default'

// Pages
import Home from '@/pages/Home'

export default function Routes() {

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ]

  const router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  )
}
