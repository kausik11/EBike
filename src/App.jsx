import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import { staticPageItems } from './data/staticPages'
import HomePage from './pages/HomePage'
import NewArrivalsPage from './pages/NewArrivalsPage'
import VehiclesPage from './pages/VehiclesPage'
import SupportPage from './pages/SupportPage'
import StaticInfoPage from './pages/StaticInfoPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="new-arrivals" element={<NewArrivalsPage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="support" element={<SupportPage />} />

        {staticPageItems.map((page) => (
          <Route
            key={page.path}
            path={page.path.slice(1)}
            element={<StaticInfoPage title={page.title} description={page.description} />}
          />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
