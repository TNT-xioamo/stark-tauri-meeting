import { lazy } from 'react'

const JMSHomePage = lazy(() => import('@/views/home-page-module'))
const JMSConferencePage =  lazy(() => import('@/views/conference-page-module'))

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
}

const routes: RouteObject[] = [
  { path: '/', auth: false, element:  <JMSHomePage />,},
  { path: 'conference', auth: true, element: <JMSConferencePage />,}
]

export default routes
