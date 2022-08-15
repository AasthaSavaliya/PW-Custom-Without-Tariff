import { useState } from "react";
import logo from "./assets/Black-Font.png";
import copy from "./assets/clippy.svg";
import "./App.css";

function App() {
  let initialFormData = {
    goldPrice: 38,
    goldWeight: "",
    roundWeight: "",
    roundPrice: 300,
    baguetteWeight: "",
    roundTotal: 0,
    baguettePrice: 400,
    goldTotal: 0,
    baguetteTotal: 0,
    miscTotal: 0,
    miscPrice: 0,
    miscWeight: "",
    totalWithoutRound: 0,
  };

  // let initialWeight={
  //   goldWeight:'',
  //   roundWeight:'',
  //   baguetteWeight:'',
  //   miscWeight:''
  // }
  const [formData, setFormData] = useState(initialFormData);
  // const [formData, setformData] = useState(initialWeight)

  function handleChange(fieldName, e) {
    setFormData((prevState) => {
      let updatedValues = {
        ...prevState,
        [fieldName]: e.target.value,
      };

      // setFormData({...formData,[fieldName]:e.target.value})

      updatedValues["goldTotal"] = isNaN(
        parseFloat(updatedValues["goldWeight"])
      )
        ? updatedValues["goldPrice"] * 0
        : updatedValues["goldPrice"] * parseFloat(updatedValues["goldWeight"]);
      // console.log("gold total", updatedValues["goldTotal"]);

      updatedValues["baguetteTotal"] = isNaN(
        parseFloat(updatedValues["baguetteWeight"])
      )
        ? updatedValues["baguettePrice"] * 0
        : updatedValues["baguettePrice"] *
          parseFloat(updatedValues["baguetteWeight"]);
      // console.log("baguette total", updatedValues["baguetteTotal"]);

      updatedValues["miscTotal"] = isNaN(
        parseFloat(updatedValues["miscWeight"])
      )
        ? updatedValues["miscPrice"] * 0
        : updatedValues["miscPrice"] * parseFloat(updatedValues["miscWeight"]);
      // console.log("misc total", updatedValues["miscTotal"]);

      updatedValues["roundTotal"] = isNaN(
        parseFloat(updatedValues["roundWeight"])
      )
        ? updatedValues["roundPrice"] * 0
        : updatedValues["roundPrice"] *
          parseFloat(updatedValues["roundWeight"]);
      // console.log("round total", updatedValues["roundTotal"]);

      updatedValues["totalWithoutRound"] =
        updatedValues["goldTotal"] +
        updatedValues["baguetteTotal"] +
        updatedValues["miscTotal"];

      // console.log("total without - ", updatedValues.totalWithoutRound);
      if (e.target.value.length === 0) {
        updatedValues[fieldName] = 0;
      }
      return updatedValues;
    });
  }

  // function handleChange(fieldName,e){
  //   // console.log(formData,e.target.value, fieldName)
  //
  //     setFormData((prevState => {
  //
  //       let updatedValues ={...prevState,
  //         [fieldName]:e.target.value
  //       }
  //
  //       // console.log("Updated values of field",updatedValues)
  //
  //       updatedValues['goldTotal'] = updatedValues['goldPrice'] * parseFloat(updatedValues['goldWeight'])
  //       // console.log('gold total',updatedValues['goldTotal'])
  //
  //       updatedValues['baguetteTotal'] = updatedValues['baguettePrice'] * parseFloat(updatedValues['baguetteWeight'])
  //       // console.log('baguette total',updatedValues['baguetteTotal'])
  //
  //       updatedValues['miscTotal'] = updatedValues['miscPrice'] * parseFloat(updatedValues['miscWeight'])
  //       // console.log('misc total',updatedValues['miscTotal'])
  //
  //       updatedValues['roundTotal']=updatedValues["roundPrice"] * parseFloat(updatedValues['roundWeight'])
  //       // console.log('round total',updatedValues['roundTotal'])
  //
  //       updatedValues['totalWithoutRound'] = (updatedValues['goldTotal'] + updatedValues['baguetteTotal'] +
  //                                            updatedValues['miscTotal'])
  //       // console.log('total without round ',updatedValues['totalWithoutRound'])
  //
  //       if(isNaN(updatedValues['goldTotal']) ){
  //         updatedValues['goldTotal'] = 0
  //       }
  //       if(isNaN(updatedValues['baguetteTotal']) ){
  //         updatedValues['baguetteTotal'] = 0
  //       }
  //       if(isNaN(updatedValues['miscTotal']) ){
  //         updatedValues['miscTotal'] = 0
  //       }
  //       // if(isNaN(updatedValues['roundTotal']) ){
  //       //   updatedValues['roundTotal'] = 0
  //       // }
  //
  //       if(isNaN(updatedValues['totalWithoutRound'])){
  //         updatedValues['totalWithoutRound'] = 0
  //       }
  //
  //        if(e.target.value.length === 0) {
  //         updatedValues[fieldName] = 0
  //       }
  //
  //       return updatedValues
  //     }));
  // }

  // function handleChange((fieldName,e){
  //   setformData({...formData,[fieldName]:e.target.value})
  //   handleChange()
  // }

  function clipBoadHandler(e) {
    e.preventDefault();
    let textToCopy = "";
    [300, 350, 400, 450].map((value) => {
      textToCopy += `\n$${value} / Ct = ${parseFloat(
        formData["totalWithoutRound"] + formData["roundWeight"] * value * 1.1
      ).toFixed(2)}`;
    });

    navigator.clipboard.writeText(textToCopy);
  }

  function resetForm() {
    const resetData = {
      // goldPrice:'',
      goldWeight: "",
      roundWeight: "",
      // roundPrice:'',
      baguetteWeight: "",
      // baguettePrice:'',
      miscWeight: "",
      goldTotal: 0,
      baguetteTotal: 0,
      miscTotal: 0,
      miscPrice: 0,
      roundTotal: 0,
      roundPrice: 300,
      totalWithoutRound: 0,
    };

    setFormData((prevState) => {
      return { ...prevState, ...resetData };
    });
  }

  // useEffect(() => {
  //   // console.log("fomr data - ", formData);
  // }, [formData]);

  // useEffect(() => {
  //   console.log(formData);
  //   // console.log(parseFloat(formData['goldWeight']))
  //   // console.log(parseFloat(formData['roundWeight']))
  //   // console.log(parseFloat(formData['baguetteWeight']))
  //   // console.log(parseFloat(formData['miscWeight']))

  //   formData["goldTotal"] =
  //     formData["goldPrice"] * isNaN(parseFloat(formData["goldWeight"]))
  //       ? 0
  //       : parseFloat(formData["goldWeight"]);
  //   console.log("gold total", formData["goldTotal"]);

  //   formData["baguetteTotal"] =
  //     formData["baguettePrice"] * isNaN(parseFloat(formData["baguetteWeight"]))
  //       ? 0
  //       : parseFloat(formData["baguetteWeight"]);
  //   console.log("baguette total", formData["baguetteTotal"]);

  //   formData["miscTotal"] =
  //     formData["miscPrice"] * isNaN(parseFloat(formData["miscWeight"]))
  //       ? 0
  //       : parseFloat(formData["miscWeight"]);
  //   console.log("misc total", formData["miscTotal"]);

  //   formData["roundTotal"] =
  //     formData["roundPrice"] * isNaN(parseFloat(formData["roundWeight"]))
  //       ? 0
  //       : parseFloat(formData["roundWeight"]);
  //   console.log("round total", formData["roundTotal"]);

  //   formData["totalWithoutRound"] =
  //     formData["goldTotal"] + formData["baguetteTotal"] + formData["miscTotal"];
  // }, [formData]);

  return (
    <div>
      <div className="py-4 bg-light branding">
        <img
          src={logo}
          alt="Prime Wholesale logo"
          width="170px"
          className="img-responsive center-block d-block mx-auto"
        />
      </div>

      <section className="h-100 p-md-5 p-3">
        <form id={"main-form"}>
          {/* Heading */}
          <h3 className="text-center py-2" style={{ fontFamily: "serif" }}>
            Custom Jewelry Pricing
          </h3>

          {/* GOLD CONTAINER */}
          <div className="gold-containers">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-2 m-0">Gold</h4>
              <input
                name="gold"
                onChange={handleChange.bind(this, "goldWeight")}
                type="text"
                className="form-control text-center"
                style={{ borderBottom: "1px solid black", borderRadius: 0 }}
                aria-label="Grams"
                value={formData["goldWeight"]}
              />
              <span>Gr.</span>
            </div>

            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input
                name="goldPrice"
                onChange={handleChange.bind(this, "goldPrice")}
                type="text"
                className="form-control text-center"
                aria-label="Rate"
                value={formData["goldPrice"]}
              />
              <label className={"me-3"}>=</label>
              <label>{formData["goldTotal"].toFixed(2)}</label>
            </div>
          </div>
          {/* GOLD CONTAINER END*/}

          <hr />

          {/* ROUND DIAMOND CONTAINER */}
          <div className="round-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-2 m-0">Round Diamonds</h4>
              <input
                type="text"
                onChange={handleChange.bind(this, "roundWeight")}
                className="form-control text-center"
                aria-label="Grams"
                value={formData["roundWeight"]}
                style={{ borderBottom: "1px solid black", borderRadius: 0 }}
              />
              <span>Ctw.</span>
            </div>
            <div className="input-group mb-3 pe-5">
              <form>
                <select
                  onChange={handleChange.bind(this, "roundPrice")}
                  name="roundPrices"
                >
                  <option value={300}>300</option>
                  <option value={350}>350</option>
                  <option value={400}>400</option>
                  <option value={450}>450</option>
                </select>
              </form>
              <label className={"mx-3"}>=</label>

              <label>{formData["roundTotal"].toFixed(2)}</label>
            </div>
          </div>
          {/* ROUND DIAMOND CONTAINER END */}

          <hr />

          {/* BAGUETTE DIAMOND CONTAINER*/}

          <div className="baguette-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-2 m-0">Baguette Diamonds</h4>
              <input
                type="text"
                onChange={handleChange.bind(this, "baguetteWeight")}
                className="form-control text-center"
                value={formData["baguetteWeight"]}
                aria-label="Carat weight"
                style={{ borderBottom: "1px solid black", borderRadius: 0 }}
              />
              <span>Ctw.</span>
            </div>
            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input
                type="text"
                value={formData["baguettePrice"]}
                className="form-control text-center"
                aria-label="Rate"
                onChange={handleChange.bind(this, "baguettePrice")}
              />

              <label className={"me-3"}>=</label>
              <label>{formData["baguetteTotal"].toFixed(2)}</label>
            </div>
          </div>
          {/*BAGUETTE DIAMOND CONTAINER END*/}

          <hr />

          {/*MISCELLANEOUS DIAMOND CONTAINER*/}
          <div className="misc-diam-container">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-2 m-0">Misc. Diamonds</h4>
              <input
                type="text"
                onChange={handleChange.bind(this, "miscWeight")}
                className="form-control text-center"
                value={formData["miscWeight"]}
                aria-label="Grams"
                style={{ borderBottom: "1px solid black", borderRadius: 0 }}
              />
              <span>Ctw.</span>
            </div>

            <div className="input-group mb-3 pe-5">
              <label>$</label>
              <input
                type="text"
                onChange={handleChange.bind(this, "miscPrice")}
                className="form-control text-center"
                aria-label="Rate"
                value={formData["miscPrice"]}
                style={{ borderBottom: "1px solid grey", borderRadius: 0 }}
              />

              <label className={"me-3"}>=</label>
              <label>{formData["miscTotal"].toFixed(2)}</label>
            </div>
          </div>
          {/*MISCELLANEOUS DIAMOND CONTAINER END*/}

          <hr />

          {/*TOTAL CONTAINER*/}
          <div className="total-container">
            <form className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <h3 className="text-primary">Grand Total</h3>
                  {/*<button onClick={clipBoadHandler} className="btn copy">*/}
                  {/*<img src={copy} alt="Copy to clipboard"/>*/}
                  <h3 onClick={resetForm}>Clear</h3>
                  {/*</button>*/}
                </div>
                <div className="p-2 row" style={{ border: "1px solid grey" }}>
                  <div className="col">
                    {[300, 350, 400, 450].map((value) => {
                      return (
                        <div className="input-group" key={value}>
                          <span className="fs-5">${value} / ct = </span>
                          <span className={"fs-5 ms-2"}>
                            {isNaN(parseFloat(formData["roundWeight"]))
                              ? (
                                  (formData["totalWithoutRound"] + 0 * value) *
                                  1.1
                                ).toFixed(2)
                              : (
                                  (formData["totalWithoutRound"] +
                                    value * formData["roundWeight"]) *
                                  1.1
                                ).toFixed(2)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="col-1 d-flex justify-content-end align-items-start">
                    <button onClick={clipBoadHandler} className="btn copy">
                      <img src={copy} alt="Copy to clipboard" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/*TOTAL CONTAINER END*/}
        </form>
      </section>
    </div>
  );
}

export default App;
