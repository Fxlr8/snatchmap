import React, { useReducer } from 'react';
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import Logo from 'components/Logo'
import Search from 'components/Search'

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
const SET_PROPERTY = 'SET_PROPERTY'

interface ToggleSidebarAction {
  type: typeof TOGGLE_SIDEBAR
  payload?: boolean
}

interface SetPropertyAction {
  type: typeof SET_PROPERTY
  payload: number
}

type AppActions = ToggleSidebarAction | SetPropertyAction

interface AppState {
  sidebar: boolean
  propertyId?: number
}

function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {

  }
  return state
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, {
    sidebar: true
  })

  return (
    <>
      <Map />
      <Sidebar show={state.sidebar} />
      <Logo />
      {/* <Search /> */}
    </>
  );
}
export default App;
