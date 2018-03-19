import React from 'react'
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
    bidlist: state.bidlist,
});

class BidList extends React.Component {
    render() {
        return (

                <BootstrapTable data={this.props.bidlist}
                                className={'projects-form-content'}
                                striped hover pagination keyBoardNav>
                    <TableHeaderColumn isKey dataField='image' width={'130px'}>ProfileImage</TableHeaderColumn>
                    <TableHeaderColumn dataField='bid' width={'98px'}>BidPrice</TableHeaderColumn>
                    <TableHeaderColumn dataField='period' width={'135px'}>PeriodInDays</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' width={'136px'}>FreelancerName</TableHeaderColumn>
                </BootstrapTable>
        );
    }
}

export default connect(mapStateToProps)(BidList)