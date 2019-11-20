import React from 'react'
import './total.css'
const Total = (props) =>{
    const calc = (stocks)=>{
        let total =0
        stocks.forEach((item)=>{
            total +=item.quantity*item.price
        })
        return total
    }
    return (
        <div className="Total">
           <p>Total funds spent  {calc(props.stocks)} $</p>
           <p>   Total funds Allocated {props.total} $</p>
           <p>Funds Remaining {calc(props.stocks)-props.total} $</p>
        </div>
        
    )
}
export default Total