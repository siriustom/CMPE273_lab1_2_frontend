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
                        <TableHeaderColumn isKey dataField='project' width={'130px'}>ProjectName</TableHeaderColumn>
                        <TableHeaderColumn dataField='ave' width={'135px'}>AvgBid</TableHeaderColumn>
                        <TableHeaderColumn dataField='freelancer' width={'98px'}>FreeLancerName</TableHeaderColumn>
                        <TableHeaderColumn dataField='complete' width={'136px'}>EstimatedCompletion</TableHeaderColumn>
                        <TableHeaderColumn dataField='status' width={'136px'}>StatusOfProject</TableHeaderColumn>
                    </BootstrapTable>
                </div>
        );
    }
}

export default connect(mapStateToProps)(BidList)