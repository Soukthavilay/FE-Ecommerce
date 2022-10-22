import React from 'react'
import Banner from '../Banner/Banner'
import CallToAction from '../CallAction/CallToAction'
import Header from '../Common/Header/Header'
import Content from '../Content/Content'
import Footer from '../Common/Footer/Footer'

const Page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Content />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Page



