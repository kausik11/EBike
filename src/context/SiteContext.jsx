import { useEffect, useMemo, useState } from 'react'
import SiteContext from './siteContextObject'

const heroSlides = [
  {
    banner: 'https://okinawascooters.com/Uploads/banner/1hbanner_Okinawa-banner1.webp',
    logo: 'https://okinawascooters.com/Uploads/banner/1hlbanner_okhi-90.png',
    model: 'OKHI-90',
  },
  {
    banner: 'https://okinawascooters.com/Uploads/banner/5hbanner_lite-banner.jpg',
    logo: 'https://okinawascooters.com/Uploads/banner/5hlbanner_lite-icon.png',
    model: 'Lite',
  },
  {
    banner: 'https://okinawascooters.com/Uploads/banner/7hbanner_Praisepro-banner.jpg',
    logo: 'https://okinawascooters.com/Uploads/banner/7hlbanner_praispro-icon.png',
    model: 'PraisePro',
  },
]

const products = [
  {
    name: 'OKHI-90',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/1pdctimg_okhi-90.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/1pdctmimg_okhi-90.png',
    range: '161 km',
    speed: '74 kmph',
    charging: '05-06 Hours',
    price: '1,49,991',
  },
  {
    name: 'IPraise+',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/2pdctimg_iPraise+_Banner.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/2pdctmimg_iPraise+-logo.png',
    range: '137 km',
    speed: '56 kmph',
    charging: '04-05 Hours',
    price: '1,22,955',
  },
  {
    name: 'PraisePro',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/3pdctimg_Praisepro_banner.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/3pdctmimg_PraiseProBlack.png',
    range: '81 km',
    speed: '56 kmph',
    charging: '02-03 Hours',
    price: '84,443',
  },
  {
    name: 'Ridge 100',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/5pdctimg_ridge-100.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/5pdctmimg_Ridge100-Logo.png',
    range: '149 km',
    speed: '45 kmph',
    charging: '05-06 Hours',
    price: '1,15,311',
  },
  {
    name: 'Ridge+',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/6pdctimg_ridge-plus.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/6pdctmimg_Ridge+Logo.png',
    range: '81 km',
    speed: '45 kmph',
    charging: '02-03 Hours',
    price: '70,096',
  },
  {
    name: 'Ridge+(GPS)',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/11pdctimg_Ridge+GPS_Banner.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/11pdctmimg_Ridge+Logo-withgps.png',
    range: '81 km',
    speed: '45 kmph',
    charging: '02-03 Hours',
    price: '90,606',
  },
  {
    name: 'Dual 100',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/4pdctimg_dual-100.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/4pdctmimg_dual-100.png',
    range: '129 km',
    speed: '60 kmph',
    charging: '05-06 Hours',
    price: '1,19,085',
  },
  {
    name: 'R30',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/8pdctimg_R30_Banner.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/8pdctmimg_R30-logo.png',
    range: '60 km',
    speed: '25 kmph',
    charging: '04-05 Hours',
    price: '61,998',
  },
  {
    name: 'Lite',
    image: 'https://okinawascooters.com/Uploads/ProductsImage/7pdctimg_7pdctclrimg_p1.png',
    logo: 'https://okinawascooters.com/Uploads/ProductsImage/7pdctmimg_Lite-black.png',
    range: '60 km',
    speed: '25 kmph',
    charging: '04-05 Hours',
    price: '69,093',
  },
]

const technologyCards = [
  {
    image: 'https://okinawascooters.com/images/webp/tech-pic1.webp',
    title: 'Aerodynamic Design',
  },
  {
    image: 'https://okinawascooters.com/images/webp/tech-pic2.webp',
    title: 'CAN Enabled Powertrain',
  },
  {
    image: 'https://okinawascooters.com/images/webp/tech-pic3.webp',
    title: 'Connected Vehicle',
  },
  {
    image: 'https://okinawascooters.com/images/webp/tech-pic4.webp',
    title: 'Detachable Battery (AIS 156-3 compliance)',
  },
]

const features = [
  {
    icon: 'https://okinawascooters.com/images/webp/ionic-ios-lock.svg',
    title: 'Central Locking with Anti-theft Alarm',
  },
  {
    icon: 'https://okinawascooters.com/images/diamond-icon.svg',
    title: 'Diamond Cut Alloy Wheel with Disk Break',
  },
  {
    icon: 'https://okinawascooters.com/images/Icon-material-usb.svg',
    title: 'Mobile Charging USB Port',
  },
  {
    icon: 'https://okinawascooters.com/images/icon-keyless.svg',
    title: 'Keyless Entry',
  },
  {
    icon: 'https://okinawascooters.com/images/icon-ride-modes.svg',
    title: 'Multiple Ride Modes',
  },
  {
    icon: 'https://okinawascooters.com/images/walk-assist.svg',
    title: 'Walk Assist',
  },
]

const updates = [
  {
    image: 'https://okinawascooters.com/uploads/SmallImages/3krs-250000_1038(1).jpg',
    date: '14 Mar 23',
    title:
      'VENTURE Strengthens Its Leadership Position, Surpasses 2.5 Lakh Sales Milestone',
  },
  {
    image: 'https://okinawascooters.com/uploads/SmallImages/63krs-Praise_Pro.png',
    date: '08 Sep 23',
    title:
      "VENTURE Celebrates World EV Day and Accelerates India's EV Transition",
  },
  {
    image: 'https://okinawascooters.com/uploads/SmallImages/62krs-Okinawa.jpeg',
    date: '17 Jul 23',
    title: 'VENTURE upgrades OKHI-90 with advanced features and connect technology',
  },
  {
    image: 'https://okinawascooters.com/uploads/SmallImages/61rks-Pr1.jpeg',
    date: '26 Apr 23',
    title:
      'VENTURE upgrades the Praise platform with improved ergonomics and technology',
  },
]

const footerLinksLeft = [
  'About Us',
  'Careers',
  'Contact Us',
  'Galaxy Stores',
  'Media',
  'Blog',
  'Customer Support',
]

const footerLinksRight = [
  'Login/Register',
  'Warranty & Services',
  'Public Notice',
  'Refund Policy',
  'Beware Of Fraud',
  'Privacy & Policies',
  'Grievance Redressal',
]

const sustainabilityStats = [
  { label: 'Total EVs Manufactured', value: '4,30,000+' },
  { label: 'Fuel Cost Saved', value: 'Rs.18.5 Billion*' },
  { label: 'Carbon Dioxide Saved', value: '500 Million* kg' },
]

const siteData = {
  heroSlides,
  products,
  technologyCards,
  features,
  updates,
  footerLinksLeft,
  footerLinksRight,
  sustainabilityStats,
}

function SiteProvider({ children }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeProduct, setActiveProduct] = useState(0)
  const [subscriberEmail, setSubscriberEmail] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const value = useMemo(
    () => ({
      ...siteData,
      activeSlide,
      activeProduct,
      currentSlide: heroSlides[activeSlide],
      currentProduct: products[activeProduct],
      setActiveSlide,
      setActiveProduct,
      subscriberEmail,
      setSubscriberEmail,
    }),
    [activeProduct, activeSlide, subscriberEmail],
  )

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export { SiteProvider }
