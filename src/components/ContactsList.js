import React from 'react';
import { list } from '../services/ContactService';
import ContactItem from './ContactItem';

 

export default class ContactsList extends Component {

    constructor(props){
        super(props);
        this.state = {
         contacts: [],
         error: false
      }
  }

  componentDidMount = () => {
    list()
    .then(response => {
        this.setState({
            contacts: response.data
        })
    })
    err => {
        if (err){
            this.setState({
                error: true
            })
        }
    }
  }


    render () {
        if(this.state.error){
            return <h3>Something went wrong in the server</h3>
        }else{
            return(
    
                <ul>

                <li>
                    {contacts.map((contact, index) =>{
                        return <ContactItem key={index} {...contact}/>
                })}
                </li>
    
                </ul>
            )
        }       
    
    }

}