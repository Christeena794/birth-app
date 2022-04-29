import React from "react";
import apidata from "./apidata.json";

function Details() {
    return (
      <div>
              <div>
                  {
                      apidata.map( api =>{
                      return(
                      <div>
                          {api.name}
                         {api.birthday}
                      </div>
                      )
                      })
  
                  }
              </div> 
              
      </div>
    )
  }
export default Details;
