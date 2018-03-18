import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Link } from 'react-router-dom';

export class Register extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        phone: '',
        about: '',
        skills: '',
        imageURL: '',
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }
    handlePhoneChange = (e) => {
        this.setState({phone: e.target.value});
    }
    handleAboutChange = (e) => {
        this.setState({about: e.target.value});
    }
    handleSkillChange = (e) => {
        this.setState({skills: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', this.inputImage.files[0]);
        data.append('filename', this.fileName.value);
        data.append('name', this.state.name);
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        data.append('phone', this.state.phone);
        data.append('about', this.state.about);
        data.append('skills', this.state.skills);
        axios.post('http://localhost:4200/register', data).then((response) => {
            console.log(response);
            window.history.go(-1);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={'register-form'}>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>Name:</text>
                        <input type={'text'} name={'name'} className={'form-control'} onChange={this.handleNameChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>Email:</text>
                        <input type={'email'} name={'email'} className={'form-control'} onChange={this.handleEmailChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>Password:</text>
                        <input type={'password'} name={'password'} className={'form-control'} onChange={this.handlePasswordChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>Phone:</text>
                        <input type={'tel'} name={'phone'} className={'form-control'} onChange={this.handlePhoneChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>About Me:</text>
                        <input type={'text'} name={'about'} className={'form-control'} onChange={this.handleAboutChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>Skills:</text>
                        <input type={'text'} name={'skills'} className={'form-control'} onChange={this.handleSkillChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>Image:</text>
                        <input ref={(ref) => { this.inputImage = ref; }} type={'file'} name={'image'} className={'form-control'}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>fileNm:</text>
                        <input ref={(ref) => { this.fileName = ref; }} type={'text'} className={'form-control'} placeholder={'Enter desired name of the file'}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <input type={'submit'} value={'Register'} className={'btn btn-primary'}/>
                    <p style={{color: 'white'}}>I already have an account, go back to <Link to="/login">Login</Link>
                    </p>
                </div>

            </form>
        );
    }
}