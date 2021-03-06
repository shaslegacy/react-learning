import React from 'react'
import { Route, Redirect } from 'react-router-dom';


const isAuth = true;
export const PrivateRoute = ({ children, ...rest}) => {

  return (
    <Route 
    {...rest}
     render ={() => 
        isAuth ? <div id="wrapper">{children}</div> : <Redirect to="/login" />
    }>
    </Route>
  )
}
