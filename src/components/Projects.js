
import React from 'react'
import axios from "axios/index";
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ProjectDetail from './ProjectDetail';
import {SearchBar} from "./SearchBar";

const mapStateToProps = state => ({
    email: state.email,
    name: state.name,
    id: state.id,
    phone: state.phone,
    about: state.about,
    skills: state.skills,
    image: state.image,
    password: state.password,
    bidlist: state.bidlist,
});

class Projects extends React.Component {
    state = {
        projects: [],
        btnClicked: false,
        rowClicked: false,
        clickedProject: {},
    }
    handleClick = () => {
        axios.post('http://34.209.33.250:4200/projects', {
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
    getOptions = () => {
        return ({
            onRowClick: (row) => {
                console.log(row);
                this.setState({rowClicked: !this.state.rowClicked});
                this.setState({clickedProject: row});
            }
        });
    }
    render() {
        return(
            <div className={'projects-form'}>
                <SearchBar />
                {
                    !this.state.btnClicked ?
                        <button type="button" class="btn btn-outline-primary" onClick={this.handleClick}>
                            See Projects List</button>
                        :
                        <BootstrapTable data={this.state.projects}
                                        className={'projects-form-content'}
                                        options={this.getOptions()}
                                        striped hover pagination keyBoardNav>
                            <TableHeaderColumn isKey dataField='title' width={'130px'}>Project Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='description' width={'115px'}>Description</TableHeaderColumn>
                            <TableHeaderColumn dataField='skillsRequired' width={'141px'}>Skills Required</TableHeaderColumn>
                            <TableHeaderColumn dataField='employer' width={'98px'}>Employer</TableHeaderColumn>
                            <TableHeaderColumn dataField='budgetRange' width={'135px'}>Budget Range</TableHeaderColumn>
                            <TableHeaderColumn dataField='bidNumber' width={'136px'}>Number of Bid</TableHeaderColumn>
                            <TableHeaderColumn dataField='bidNow' width={'89px'}>Bid Now</TableHeaderColumn>
                        </BootstrapTable>
                }
                {
                    this.state.rowClicked &&
                        <div className={'projects-detail-container'}>
                            <ProjectDetail data={this.state.clickedProject}/>
                        </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(Projects)