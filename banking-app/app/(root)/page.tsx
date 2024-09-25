import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'

function Home() {
  const loggedIn = {firstname: 'Alim'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
        <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstname || 'Guest'}
        subtext = "Access and manage your account and transactions"
        />
        </header>
      </div>
    </section>
  )
}

export default Home
