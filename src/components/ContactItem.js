import React from 'react';
import { deleteOne } from '../services/ContactService';

export default class ContactItem extends Component {
    
    deleteContact = () => {
        deleteOne(this.props.id)
    }

    render () {

        return(
 
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.avatarURL} alt="Avatar"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{this.props.className}</strong>
                            <br/>
                            <span>{this.props.msisdn}</span>
                            </p>
                        </div>
                        <button className="delete is-danger" onClick={this.deleteContact}></button>
                    </div>
                </article>
            </div>
        )   
    }
}


 