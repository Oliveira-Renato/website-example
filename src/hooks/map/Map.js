import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { ModalComponent } from "../../components/modal";


export default function UseMapData(pJson){
  const [data, setData] = useState(pJson.json);
    // const data = pJson.json;
    
    // console.log(data);
  
    const newData = data.map((valor,index,array)=>{
      return (
        <div className="card"  key ={array[index]['id']}>
          <div className="icones">
            <FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[array[index]['image']]} />
          </div>
        
          <h3 className="title">Syscare - {array[index]['titulo']}</h3>
          <p>
            {array[index]['content']}
          </p>
          
          <ModalComponent productId={2} />
      </div>
      )
    })

    return newData
}
