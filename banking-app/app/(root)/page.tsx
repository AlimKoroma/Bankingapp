import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
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
        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}

        />
        </header>
      </div>
    </section>
  )
}

export default Home
