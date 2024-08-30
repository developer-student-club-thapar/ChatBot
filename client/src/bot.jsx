import "./bot.css"
import FooterForm from "./Footerform"

import Sidebar from "./sidebar"

import Header from "./header"

import Dock from "./Dock"


export default function Bot(){
    return(
        <div className="mainPg">
           
           <Header />
           <Sidebar />
           <Dock />
           <FooterForm/>

           
            
        </div>
    )
}