import React from 'react';
import {TOKEN_KEY} from '../constants';
import axios from "axios/index";
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    email: state.email,
    name: state.name,
    id: state.id,
    phone: state.phone,
    about: state.about,
    skills: state.skills,
    image: state.image,
    password: state.password,
});

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            email: this.props.email,
            phone: this.props.phone,
            about: this.props.about,
            skills: this.props.skills,
            image: this.props.image,
            password: this.props.password,
            isBtnToggle: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.setState({id: nextProps.data.id});
            this.setState({name: nextProps.data.name});
            this.setState({email: nextProps.data.email});
            this.setState({phone: nextProps.data.phone});
            this.setState({about: nextProps.data.about});
            this.setState({skills: nextProps.data.skills});
            this.setState({image: nextProps.data.image});
            this.setState({password: nextProps.data.password});
        }
    }

    handleBtnClick = () => {
        this.setState({isBtnToggle: !this.state.isBtnToggle});
    }

    handlgeUpdateSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('id', this.state.id);
        data.append('file', this.inputImage.files[0]);
        data.append('filename', this.fileName.value === '' ? this.state.image : this.fileName.value);
        data.append('name', this.state.name);
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        data.append('phone', this.state.phone);
        data.append('about', this.state.about);
        data.append('skills', this.state.skills);
        axios.post('http://localhost:4200/profileEdit', data).then((response) => {
            console.log(response);
            this.setState({isBtnToggle: !this.state.isBtnToggle});
        }).catch((error) => {
            console.log(error);
        });
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

    render() {
        const name = this.state.name;
        const email = this.state.email;
        const phone = this.state.phone;
        const about = this.state.about;
        const skills = this.state.skills;
        const image = this.state.image;
        return (
            <div className={'profile-container'}>
                <div>
                    <img className="img-adjust"
                         src={`http://localhost:4200/${image}`} alt={'profile image'}/>
                    <div className="card-body">
                        <h4 className="profile-title"><span>Name: </span>{` ${name}`}</h4>
                        <p className="profile-text"><span>Email: </span>{` ${email}`}</p>
                        <p className="profile-text"><span>Phone: </span>{` ${phone}`}</p>
                        <p className="profile-text"><span>About: </span>{` ${about}`}</p>
                        <p className="profile-text"><span>Skills: </span>{` ${skills}`}</p>
                    </div>
                </div>
                <div>
                    {
                        !this.state.isBtnToggle ?
                            <button type="button" className="btn btn-outline-danger btn-sm profile-button"
                                    onClick={this.handleBtnClick}>
                                Edit Image
                            </button>
                            :
                            <form onSubmit={this.handlgeUpdateSubmit}>
                                <input ref={(ref) => { this.inputImage = ref; }} type={'file'}
                                   name={'image'} className={'profile-input'}/>
                                <input ref={(ref) => { this.fileName = ref; }} type={'text'}
                                       className={'profile-input'} placeholder={'file name'}/>
                                <input type={'submit'} value={'Update'} className={'btn btn-outline-danger btn-sm'}/>
                            </form>
                    }
                    {
                        !this.state.isBtnToggle ?
                            <button type="button" className="btn btn-outline-danger btn-sm profile-button"
                                    onClick={this.handleBtnClick}>
                                Edit Name
                            </button>
                            :
                            <form onSubmit={this.handlgeUpdateSubmit}>
                                <label className={'register-form-group'}>
                                    <text className={'profile-update-label'}>Name:</text>
                                    <input type={'text'} className={'profile-input'} placeholder={'name'}
                                        onChange={this.handleNameChange}/>
                                    <input type={'submit'} value={'Update'} className={'btn btn-outline-danger btn-sm'}/>
                                </label>
                            </form>
                    }
                    {
                        !this.state.isBtnToggle ?
                            <button type="button" className="btn btn-outline-danger btn-sm profile-button"
                                    onClick={this.handleBtnClick}>
                                Edit Email
                            </button>
                            :
                            <form onSubmit={this.handlgeUpdateSubmit}>
                                <label className={'register-form-group'}>
                                    <text className={'profile-update-label'}>Email:</text>
                                    <input type={'email'} className={'profile-input'} placeholder={'email'}
                                           onChange={this.handleEmailChange}/>
                                    <input type={'submit'} value={'Update'} className={'btn btn-outline-danger btn-sm'}/>
                                </label>
                            </form>
                    }
                    {
                        !this.state.isBtnToggle ?
                            <button type="button" className="btn btn-outline-danger btn-sm profile-button"
                                    onClick={this.handleBtnClick}>
                                Edit Password
                            </button>
                            :
                            <form onSubmit={this.handlgeUpdateSubmit}>
                                <label className={'register-form-group'}>
                                    <text className={'profile-update-label'}>Password:</text>
                                    <input type={'password'} className={'profile-input'} placeholder={'password'}
                                           onChange={this.handlePasswordChange}/>
                                    <input type={'submit'} value={'Update'} className={'btn btn-outline-danger btn-sm'}/>
                                </label>
                            </form>
                    }
                    {
                        !this.state.isBtnToggle ?
                            <button type="button" className="btn btn-outline-danger btn-sm profile-button"
                                    onClick={this.handleBtnClick}>
                                Edit Phone
                            </button>
                            :
                            <form onSubmit={this.handlgeUpdateSubmit}>
                                <label className={'register-form-group'}>
                                    <text className={'profile-update-label'}>Phone:</text>
                                    <input type={'text'} className={'profile-input'} placeholder={'phone'}
                                           onChange={this.handlePhoneChange}/>
                                    <input type={'submit'} value={'Update'} className={'btn btn-outline-danger btn-sm'}/>
                                </label>
                            </form>
                    }
                    {
                        !this.state.isBtnToggle ?
                            <button type="button" className="btn btn-outline-danger btn-sm profile-button"
                                    onClick={this.handleBtnClick}>
                                Edit About
                            </button>
                            :
                            <form onSubmit={this.handlgeUpdateSubmit}>
                                <label className={'register-form-group'}>
                                    <text className={'profile-update-label'}>About:</text>
                                    <input type={'text'} className={'profile-input'} placeholder={'about'}
                                           onChange={this.handleAboutChange}/>
                                    <input type={'submit'} value={'Update'} className={'btn btn-outline-danger btn-sm'}/>
                                </label>
                            </form>
                    }
                    {
                        !this.state.isBtnToggle ?
                            <button type="button" className="btn btn-outline-danger btn-sm profile-button"
                                    onClick={this.handleBtnClick}>
                                Edit Skills
                            </button>
                            :
                            <form onSubmit={this.handlgeUpdateSubmit}>
                                <label className={'register-form-group'}>
                                    <text className={'profile-update-label'}>Skills:</text>
                                    <input type={'text'} className={'profile-input'} placeholder={'skills'}
                                           onChange={this.handleSkillChange}/>
                                    <input type={'submit'} value={'Update'} className={'btn btn-outline-danger btn-sm'}/>
                                </label>
                            </form>
                    }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Profile);