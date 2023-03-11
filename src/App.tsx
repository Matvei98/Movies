import React from "react";
import './index.css';
import './App.css';
import {Cardheader} from './components/Cardheader';
import { Cardfooter } from './components/Cardfooter';
import {Carditem} from './components/Carditem';
function App () {
return (
<>
<div className='Cards'>
<Cardheader/> 
<Carditem/>
<Cardfooter/>  
</div>
</>
);
}
export default App;