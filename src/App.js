import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("remote/App"));
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
const App = () => {
  return (
    <div>
      <div class="header">
        <h1>Host</h1>
      </div>
      <div>
        <Suspense fallback={"loading..."}>
          <ErrorBoundary >
            <RemoteApp />
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
};
export default App;
