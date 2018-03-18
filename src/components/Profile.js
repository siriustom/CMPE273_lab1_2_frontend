import React from 'react';
import {TOKEN_KEY} from '../constants';

class Profile extends React.Component {

    state = {
        name: '',
        email: '',
        phone: '',
        about: '',
        skills: '',
        image: '',
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.setState({name: nextProps.data.name});
            this.setState({email: nextProps.data.email});
            this.setState({phone: nextProps.data.phone});
            this.setState({about: nextProps.data.about});
            this.setState({skills: nextProps.data.skills});
            this.setState({image: nextProps.data.image});
        }
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
                    <button type="button" class="btn btn-outline-danger btn-sm profile-button">
                        Edit Image
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm profile-button">
                        Edit Name
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm profile-button">
                        Edit Email
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm profile-button">
                        Edit Phone
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm profile-button">
                        Edit About
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm profile-button">
                        Edit Skills
                    </button>
                </div>
            </div>
        );
    }
}

export default Profile;