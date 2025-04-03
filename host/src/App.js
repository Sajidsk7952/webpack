import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("remoteA/remoteApp"));

function App() {
  return (
    <>
      <h1>I am the host component</h1>
      <Suspense
        fallback={
          <>
            <span>Loading....</span>
          </>
        }
      >
        <RemoteApp success={true}/>
      </Suspense>
    </>
  );
}

export default App;
