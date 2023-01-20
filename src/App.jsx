import { BrowserRouter, Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layout/Layout"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  

  return (
   <BrowserRouter>
   <Provider store={store}>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
       </Route>
      
     </Routes>
     </Provider>
   </BrowserRouter>
  )
}

export default App
