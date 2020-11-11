import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Footer from '../components/Footer'

import '../css/main.css'
import Projects from "../components/Projects"

export default function Home() {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <Projects></Projects>
      </Layout>
    </>
  )
}
