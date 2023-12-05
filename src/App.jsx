
import { useState } from "react";
import "./App.css"
function App() {
  const [input, setInput] = useState()


  const handleinput=(e)=>{
   setInput(e.target.value)
 JSON.stringify(localStorage.setItem("companyname",input))
  }

const [location,setLocation] = useState()

const handlelocation = (event)=>{
setLocation(event.target.value)
  JSON.stringify(localStorage.setItem("location",location))
}


const [valuationdate,setValuationdate] = useState()

const handlevaluationdate = (event)=>{
  setValuationdate(event.target.value)
  JSON.stringify(localStorage.setItem("valuationdate",valuationdate))
}

const [date,setDate]  = useState()
const handledate =(event)=>{
setDate(event.target.value)
localStorage.setItem("date",date)
}
  
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="iconbell"><i className="bi bi-bell"></i></div>
          <div className="iconmoon"><i className="bi bi-moon"></i></div>
          <div className="settingicon"><i className="bi bi-gear"></i></div>
          <div ><span><img className="logo" src="https://img.freepik.com/free-vector/cool-beard-man-barber-head-with-glasses-cartoon-vector-icon-illustration-people-barber-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3960.jpg" alt="" /></span><p className="name">joo muri <i className="bi bi-caret-down-fill"></i></p></div>
        </div>


        <div className="sidebar">
          <div className="valutionsbtn">
            <p className="valtext">valuations</p>
          </div>
          <div className="activitybtn">
            <p className="valtext">Activity</p>
          </div>
        </div>
        <div className="contant-container">
          <div className="company-valuaton"><span >valuation of company</span><div className="line"></div>
          </div>
          <div className="box-div">
            <div className="box">
              <p className="detailstext">company Details</p>
              <div className="compeltedicon"> <i className="bi bi-check-circle"></i></div>
              <button className="completed">completed</button>
            </div>
            <div className="box" style={{ background: "blue", color: "white" }}>
              <p className="detailstext">Model inputs</p>
              <div className="progressicon"> <i className="bi bi-arrow-counterclockwise"></i></div>
              <button className="completed">in progress</button>
            </div>
            <div className="box" style={{ background: "white", color: "black", border: "none" }}>
              <p className="detailstext">Review form</p>
              <div className="fileicon"> <i className="bi bi-file-earmark"></i></div>
              <button className="completed" style={{ background: "#d5d5d5", color: "blue" }}>pending</button>
            </div>
            <div className="box" style={{ background: "white", color: "black", border: "none" }}>
              <p className="detailstext">Evaluate Result</p>
              <div className="Resulticon"> <i className="bi bi-card-list"></i></div>
              <button className="completed" style={{ background: "#d5d5d5", color: "blue" }}>pending</button>
            </div>
            <div className="box" style={{ background: "white", color: "black", border: "none" }}>
              <p className="detailstext">Report Details</p>

              <button className="completed" style={{ background: "#d5d5d5", color: "blue" }}>pending</button>
            </div>
          </div>
          <div className="form-container">
            <div className="container-fluid">
              <div className="company-valuaton" style={{ color: "black" }}><span >company Details</span><div className="line-2"></div>
              </div>
              <div className="row  justify-content-evenly">
                <div className="col-5  mt-5" >
                  <div className="form-floating">
                    <input type="text" value={input} onChange={handleinput} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput" style={{ marginTop: "-1.8rem" }}>Company Name</label>
                  </div></div>

                <div className="col-5  mt-5"  >
                  <div className="form-floating ">
                    <input type="date" value={date} onChange={handledate} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">valuation date</label>
                  </div>
                </div>
                <div className="col-5  mt-5"  >
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Reporting units</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-5  mt-5"  >
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Currency</option>
                    <option value="1">Dollor</option>
                    <option value="2">Euro</option>

                  </select>
                </div>
                <div className="col-5  mt-5"  >
                  <div className="form-floating ">
                    <input type="text" value={location} onChange={handlelocation} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput" style={{ marginTop: "-1.8rem" }}>location</label>
                  </div>
                </div>
                <div className="col-5  mt-5"  >
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Indrustry</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-5  mt-5"  >
                  <div className="form-floating ">
                    <input type="text" value={valuationdate} onChange={handlevaluationdate} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput" style={{ marginTop: "-1.8rem" }}>Outstanding Shares</label>
                  </div>
                </div>
                <div className="col-5  mt-5"  >
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Tax Rate</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>


              </div>
            </div>

            <button className="valuaton-model" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Select valuation model</button>
            <button className="next">Next</button>



            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="checkbtn-div border">
                      <p>DCF Aproche</p>

                      <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                          FCFE
                          <span className="Helper">Helper text detail abpout this model in 1-2 line</span>
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                          FCFE
                          <span className="Helper">Helper text detail abpout this model in 1-2 line</span>
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                          Excess earning
                          <span className="Helper">Helper text detail abpout this model in 1-2 line</span>
                        </label>
                      </div>

                      <div style={{ display: "flex", gap: "2rem" }} className="border mb-3 mt-2" >
                        <div className="form-check ">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                          <label className="form-check-label" for="flexRadioDefault2">
                            Going Concern
                          </label>
                        </div>
                        <div className="form-check ">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                          <label className="form-check-label" for="flexRadioDefault2">
                            Finite projection
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="checkbtn-div border mt-3 mb-3">
                      <p>Income Aproch</p>

                      <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                          NAV
                          <span className="Helper">Helper text detail abpout this model in 1-2 line</span>
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                          Comparable transctions
                          <span className="Helper">Helper text detail abpout this model in 1-2 line</span>
                        </label>
                      </div>
                      <div className="form-check mt-2 ">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2 mb-2" />
                        <label className="form-check-label mb-2" for="flexRadioDefault2">
                          Comparable compaines
                          <span className="Helper">Helper text detail abpout this model in 1-2 line</span>
                        </label>
                      </div>

                    </div>
                    <input type="file" className="fileuploader mb-5" />
                    <button className="submit">submit</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
