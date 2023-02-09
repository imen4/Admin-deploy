import './App.css';
import {Route, Routes} from 'react-router-dom'
import ContactList from './components/ContactList'
import Home from './components/Home'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EditAdd from "./components/EditAdd";
import ProductList from "./components/ProductList"
import ProductEditAdd from "./components/ProductEditAdd"

import CommandList from "./components/CommandList"
import CommandEditAdd from "./components/CommandEditAdd"

function App() {
  return (
    <div >     
      <Header/>

      <div className="ui attached pushable" style={{height: '100vh'}}>
          <Sidebar />
          <div style={{margin:"10px 0 10px 50vh "}}>
          
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact_list' element={<ContactList/>}/>
            <Route path="/edit/:id" element={<EditAdd />} />
            <Route path="/add" element={<EditAdd />} />

            <Route path='/product_list' element={<ProductList/>}/>
            <Route path="/editproduct/:id" element={<ProductEditAdd />} />
            <Route path="/addproduct" element={<ProductEditAdd />} />

            <Route path='/command_list' element={<CommandList/>}/>
            <Route path="/editcommand/:id" element={<CommandEditAdd />} />
            <Route path="/addcommand" element={<CommandEditAdd />} />
         </Routes>
        
          </div>
        </div>
        
        

      
    </div>
  );
}

export default App;
