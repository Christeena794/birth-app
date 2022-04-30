import React, { useEffect } from "react";
import apidata from "./apidata.json";
import Main from "./Main";

const Details:React.FC<IProps> = (props) => {
  // const [usersData, setUsersData] = useState<IUser[]>([]);

  useEffect(() => {
    
  }, []);
   
      return (
        <div className="grid-container">
          {props.data.map((date: { name: React.Key | null | undefined; }) => (
            <Main item={date} key={date.name} />
          ))}
        </div>
    )
  }
export default Details;
