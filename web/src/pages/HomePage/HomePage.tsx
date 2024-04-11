import { Container } from 'react-bootstrap'

import { Metadata } from '@redwoodjs/web'

import { Header } from 'src/components/rootLayout/Header'

const HomePage = () => {
  return (
    <Container
      className="App"
      style={{
        height: '100vh',
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
      }}
      fluid
    >
      <Metadata title="Home" description="Home page" />
      <Header />

      <h1>NorthStar GPS Home Page</h1>
    </Container>
  )
}

export default HomePage
