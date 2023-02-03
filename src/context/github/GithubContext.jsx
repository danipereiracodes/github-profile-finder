import { createContext, useState, useReducer } from "react";
import GithubReducer from "./GithubReducer";


const GithubContext = createContext()

export const GithubProvider = ({children}) => {

  const initialState = {
    users: [],
    loading: false
  }

  const [state, dispatch ] = useReducer(GithubReducer, initialState)

    const getUsers = async () => {

      setLoading()

        const res = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
          headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
          }
        })
  
        const data = await res.json()
        
        dispatch({
          type: 'GET_USERS',
          payload: data
        })
    
      }

      const setLoading = () => dispatch({
        type:'SET_LOADING'
      })

      return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        getUsers
      }}>
        {children}
      </GithubContext.Provider>
}

export default GithubContext

