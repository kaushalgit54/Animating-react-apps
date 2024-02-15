import './List.css';
import Button from '../../UI/Button'; 
import { Component } from 'react';
import TransitionGroup  from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
class List extends Component{
    state={
        items: [1,2,3]
    }

    addItemHandler = ()=>{
        this.setState((prevState)=> {
             return {
                items: prevState.items.concat(prevState.items.length+1)
             };
        });
    }
    removeItemHandler = (selIndex)=>{
        this.setState((prevState) =>{
            return{
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render(){
        const listItems = this.state.items.map((item,index)=>(
           <CSSTransition  key={index} classNames='fade' timeout={2000}>
            <li
            className='ListItem'
            onClick={()=>this.removeItemHandler(index)}>
            {item}
            </li>
            </CSSTransition>
        ));

        return (
           <div>
            <Button onClick={this.addItemHandler}>Add Item</Button>
            <p>Click Item to Remove.</p>
            <TransitionGroup 
            component='ul'
            className='List'>
                {listItems}
            </TransitionGroup>
           </div>
        );
    };
}

export default List;