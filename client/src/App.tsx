import React, { useReducer } from 'react';
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import Logo from 'components/Logo'
import Search from 'components/Search'

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
const SELECT_PROPERTY = 'SELECT_PROPERTY'

interface ToggleSidebarAction {
  type: typeof TOGGLE_SIDEBAR
  payload?: boolean
}

interface SetPropertyAction {
  type: typeof SELECT_PROPERTY
  payload: number
}

type AppActions = ToggleSidebarAction | SetPropertyAction

interface AppState {
  sidebar: boolean
  propertyId?: string
}

function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {

  }
  return state
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, {
    sidebar: true,
    propertyId: '5df60885ad40cc14a218290d'
  })

  return (
    <>
      <Map />
      <Sidebar show={state.sidebar} propertyId={state.propertyId} />
      <Logo />
      {/* <Search /> */}
    </>
  );
}
export default App;
