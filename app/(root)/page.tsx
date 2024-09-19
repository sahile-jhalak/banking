import Headerbox from '@/components/Headerbox';
import RightSidebar from '@/components/RightSidebar';
import TotalbalanceBox from '@/components/TotalbalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async() => {
  const loggedIn= await getLoggedInUser();
  return (
    <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <Headerbox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.name || 'Guest'}
              subtext="Access and manage your account and transaction efficiently."
              />
              <TotalbalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
              />
          </header>
          RECENT TRANSACTION
        </div>
        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance:123.50},{currentBalance:158.69}]}
        />
    </section>
  )
}

export default Home;