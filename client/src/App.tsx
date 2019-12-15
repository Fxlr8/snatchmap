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
  propertyId: string,
  ownerId: string
}

type AppActions = ToggleSidebarAction | SetPropertyAction

interface AppState {
  sidebar: boolean
  propertyId?: string
  ownerId?: string
}

function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case SELECT_PROPERTY: return {
      ...state,
      propertyId: action.propertyId,
      ownerId: action.ownerId
    }
  }
  return state
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, {
    sidebar: true,
    propertyId: '5df60885ad40cc14a218290d',
    ownerId: '5df60885ad40cc14a218290f'
  })

  return (
    <>
      <Map />
      <Sidebar show={state.sidebar} propertyId={state.propertyId} ownerId={state.ownerId} />
      <Logo />
      {/* <Search /> */}
    </>
  );
}
export default App;
