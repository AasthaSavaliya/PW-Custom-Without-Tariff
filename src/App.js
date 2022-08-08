import {useState} from 'react'
import logo from './assets/Black-Font.png'
import copy from './assets/clippy.svg'
import './App.css';

function App() {

  const [goldWeight, SetGoldWeight] = useState(38)

  function handleChange(e){
    // SetGoldWeight({ : e.target.value });
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
              <h4 className="me-3 m-0">Gold</h4>
              <input name='gold' type="number" className="form-control text-center" id="weight1" style={{borderBottom: '1px solid black', borderRadius: 0}}
                     aria-label="Grams" onfocusout="defaultZero(1);"/>
                <span>Gr.</span>
            </div>

            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input name='goldRate' type="number" className="form-control text-center" id="rate1" value={goldWeight} aria-label="Rate" onfocusout="defaultZero(2);"/>
                <label>=</label>
              <input type="number" className="form-control text-center" id="total1" placeholder="Total" aria-label="Rate"></input>
            </div>
          </div>
          {/* GOLD CONTAINER END*/}

          <hr/>

          {/* ROUND DIAMOND CONTAINER */}
          <div className="round-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-3 m-0">Round Diamonds</h4>
              <input type="number" className="form-control text-center" aria-label="Grams"
                     id="weight2" onfocusout="defaultZero(3);" style={{borderBottom: '1px solid black', borderRadius: 0}}/>
                <span>Ctw.</span>
            </div>
            <div className="input-group mb-3 pe-5">
            <div className="btn-group">
              <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>

            <label className={'ms-3'}>=</label>
                <input type="number" className="form-control text-center" placeholder="Total" aria-label="Rate" id="total6"/>
              </div>

            {/*<div className="input-group mb-3 pe-5">*/}
            {/*  <label>$</label>*/}
            {/*  <input type="number" className="form-control text-center" value="300" aria-label="Rate" id="rate2" onfocusout="defaultZero(4);"/>*/}
            {/*    <label>=</label>*/}
            {/*    <input type="number" className="form-control text-center" placeholder="Total" aria-label="Rate" id="total2"/>*/}
            {/*</div>*/}

            {/*<div className="input-group mb-3 pe-5">*/}
            {/*  <label>$</label>*/}
            {/*  <input type="number" className="form-control text-center" value="350" aria-label="Rate" id="rate3" onfocusout="defaultZero(5);"/>*/}
            {/*    <label>=</label>*/}
            {/*    <input type="number" className="form-control text-center" placeholder="Total" aria-label="Rate" id="total3"/>*/}
            {/*</div>*/}

            {/*<div className="input-group mb-3 pe-5">*/}
            {/*  <label>$</label>*/}
            {/*  <input type="number" className="form-control text-center" value="400" aria-label="Rate" id="rate4" onfocusout="defaultZero(6);"/>*/}
            {/*    <label>=</label>*/}
            {/*    <input type="number" className="form-control text-center" placeholder="Total" aria-label="Rate" id="total4"/>*/}
            {/*</div>*/}

            {/*<div className="input-group mb-3 pe-5">*/}
            {/*  <label>$</label>*/}
            {/*  <input type="number" className="form-control text-center" value="450" aria-label="Rate" id="rate5" onfocusout="defaultZero(7);"/>*/}
            {/*    <label>=</label>*/}
            {/*    <input type="number" className="form-control text-center" placeholder="Total" aria-label="Rate" id="total5"/>*/}
            {/*</div>*/}

          </div>
          {/* ROUND DIAMOND CONTAINER END */}

          <hr/>

          {/* BAGUETTE DIAMOND CONTAINER*/}
          <div className="baguette-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-3 m-0">Baguette Diamonds</h4>
              <input type="number" className="form-control text-center" id="weight3"
                     aria-label="Carat weight" onfocusout="defaultZero(8);" style={{borderBottom: '1px solid black', borderRadius: 0}}/>
                <span>Ctw.</span>
            </div>
            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input type="number" className="form-control text-center rate" value="400" aria-label="Rate" id="rate6" onfocusout="defaultZero(9);"/>

                <label>=</label>
                <input type="number" className="form-control text-center" placeholder="Total" aria-label="Rate" id="total6"/>
            </div>
          </div>
          {/*BAGUETTE DIAMOND CONTAINER END*/}

          <hr/>

          {/*MISCELLANEOUS DIAMOND CONTAINER*/}
          <div className="misc-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-3 m-0">Misc. Diamonds</h4>
              <input type="number" className="form-control text-center" id="weight4"
                     aria-label="Grams" onfocusout="defaultZero(10);" style={{borderBottom: '1px solid black', borderRadius: 0}}/>
                <span>Ctw.</span>
            </div>

            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input type="number" className="form-control text-center rate" aria-label="Rate" id="rate7" onfocusout="defaultZero(11);"
                     style={{borderBottom: '1px solid grey', borderRadius: 0}}/>

                <label>=</label>
                <input type="number" className="form-control text-center" placeholder="Total" aria-label="Rate" id="total7"/>
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
                    <div className="input-group">
                      <span className="fs-5">$300 / ct = </span>
                      <input type="number" className="form-control text-center fs-5" placeholder="Total" id="total8"/>
                    </div>
                    <div className="input-group">
                      <span className="fs-5">$350 / ct = </span>
                      <input type="number" className="form-control text-center fs-5" placeholder="Total" id="total9"/>
                    </div>
                    <div className="input-group">
                      <span className="fs-5">$400 / ct = </span>
                      <input type="number" className="form-control text-center fs-5" placeholder="Total" id="total10"/>
                    </div>
                    <div className="input-group">
                      <span className="fs-5">$450 / ct = </span>
                      <input type="number" className="form-control text-center fs-5" placeholder="Total" id="total11"/>
                    </div>
                  </div>

                  <div className="col-1 d-flex justify-content-end align-items-start">
                    <button className="btn copy">
                      <img src={copy} alt="Copy to clipboard"/>
                    </button>
                  </div>
                </div>
                {/*                  <input type="number" class=" text-center w-100" placeholder="Total" aria-label="Final Total" id="finalTotal">*/}
              </div>
            </form>
          </div>
          {/*TOTAL CONTAINER END*/}

        </section>
      </div>
  );
}

export default App;