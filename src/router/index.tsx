import { lazy } from 'react'

const JMSHomePage = lazy(() => import('@/views/home-page-module'))

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
}

const routes: RouteObject[] = [
  { path: '/', auth: false, element: <JMSHomePage />,},
]

export default routes
