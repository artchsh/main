import { useRoutes } from "react-router-dom"
import type { RouteObject } from "react-router-dom"

// Layouts
import DefaultLayout from '@/layouts/Default'

// Pages
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import TokenPage from "@/pages/Token"

export default function Routes() {

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/token',
          element: <TokenPage />
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
