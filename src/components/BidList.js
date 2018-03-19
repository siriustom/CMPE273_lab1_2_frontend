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
            <div className={'projects-form'}>
                <BootstrapTable data={this.props.bidlist}
                                className={'projects-form-content'}
                                striped hover pagination keyBoardNav>
                    <TableHeaderColumn isKey dataField='Name' width={'130px'}>Project Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='Employer' width={'98px'}>Employer</TableHeaderColumn>
                    <TableHeaderColumn dataField='BudgetRange' width={'135px'}>AverageBid</TableHeaderColumn>
                    <TableHeaderColumn dataField='bidprice' width={'136px'}>YourBid</TableHeaderColumn>
                </BootstrapTable>

            </div>
        );
    }
}

export default connect(mapStateToProps)(BidList)