import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import {
  Button
} from '@mui/material'
import { ExercisePage } from './exercise'

export function AdminPage (props: any) {
  const { pathname, search } = props.location
  const { history } = props
  return (
    <div>
      <h1>ADMIN</h1>
      <Router>
        <Route path="/admin/exercise" component={ExercisePage} />
      </Router>
      <Button onClick={() => {
        history.push('/admin/exercise')
      }}>exercicios</Button>
    </div>
  )
}

export default withRouter(AdminPage)
