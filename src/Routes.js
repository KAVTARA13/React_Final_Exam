import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loader } from './components/loader/Loader';
import * as routes from './utils/routePaths';
import Posts from './pages/posts';
import PostsProviderComponent from './providers/PostsProvider';

const LoginPage = React.lazy(() => import('./pages/auth/login'));
const ProfilePage = React.lazy(() => import('./pages/profile'));

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PostsProviderComponent>
          <Route path={routes.POSTS_PATH}>
            <Posts />
          </Route>
          <Route path={routes.PROFILE_PATH}>
            <ProfilePage />
          </Route>
        </PostsProviderComponent>
        <Route path={routes.LOGIN_PATH}>
          <LoginPage />
        </Route>
        <Route path={routes.HOME}>
          <Posts />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
