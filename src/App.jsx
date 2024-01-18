import { useCallback } from 'react'

import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'

const App = () => {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { isUserLoading } = useUser()
  const { logout } = useDescope()

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  return <>
    {!isAuthenticated &&
      (<div style={{paddingLeft: "30vw", paddingRight: "30vw"}}>
        <Descope
          flowId="sign-up-or-in"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={(e) => console.log('Could not log in!')}
        />
        </div>
      )
    }

    {
      (isSessionLoading || isUserLoading) && <p>Loading...</p>
    }

    {!isUserLoading && isAuthenticated &&
      (
        <>
          <p>Logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )
    }
  </>;
}

export default App;


