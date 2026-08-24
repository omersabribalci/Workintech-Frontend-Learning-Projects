import React, { useReducer } from 'react';
import reducer, { initialState } from './store/reducers.jsx';
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import {
  changeOperation,
  clearDisplay,
  changeDisplay,
  showResult,
  addMemory,
  clearMemory,
  recallMemory,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleNumClick(event) {
    dispatch(changeDisplay(event.target.value));
  }

  function handleOperationClick(event) {
    dispatch(changeOperation(event.target.value));
  }

  function handleClearClick() {
    dispatch(clearDisplay());
  }

  function handleEqualClick() {
    dispatch(showResult());
  }

  function handleAddMemory() {
    dispatch(addMemory());
  }

  function handleClearMemory() {
    dispatch(clearMemory());
  }

  function handleRecallMemory() {
    dispatch(recallMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.display} />

            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>

              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleAddMemory} />
              <CalcButton value={'MR'} onClick={handleRecallMemory} />
              <CalcButton value={'MC'} onClick={handleClearMemory} />
            </div>
            <div className="row">
              <CalcButton value={'1'} onClick={handleNumClick} />
              <CalcButton value={'2'} onClick={handleNumClick} />
              <CalcButton value={'3'} onClick={handleNumClick} />
            </div>

            <div className="row">
              <CalcButton value={'4'} onClick={handleNumClick} />
              <CalcButton value={'5'} onClick={handleNumClick} />
              <CalcButton value={'6'} onClick={handleNumClick} />
            </div>

            <div className="row">
              <CalcButton value={'7'} onClick={handleNumClick} />
              <CalcButton value={'8'} onClick={handleNumClick} />
              <CalcButton value={'9'} onClick={handleNumClick} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={handleOperationClick} />
              <CalcButton value={'0'} onClick={handleNumClick} />
              <CalcButton value={'-'} onClick={handleOperationClick} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={handleOperationClick} />
              <CalcButton value={'/'} onClick={handleOperationClick} />
              <CalcButton value={'CE'} onClick={handleClearClick} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleEqualClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
