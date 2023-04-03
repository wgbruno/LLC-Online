import React from "react"
import InventoryRecord from "../components/InventoryRecord"

const Inventory = ({data}) => {
   const fields = data.map(el => {
      return el.fields;
   })
return (
<table className="key">
<tbody className="fullWidth">
    {fields.map(el => {
         return <tr key={el.zone} className="key__row">
          <td className="key__cell">
             <div className="key__color"
                  style={{background:el.color}}>
             </div>
         </td>
         <td className="key__cell"
                style={{fontWeight:'bold'}}>
            {el.label}
         </td>
        <td className="key__cell">
             {el.description}
        </td>
        <td className="key__cell colorKey__layers">
            {el.shades && el.shades.map(el => {
                return <div className="colorKey__ex"
                            key={el}
                            style={{backgroundColor:el}}>
                       </div>
               })}
          </td>
    </tr>
   })}
</tbody>
</table>
);
}
export default Inventory;