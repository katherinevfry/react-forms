import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddStudent from '../views/AddStudent';
import Home from '../views/Home';
import Students from '../views/Students';
import SingleStudent from '../views/SingleStudent';
import NotFound from '../views/NotFound';

function Routes({ students, setStudents, user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user}/>} />
        <Route path='/add-students' component={() => (<AddStudent setStudents={setStudents} />)} />
        <Route
        exact
        path='/students'
        component={() => (<Students students={students} setStudents={setStudents} />)} />
        <Route path='/student/:firebaseKey' component={SingleStudent} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array,
  setStudents: PropTypes.func,
  user: PropTypes.any
};

export default Routes;
