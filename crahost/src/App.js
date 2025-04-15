import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';
const RemoteApp = lazy(() => import("remoteA/remoteAapp"));
const RemoteBapp = lazy(()=> import("remoteB/remoteBapp"));
function App() {
  return (
    <div className="App">
      <h1>CRA HOST APP</h1>
      <Suspense fallback={<p>loading....</p>}>
          <RemoteApp success={true} />
          <RemoteBapp success={false} />
      </Suspense>
    </div>
  );
}

export default App;
