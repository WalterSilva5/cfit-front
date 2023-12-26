import { Routes, Route } from 'react-router-dom';

import { Page404 } from '../pages/page-404';
import { Home } from '../pages/home';
import { PageExample } from '../pages/page-example';
import { Deep } from '../pages/page-example/deep';
import { PageRequest } from '../pages/page-request';
import { LoginPage } from '@/pages/auth/login';
import { UserListing } from '@/pages/user/user.listing';
import { ExerciseListing } from '@/pages/exercise/exercise.listing';
import ExerciseForm from '@/pages/exercise/exercise.form';
import { MuscleGroupListing } from '@/pages/muscle-group/muscle-group.listing';
import MuscleGroupForm from '@/pages/muscle-group/muscle-group.form';
import { WorkoutListing, WorkoutForm } from '@/pages/workout';
// add_import_routes


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<UserListing />} />
      <Route path="/example" element={<PageExample />} />
      <Route path="muscle-group">
	      <Route path="/muscle-group" element={<MuscleGroupListing />} />
  	    <Route path="/muscle-group/new" element={<MuscleGroupForm />} />
				<Route path="/muscle-group/:id" element={<MuscleGroupForm />} />
			</Route>
      <Route path="exercise">
        <Route path="/exercise" element={<ExerciseListing />} />
        <Route path="/exercise/new" element={<ExerciseForm />} />
        <Route path="/exercise/:id" element={<ExerciseForm />} />
      </Route>
      <Route path="workout">
        <Route path="/workout" element={<WorkoutListing/>}/>
        <Route path="/workout/new" element={<WorkoutForm/>}/>
        <Route path="/workout/:id" element={<WorkoutForm/>}/>
      </Route>
      {/* replace_with_new_route */}
      <Route path="deep">
        <Route path="/deep" element={<Deep />} />
        <Route path="/deep/:parameter" element={<Deep />} />
      </Route>
      <Route path="/page-with-request" element={<PageRequest />} />
      <Route path="*" element={<Page404 />} />
    <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
}
