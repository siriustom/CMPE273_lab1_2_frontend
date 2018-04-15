import React from 'react'
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

class PostProject extends React.Component {
    state = {
        userId: this.props.id,
        name: this.props.name,
        title: '',
        des: '',
        skillReq: '',
        budget: '< 10000',
        date: (new Date()).getTime(),
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value});
    }

    handleDesChange = (e) => {
        this.setState({des: e.target.value});
    }
    handleSkillReqChange = (e) => {
        this.setState({skillReq: e.target.value});
    }
    onBudgetChange = (e) => {
        this.setState({budget: e.target.value});
    }

    handleDateChange = (e) => {
        var daysStr = e.target.value;
        var days = Number(daysStr);
        var offset = days * 60 * 60 * 24 * 1000;
        var period = this.state.date + offset;
        this.setState({date: period});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('userId', this.state.userId);
        data.append('name', this.state.name);
        data.append('file', this.fileUpload.files[0]);
        data.append('fileName', this.fileName.value);
        data.append('title', this.state.title);
        data.append('description', this.state.des);
        data.append('skillsRequired', this.state.skillReq);
        data.append('budgetRange', this.state.budget);
        data.append('period', this.state.date);
        axios.post('http://34.209.33.250:4200/postproject', data).then((response) => {
            console.log(response);
            alert("your project has been posted.");
            window.history.go(-1);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className={'register-form'}>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>ProjectTitle:</text>
                        <input type={'text'} name={'title'} className={'form-control'} onChange={this.handleTitleChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>Description:</text>
                        <textarea rows={'5'} name={'des'} className={'form-control'} onChange={this.handleDesChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>Skills Required:</text>
                        <textarea rows={'5'} name={'skillsreq'} className={'form-control'} onChange={this.handleSkillReqChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>FileUpload:</text>
                        <input ref={(ref) => { this.fileUpload = ref; }} type={'file'} className={'form-control'}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>FileName:</text>
                        <input ref={(ref) => { this.fileName = ref; }} type={'text'} className={'form-control'} placeholder={'Enter desired name of the file'}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>BudgetRange:</text>
                        <select value={this.state.budget} onChange={this.onBudgetChange}>
                            <option defaultValue="< 10000">&lt; 10000</option>
                            <option value="10000 ~ 50000">10000 ~ 50000</option>
                            <option value="50000 ~ 100000">50000 ~ 100000</option>
                            <option value="> 100000">&gt; 100000</option>
                        </select>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label className={'register-form-group'}>
                        <text className={'register-from-labeltext'}>PeriodInDays:</text>
                        <input type={'number'} className={'form-control'} placeholder={'Enter period in days'}
                               onChange={this.handleDateChange}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <input type={'submit'} value={'Post'} className={'btn btn-primary'}/>
                </div>

            </form>
        );
    }
}

export default connect(mapStateToProps)(PostProject);