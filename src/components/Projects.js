import React from 'react'
import axios from "axios/index";
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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

class Projects extends React.Component {
    state = {
        projects: [],
        btnClicked: false,
    }
    handleClick = () => {
        axios.post('http://localhost:4200/projects', {
            data: 'see list',
        }).then((response) => {
            var parsedArray = JSON.parse(response.data);
            console.log(parsedArray);
            this.setState({btnClicked: !this.state.btnClicked});
            this.setState({projects: parsedArray});
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return(
            <div className={'projects-from'}>
                {
                    !this.state.btnClicked ?
                        <button type="button" class="btn btn-outline-primary" onClick={this.handleClick}>
                            See Projects List</button>
                        :
                        <BootstrapTable data={this.state.projects}
                                        className={'projects-from-content'}
                                        striped hover>
                            <TableHeaderColumn isKey dataField='Name' width={'130px'}>Project Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='Description' width={'115px'}>Description</TableHeaderColumn>
                            <TableHeaderColumn dataField='SkillsRequired' width={'141px'}>Skills Required</TableHeaderColumn>
                            <TableHeaderColumn dataField='Employer' width={'98px'}>Employer</TableHeaderColumn>
                            <TableHeaderColumn dataField='BudgetRange' width={'135px'}>Budget Range</TableHeaderColumn>
                            <TableHeaderColumn dataField='BidNumber' width={'136px'}>Number of Bid</TableHeaderColumn>
                            <TableHeaderColumn dataField='BidNow' width={'89px'}>Bid Now</TableHeaderColumn>
                        </BootstrapTable>
                }
            </div>
        );
    }
}
{/*<p>a list of projects*/}
{/*project title*/}
{/*project des*/}
{/*skills required*/}
{/*employer*/}
{/*budget range*/}
{/*number of bid*/}
{/*bid now*/}
{/*</p>*/}
export default connect(mapStateToProps)(Projects);