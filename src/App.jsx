import { BrowserRouter, Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layout/Layout"
import { Provider } from "react-redux"
import store from "./store"
import SucursalPage from "./pages/SucursalPage"
import Catalago from "./pages/Catalago"
import EmpleosPage from "./pages/EmpleosPage"

function App() {
  

  return (
   <BrowserRouter>
   <Provider store={store}>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="sucursal"  element={<SucursalPage/>}/>
        <Route path="catalago"  element={<Catalago/>}/>
        <Route path="empleo"  element={<EmpleosPage/>}/>
       </Route>
      
     </Routes>
     </Provider>
   </BrowserRouter>
  )
}

export default App
