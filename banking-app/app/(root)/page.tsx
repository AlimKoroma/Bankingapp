// @ts-check
import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from './../../components/ui/RightSidebar';
function Home() {
  const loggedIn = {firstname: 'Alim', lastname:'Koroma', email: 'akoroma@test.com'}
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
      
      <RightSidebar
        user={loggedIn}
        transactions ={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home
