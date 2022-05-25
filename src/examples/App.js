import Button from '../components/Button';
import TextField from '../components/TextField';
import Select from '../components/Select';
import Chips from '../components/Chips';
import { useState } from 'react';

import('../core/main.scss');

function App() {

  const [val, setVal] = useState('world');
  const [color, setColor] = useState('#c0392b');

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="el bg-red text-white radius-sm margin-xs padding-sm">col-12</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="el bg-green text-white radius-sm margin-xs padding-sm">col-6</div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="el bg-green text-white radius-sm margin-xs padding-sm">col-6</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="el bg-orange text-white radius-sm margin-xs padding-sm">col-4</div>
          </div>
          <div className="col-12 col-md-4">
            <div className="el bg-orange text-white radius-sm margin-xs padding-sm">col-4</div>
          </div>
          <div className="col-12 col-md-4">
            <div className="el bg-orange text-white radius-sm margin-xs padding-sm">col-4</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-3">
            <div className="el bg-blue text-white radius-sm margin-xs padding-sm">col-3</div>
          </div>
          <div className="col-12 col-sm-3">
            <div className="el bg-blue text-white radius-sm margin-xs padding-sm">col-3</div>
          </div>
          <div className="col-12 col-sm-3">
            <div className="el bg-blue text-white radius-sm margin-xs padding-sm">col-3</div>
          </div>
          <div className="col-12 col-sm-3">
            <div className="el bg-blue text-white radius-sm margin-xs padding-sm">col-3</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TextField value={val} onChange={(e) => setVal(e.target.value)}></TextField><Button onClick={() => {
              setVal('world');
              setColor('#c0392b');
            }}>Reset</Button>
            <Select
              label="Color"
              onChange={(e) => setColor(e.target.value)}
              options={[
                { key: 'red', value: '#c0392b', label: 'Red', selected: true },
                { key: 'blue', value: '#2980b9', label: 'Blue' },
                { key: 'orange', value: '#e67e22', label: 'Orange' },
                { key: 'purple', value: '#9b59b6', label: 'Purple' },
                { key: 'green', value: '#27ae60', label: 'Green' },
              ]}
              value={color}
            />
            <h1 style={{ fontSize: '3rem', color }}>Hello: {val}</h1>
            <Chips items={['Chips 1', 'Chips 2', 'Chips 3', 'Chips 4']} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
