import { useContext } from 'react'
import SiteContext from './siteContextObject'

function useSiteContext() {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSiteContext must be used within SiteProvider')
  }
  return context
}

export default useSiteContext
