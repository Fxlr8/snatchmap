import React, { useReducer, useContext, createContext } from 'react';
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

const initialState = {
  sidebar: true,
  propertyId: '5df642455341ca2822139b31',
  ownerId: '5df642455341ca2822139b33'
}

const StateContext = createContext<{ state: AppState, dispatch: React.Dispatch<AppActions> }>(
  {
    state: initialState,
    dispatch: () => initialState
  }
)

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Map />
      <Sidebar show={state.sidebar} propertyId={state.propertyId} ownerId={state.ownerId} />
      <Logo />
      {/* <Search /> */}
    </StateContext.Provider >
  );
}

export {
  StateContext
}
export default App
