import React from 'react'
import axios from "axios/index";
import { connect } from 'react-redux';
import { Card } from 'antd';
const { Meta } = Card;

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

class ProjectDetail extends React.Component {

        state = {
            bid: '',
        }
        handleClick = () => {

        }

        handlgeBidSubmit = (e) => {
            e.preventDefault();
            const data = new FormData();
            data.append('projectid', this.props.data.id);
            data.append('image', this.props.image);
            data.append('username', this.props.name);
            data.append('userid', this.props.id);
            data.append('bidprice', this.state.bid);
            data.append('period', this.props.data.Period);
            data.append('projectname', this.props.data.Name);
            data.append('employer', this.props.data.Employer);
            axios.post('http://34.209.33.250:4200/bid', data).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }

        handleBidChange = (e) => {
            this.setState({bid: e.target.value });
        }
        render() {
            const days = (Number(this.props.data.Period) - (new Date()).getTime())/ (24 * 60 * 60 * 1000);
            return (
                <div className={'project-detail-container'}>
                    <Card
                        style={{ width: 500 }}
                        cover={<img alt="pic" src="https://d1pet9gxylz2tx.cloudfront.net/uploads/2017/08/The-Project.png" />}
                    >
                        <Meta
                            title={`Name: ${this.props.data.Name}`}
                        />
                        <p>Description: {this.props.data.Description}</p>
                        <button type="button" class="btn btn-outline-primary btn-sm" onClick={this.handleClick}>
                            File</button>
                        <p>Skills: {this.props.data.SkillsRequired}</p>
                        <p>Budget Range: {this.props.data.BudgetRange}</p>
                        <p>AverageBid: {this.props.data.AverageBid}</p>
                        <p>PeriodInDays: {Math.round(days)}</p>
                        <div className={'project-detail-bidcontainer'}>
                            <form className={'project-detail-bid'} onSubmit={this.handlgeBidSubmit}>
                                    <input type={'text'} className={'profile-input'} placeholder={'your price'}
                                           onChange={this.handleBidChange}/>
                                    <input type={'submit'} value={'Bid'} className={'btn btn-outline-danger'}/>
                            </form>
                        </div>
                    </Card>
                </div>
            );
        }
}

export default connect(mapStateToProps)(ProjectDetail);