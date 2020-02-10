import React from "rect";
 
export class LoginForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            email: "",
            password:""
        };
    }

    render(){
        const { email, password } = this.state;
        return (
           
        );
    }
    handleChange = event=> {
        this.setState({
            [event.target.name]: event.target.value
        }); 
    };
    handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
    };
}