import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function App() {
  const [count, setCount] = useState(0)

  function printFn() {
    const capture = document.querySelector('.incs')
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p', 'mm', 'a4')
      const cmponentWidth = doc.internal.pageSize.getWidth()
      const cmponentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, cmponentWidth, cmponentHeight)
      doc.save('print.pdf')
    })
  }

  return (
    <>
      <div className="warppwe" style={{ height: '', overflow: '', width: '100%' }}>

        <div className="incs" style={{ width: '1240px', height: '1754px' }}>
          <div className="inner">
            <div className="imgBox">
              <img src="/logo.svg" alt="logo" />
              <div className="doName">
                Billing Instaruction Docket
              </div>
            </div>
            <div className="doDocketNo">
              <div className="soSec">
                <div className="title">
                  SO Name:
                </div>
                <div className="valBox">
                  Rushikesh Pingle
                </div>
              </div>
              <div className="soSec">
                <div className="title">
                  Docket Number:
                </div>
                <div className="valBox">
                  TEAM/23/07/34
                </div>
              </div>
            </div>

            <div className="borBoxContainer">
              <div className="rowCont">
                <div className="leftSec">
                  <div className="element">
                    <div className="entry">
                      <div className="entryTitile">
                        CTDMS Order No :
                      </div>
                      <div className="entryVal">
                        236235239
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Booking Date :
                      </div>
                      <div className="entryVal">
                        2023/07/05
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Modal :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Color :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Hpa :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                  </div>
                  <div className="element add brnone">
                    <div className="elemheading">
                      Registartion address
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Name :
                      </div>
                      <div className="entryVal">
                        Rushikesh Pingle
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Address :
                      </div>
                      <div className="entryVal">
                        shdvf avsdjfh asjdhfvsad
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">

                      </div>
                      <div className="entryVal">
                        STATE: Maharashtra
                        DIST: Kolhapur <br />
                        TAL: Karveer
                        PIN: 416010
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Tel No :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        GST :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Mail ID :
                      </div>
                      <div className="entryVal">
                        rushi0620@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rightSec">
                  <div className="element">
                    <div className="entry">
                      <div className="entryTitile">
                        mode of payment :
                      </div>
                      <div className="entryVal">
                        236235239
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        insurance :
                      </div>
                      <div className="entryVal">
                        2023/07/05
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        registration :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Special no :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Order source :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                  </div>
                  <div className="element add brnone">
                    <div className="elemheading">
                      Registartion address
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Name :
                      </div>
                      <div className="entryVal">
                        Rushikesh Pingle
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Address :
                      </div>
                      <div className="entryVal">
                        shdvf avsdjfh asjdhfvsad
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">

                      </div>
                      <div className="entryVal">
                        STATE: Maharashtra
                        DIST: Kolhapur <br />
                        TAL: Karveer
                        PIN: 416010
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Tel No :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="borBoxContainer bel">
              <div className="rowCont">
                <div className="leftSec">
                  <div className="element">
                    <div className="entry">
                      <div className="entryTitile">
                        CTDMS Order No :
                      </div>
                      <div className="entryVal">
                        236235239
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Booking Date :
                      </div>
                      <div className="entryVal">
                        2023/07/05
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Modal :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Color :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Hpa :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                  </div>
                  <div className="element add brnone">
                    <div className="elemheading">
                      Registartion address
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Name :
                      </div>
                      <div className="entryVal">
                        Rushikesh Pingle
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Address :
                      </div>
                      <div className="entryVal">
                        shdvf avsdjfh asjdhfvsad ashdfg
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">

                      </div>
                      <div className="entryVal">
                        STATE: Maharashtra
                        DIST: Kolhapur <br />
                        TAL: Karveer
                        PIN: 416010
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Tel No :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        GST :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Mail ID :
                      </div>
                      <div className="entryVal">
                        rushi0620@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rightSec">
                  <div className="element">
                    <div className="entry">
                      <div className="entryTitile">
                        mode of payment :
                      </div>
                      <div className="entryVal">
                        236235239
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        insurance :
                      </div>
                      <div className="entryVal">
                        2023/07/05
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        registration :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Special no :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Order source :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                  </div>
                  <div className="element add brnone">
                    <div className="elemheading">
                      Registartion address
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Name :
                      </div>
                      <div className="entryVal">
                        Rushikesh Pingle
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Address :
                      </div>
                      <div className="entryVal">
                        shdvf avsdjfh asjdhfvsad
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">

                      </div>
                      <div className="entryVal">
                        STATE: Maharashtra
                        DIST: Kolhapur <br />
                        TAL: Karveer
                        PIN: 416010
                      </div>
                    </div>
                    <div className="entry">
                      <div className="entryTitile">
                        Tel No :
                      </div>
                      <div className="entryVal">
                        GDSDJH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <button onClick={() => { printFn() }}>
        download
      </button>
    </>
  )
}

export default App
