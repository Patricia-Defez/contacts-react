import React, { Component } from 'react';
import { create } from '../services/ContactService';


export default class NewContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newContact: {
                name: '',
                msisdn: '',
                avatarURL: '',
                attachement: ''
            }
        }
    }

    handleChange = (e) => {
        const { name, value, files } = e.target
        this.setState({
            newContac: {
                ...this.state.newContact,
                [name]: (files && files[0]) ? files[0] : values
            }
        })
    }

    createContact = (e) => {

        e.preventDefault();

        const { name, msisdn } = this.state.newContact;

        const data = {
            name,
            sisdn
        }
        console.log(data)

          create(this.state.newContact)

            .then(() => {
                console.log("se creo con exito")
                this.setState({
                    newBeer: {
                        name: '',
                        msisdn: '',
                        avatarUrl: ''

                    }
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    };


    fileChangedHandler = (event) => {

        const file = event.target.files[0]

    }

    uploadHandler = () => { }

    render() {
        return (
            <div className="">
                <form className="column" onSubmit={this.createContact} enctype="multipart/form-data">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" name="name" type="text" value={this.state.newContact.name}
                                onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Telephon</label>
                        <div className="control">
                            <input className="input" name="msisdn" type="text" value={this.state.newContact.msisdn}
                                onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Avatar</label>
                        <div className="control">
                            <input type="file" name="avatarURL" value={this.state.newContact.avatarUrl}
                                onChange={this.handleChange} />
                            <button onClick={this.uploadHandler}>Upload</button>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-info">ADD NEW</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}