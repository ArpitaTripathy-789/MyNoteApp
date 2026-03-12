import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import Globalcontext from "./noteapp/context/Globalcontext";


createRoot(document.querySelector("#root")).render(
    <Globalcontext>
        <App/>
    </Globalcontext>
)