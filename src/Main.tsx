import React from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import "./Main.css";

type Props = {};
const Main = (props: Props) => {
  return (
   <div className="main">
       <form>
           <div>
          <textarea  required></textarea>
           
           </div>
           <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thurs</th>
                            <th>Fri</th> 
                            <th>Sat</th>                       
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    </tbody>
                </table>
           </div>
       </form>
   </div>
  
  )


};
export default Main;
