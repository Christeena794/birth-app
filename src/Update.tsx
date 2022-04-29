import React from 'react';
import { setConstantValue } from 'typescript';

export default function InputField({name,text}) {
function Update() {
  return (
    <div>
     <div>
                  <input type="text" />
                  <button type='text' value={state} onChange={(e) => setConstantValue(e.target.value)}>Update</button>
              {state}
              
              </div>    
    </div>
}
  );
}

export default Update;