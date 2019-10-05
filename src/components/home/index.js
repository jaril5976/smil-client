import React from 'react';
import withBody from '../HOC/withBody';
import Auth from '../helper/auth';
function Home() {
  return (
    <h1>You logged in as : {Auth.user.email}</h1>
  );
}

export default withBody(Home);
