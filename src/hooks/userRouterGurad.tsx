// import { message } from 'antd'
import { useEffect } from 'react'
import { useLocation, useRoutes, Location, useNavigate, NavigateFunction } from 'react-router-dom'

import { getStorage } from '@/utils'

interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
}

export function searchroutedetail( path: string, routes: RouteObject[]): RouteObject | null {
  for (let item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      return searchroutedetail(path, item.children)
    }
  }
  return null
}

function guard(location: Location, navigate: NavigateFunction,  routes: RouteObject[]) {
  const { pathname } = location;
  const routedetail = searchroutedetail(pathname, routes)
  if (!routedetail) return false
  if (routedetail.auth) {
    return getStorage('stark_token', (token: string) => {
      if (!token) {
        navigate(-1)
        return false
      }
    })
  }
  return true
}

export const RouterGurad = (routes: any) => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    guard(location, navigate, routes)
  }, [location, navigate, routes])
  // document.documentElement.scrollTo(0, 0)
  const Route = useRoutes(routes)
  return Route
}
