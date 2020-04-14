import React from 'react'
import { Circle, Rectangle } from 'example-component-library'
import 'example-component-library/dist/css/Circle/styles.css'
import 'example-component-library/dist/css/Rectangle/styles.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Component Library Example" />
    <h1>Component Library Example</h1>
    <div>
      <Circle desc="A blue circle" size={200} title="Water planet" />
    </div>
    <div>
      <Rectangle
        desc="A rectangle that is 4 times taller than it is wide"
        height={600}
        title="Minimalist building"
        width={150}
      />
    </div>
  </Layout>
)

export default IndexPage
