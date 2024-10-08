import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import routes from './config'

const renderRoutes = (routes) => {
  if (!routes) return
  return routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={<PageTitle route={route}>{route.element}</PageTitle>}
    >
      {Array.isArray(route.children) && renderRoutes(route.children)}
    </Route>
  ))
}

/**
 * 路由文件
 * @return {JSX.Element}
 * @constructor
 */
const RoutesElement = () => {
  return <BrowserRouter>
    <Routes>{renderRoutes(routes)}</Routes>
  </BrowserRouter>
}

export default RoutesElement
