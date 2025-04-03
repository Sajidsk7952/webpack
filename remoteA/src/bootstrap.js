import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

function RemoteApp(props){
    console.log({...props});
    return <>
        <App />
    </>
}

export default RemoteApp;