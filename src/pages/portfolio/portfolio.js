import React,{Component} from 'react'
import Total from '../../Components/Total'
import Axios from '../../Assets/Axios-BE'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ControllerButton from '../../Components/buttons/controllerbutton';
import AddModal from '../../Components/AddModal';
import {Button, Alert } from 'react-bootstrap';
import Spinner from '../../Components/UI/Spinner';
import './portfolio.css'

class Portfolio extends Component {
    state = {
        amountAdded : 20000,
        stocks :null,
        addedItems :[],
        total:0,
        showAddModal:true,
        listOfStocks: null,
        temp: null
    }
    componentDidUpdate() {
        console.log("in comp update")
        Axios.put('/temp/-Lu6hyawNiM8VXFipoes/stocks.json',this.state.stocks)
        .then(response=>{
          console.log(response)
        });
    }
    componentDidMount() {
      const { match: { params } } = this.props;
      Axios.get('submit.json')
      .then(response=>{
        this.setState({stocks:response.data["-Lu6DxbeWSyb6e0NNdSj"].stocks,listOfStocks:response.data["-Lu6DxbeWSyb6e0NNdSj"].listOfStocks})
      })
    }

    addStock = (id) =>{
      let key = id -1 ;
      let  stateCopy = Object.assign({}, this.state);
      stateCopy.stocks[key].quantity += 1;
      this.setState(stateCopy);
    }
    deleteStock = (id)=>{
        let key = id -1 ;
        let  stateCopy = Object.assign({}, this.state);
        stateCopy.stocks[key].quantity -= 1;
        this.setState(stateCopy);
    }
    addotherstocks = (stockID)=>{
      this.setState({stocks:[...this.state.stocks,this.state.listOfStocks[stockID-1]]})
    }
    updateHandler = () =>{
      Axios.put('/submit/-Lu6DxbeWSyb6e0NNdSj/stocks/.json',this.state.stocks)
      .then(response=>console.log(response))
      .catch(error=>console.log(error))
      Axios.patch('/submit/-Lu6DxbeWSyb6e0NNdSj/stocks/.json',this.state.listOfStocks)
      .then(response=>console.log(response))
      .catch(error=>console.log(error))    
      Axios.delete('/temp/-Lu6hyawNiM8VXFipoes/stocks.json')
      .then(response=>{
        console.log(response)
      });  
      alert("Portfolio Updated")
    }
    render() {
      function createData(id,name, Symbol, Price, Quantity) {
        return { id,name, Symbol, Price, Quantity };
      }
      let rows=null;
      let content = (<Spinner/>)
      if(this.state.stocks) {
            rows =  this.state.stocks.map((item,idx)=>(
              createData(item.id,item.title,item.symbol,item.price,item.quantity)
            ));
            content = (
              <div>
                <h1> Manage and balane your portfolio here</h1>
              <Paper className="Portfolio">
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Stock Name</TableCell>
                    <TableCell align="right">Symbol</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Add</TableCell>
                    <TableCell align="right">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.Symbol}</TableCell>
                  <TableCell align="right">{row.Price}</TableCell>
                  <TableCell align="right">{row.Quantity}</TableCell>
                  <TableCell align="right"><ControllerButton click={this.addStock.bind(this,row.id)}>+</ControllerButton></TableCell>
                  <TableCell align="right"><ControllerButton click={this.deleteStock.bind(this,row.id)}>-</ControllerButton></TableCell>
                </TableRow>
              ))}
            </TableBody>

              </Table>
            </Paper>
            <Spinner/>
            <Total stocks={this.state.stocks} total ={this.state.amountAdded}></Total>
            </div>
            )
      }
        return (    
             <div className = "overview">
               <AddModal addingShare={this.addotherstocks}>Buy New Stocks</AddModal>
                {content}
              <Button className="updatePortfolio" onClick={this.updateHandler}>Update Portfolio</Button>
            </div>
        )
    }
}
export default Portfolio;