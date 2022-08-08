import {useState} from 'react'
import logo from './assets/Black-Font.png'
import copy from './assets/clippy.svg'
import './App.css';

function App() {

  const initialFormData ={
    goldPrice:38,
    goldWeight:0,
    roundWeight:0,
    roundPrice:300,
    baguettePrice:400,
    goldTotal:0,
    baguetteTotal:0,
    miscTotal:0
  }
  const [formData, setFormData] = useState(initialFormData)

  function handleChange(fieldName,e){
    console.log(formData)

      setFormData((prevState => {
        let updatedValues ={...prevState,
          [fieldName]:parseFloat(e.target.value)
        }

        updatedValues['goldTotal'] = updatedValues['goldPrice'] * updatedValues['goldWeight']
        updatedValues['baguetteTotal'] = updatedValues['baguettePrice'] * updatedValues['baguetteWeight']
        updatedValues['miscTotal'] = updatedValues['miscPrice'] * updatedValues['miscWeight']
        updatedValues['totalWithoutRound'] = updatedValues['goldTotal'] + updatedValues['baguetteTotal'] +  updatedValues['miscTotal']
        if(isNaN(updatedValues['totalWithoutRound'])){
          updatedValues['totalWithoutRound'] = 0
        }

        return updatedValues
      }));
  }

  function clipBoadHandler(e) {
    e.preventDefault()
    let textToCopy="";
    [300,350,400,450].map(value =>{
       textToCopy +=`\n$${value} / Ct = ${formData['totalWithoutRound']+(formData['roundWeight']*value)}`
    })

    navigator.clipboard.writeText(textToCopy);
  }

  return (
      <div>
        <div className="py-4 bg-light branding">
          <img src={logo} alt="Prime Wholesale logo" width="170px" className="img-responsive center-block d-block mx-auto"/>
        </div>

        <section className="h-100 p-md-5 p-3">

          {/* Heading */}
          <h3 className="text-center py-2" style={{fontFamily:'serif'}}>Custom Jewelry Pricing</h3>

          {/* GOLD CONTAINER */}
          <div className="gold-containers">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-2 m-0">Gold</h4>
              <input name='gold' onChange={(e)=>handleChange("goldWeight",e)} type="number" className="form-control text-center"
                     style={{borderBottom: '1px solid black', borderRadius: 0}}
                     aria-label="Grams" />
                <span>Gr.</span>
            </div>

            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input name='goldPrice' defaultValue={formData.goldPrice} onChange={(e)=>handleChange("goldPrice",e)}
                     type="number" className="form-control text-center" aria-label="Rate" onfocusout="defaultZero(2);"/>
                <label className={"me-3"}>=</label>
              <label>{formData['goldTotal']}</label>
            </div>
          </div>
          {/* GOLD CONTAINER END*/}

          <hr/>

          {/* ROUND DIAMOND CONTAINER */}
          <div className="round-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-2 m-0">Round Diamonds</h4>
              <input type="number" onChange={(e)=>handleChange("roundWeight",e)}  className="form-control text-center" aria-label="Grams"
                      onfocusout="defaultZero(3);" style={{borderBottom: '1px solid black', borderRadius: 0}}/>
                <span>Ctw.</span>
            </div>
            <div className="input-group mb-3 pe-5">
              <form>
                  <select onChange={(e)=>handleChange("roundPrice",e)} name="roundPrices">
                      <option value={300}>300</option>
                      <option value={350}>350</option>
                      <option value={400}>400</option>
                      <option value={450}>450</option>
                  </select>
              </form>
            <label className={'mx-3'}>=</label>
              <label>{formData["roundPrice"] * formData['roundWeight']}</label>
              </div>

          </div>
          {/* ROUND DIAMOND CONTAINER END */}

          <hr/>

          {/* BAGUETTE DIAMOND CONTAINER*/}
          <div className="baguette-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-2 m-0">Baguette Diamonds</h4>
              <input type="number" onChange={(e)=>handleChange("baguetteWeight",e)}  className="form-control text-center"
                     aria-label="Carat weight" onfocusout="defaultZero(8);" style={{borderBottom: '1px solid black', borderRadius: 0}}/>
                <span>Ctw.</span>
            </div>
            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input type="number" readOnly value={initialFormData['baguettePrice']}  className="form-control text-center rate"  aria-label="Rate"
                     onfocusout="defaultZero(9);"/>

              <label className={"me-3"}>=</label>
              <label>{formData["baguetteTotal"]}</label>
            </div>
          </div>
          {/*BAGUETTE DIAMOND CONTAINER END*/}

          <hr/>

          {/*MISCELLANEOUS DIAMOND CONTAINER*/}
          <div className="misc-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-2 m-0">Misc. Diamonds</h4>
              <input type="number"  onChange={(e)=>handleChange("miscWeight",e)} className="form-control text-center"
                     aria-label="Grams" onfocusout="defaultZero(10);" style={{borderBottom: '1px solid black', borderRadius: 0}}/>
                <span>Ctw.</span>
            </div>

            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input type="number"  onChange={(e)=>handleChange("miscPrice",e)} className="form-control text-center rate"
                     aria-label="Rate" onfocusout="defaultZero(11);"
                     style={{borderBottom: '1px solid grey', borderRadius: 0}}/>

                <label className={"me-3"}>=</label>
              <label>{formData["miscTotal"]}</label>
            </div>
          </div>
          {/*MISCELLANEOUS DIAMOND CONTAINER END*/}

          <hr/>

          {/*TOTAL CONTAINER*/}
          <div className="total-container">
            <form className="row">
              <div className="col-12">
                <h3 className="text-primary">Total</h3>
                <div className="p-2 row" style={{border: '1px solid grey'}}>
                  <div className="col">
                    {
                      [300,350,400,450].map(value => <div className="input-group">
                      <span className="fs-5">${value} / ct = </span>
                        <span className={'fs-5 ms-2'}>{formData['totalWithoutRound']+(formData['roundWeight']*value)}</span>
                    </div> )
                    }

                  </div>

                  <div className="col-1 d-flex justify-content-end align-items-start">
                    <button onClick={clipBoadHandler} className="btn copy">
                      <img src={copy} alt="Copy to clipboard"/>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/*TOTAL CONTAINER END*/}

        </section>
      </div>
  );
}

export default App;