import React from 'react'
import { Banner } from '../Banner/Banner'
import { Service } from '../Service/Service'
import { Screen } from '../Screen/Screen'
import { Testimonials } from '../Testimonials/Testimonials'
import { Contact } from '../Contact/Contact'

export const Home = () => {
  return (
    <div><Banner></Banner>
    <Service></Service>
    <Screen></Screen>
    <Testimonials></Testimonials>
    <Contact></Contact></div>
  )
}
