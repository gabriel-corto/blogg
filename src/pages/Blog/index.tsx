import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import './style.css'
import { Blogg } from "../../components/Blogg";

export function Blog() {

  return(
    <div className="layout">
      <Header />

      <main className="layout-wrapper">
        <Sidebar />

        <div className="bloggs">
            <Blogg 
              name=""
              location=""
              title=""
              text=""
              />
        </div>
      </main>
    </div>
  )
}