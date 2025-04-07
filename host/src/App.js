import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("remoteA/remoteAapp"));
const RemoteBapp = React.lazy(()=> import("remoteB/remoteBapp"));
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
        <RemoteBapp failure={false} />
      </Suspense>
    </>
  );
}

export default App;
