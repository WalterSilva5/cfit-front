import { Routes, Route } from 'react-router-dom';

import { Page404 } from '../pages/page-404';
import { Home } from '../pages/home';
import { PageExample } from '../pages/page-example';
import { Deep } from '../pages/page-example/deep';
import { PageRequest } from '../pages/page-request';
import { LoginPage } from '@/pages/auth/login';
import { UserListing } from '@/pages/user/user.listing';
import { MuscleGroupListing } from '@/pages/muscle-group/muscle-group.listing';
import MuscleGroupForm from '@/pages/muscle-group/muscle-group.form';


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<UserListing />} />
      <Route path="/example" element={<PageExample />} />
      <Route path="/muscle-group" element={<MuscleGroupListing />} />
      <Route path="/muscle-group/new" element={<MuscleGroupForm />} />
			<Route path="/muscle-group/:id" element={<MuscleGroupForm />} />
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
