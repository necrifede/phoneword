import React from 'react'

function InputResult () {
    return (
      <div className="row top-buffer">
        <div className="col-2"/>
        <div className="col-8">
          <input id="inputResult" className="form-control" type="text" placeholder="Result" disabled/>
        </div>
        <div className="col-2"/>
      </div>
    )
}

export default InputResult

// <div className="row top-button-buffer">
//             <form autocomplete="off" action="/action_page.php">
//               <div className="autocomplete">
//                 <input id="myInput" type="text" name="myCountry" placeholder="Country"/>
//               </div>
//             </form>
//           </div>