import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Eric',
        address: 'Hoi dan IT',
        age: 26
    }

    // handleClick = (event) => {
    //     console.log(">>click me my button");
    //     // console.log("My name is : ", this.state.name);
    //     // console.log("random: ", Math.floor((Math.random()*100)+ 1));
        

    //     //merge state => react class 
    //     this.setState ({
    //         name: 'Trung Hieu',
    //         age: Math.floor((Math.random()*100)+ 1)

    //     })

    //     //  this.setState ({
    //     //     age: Math.floor((Math.random()*100)+ 1)
    //     // })
        
    // }

    // handleOnMoverOver(event){
    //     // console.log(event.pageX);
        
    // }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleOnChangeAge = (event) => {

        //bad code
        //this.state.age = event.target.value
        this.setState({
            age: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        
    }
    
    render(){
        return (
            <div>
                 My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <label>Your name: </label>
                    <input 
                    value={this.state.name}
                    type="text"
                    onChange={(event) => this.handleOnChangeInput(event)}
                    />
                      <label>Your age: </label>
                    <input 
                    value={this.state.age}
                    type="text"
                    onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )}
}
export default UserInfor;