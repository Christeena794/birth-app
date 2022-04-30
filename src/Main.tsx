import React from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import "./Main.css";
import IDetails from "./types";

type Props = {};
const Main: React.FC<{item:IDetails}> = (props) => {


    {data.map(date => {
  return (
   <div className="main">
       
           <div>
          <textarea  required>
              <div>
                        {date.name}
                        {date.birthday}
                    </div>
          </textarea>
           
           </div>
           <div className="app-container">
           <div className='card'>
                        <div className='Days'>Mon</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Tues</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Wed</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Thur</div>
                    </div>
                </div>
                    <div className='card'>
                        <div className='Days'>Fri</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Sat</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Sunday</div>
                    </div>

           </div>
       

  
  )


};
export default Main;
