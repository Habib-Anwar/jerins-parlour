import React from 'react'
import { Banner } from '../Banner/Banner'
import { Service } from '../Service/Service'
import { Screen } from '../Screen/Screen'
import { Testimonials } from '../Testimonials/Testimonials'

export const Home = () => {
  return (
    <div><Banner></Banner>
    <Service></Service>
    <Screen></Screen>
    <Testimonials></Testimonials></div>
  )
}
