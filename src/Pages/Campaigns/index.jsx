import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

class Campaigns extends React.Component {
  componentDidMount() {
    this.props.fetchCampaignsData();
  }
  render() {
    return (
      <div>{console.log(this.props.campaigns.data)}
       {this.props.campaigns && this.props.campaigns.data.length > 0 ?
          <Table striped bordered hover size="sm" responsive="md">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Active</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {this.props.campaigns.data.map((user, index)=> {
              return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.userId ? user.userName : <span style={{fontStyle: 'Italic'}}>Unknown User</span>}</td>
                <td>{user.startDate}</td>
                <td>{user.endDate}</td>
                <td>{(user.startDate > Date.Now && Date.Now < user.endDate) ? <i className='bi bi-circle-fill'></i> : <i className='bi bi-circle-fill'></i> }</td>
                <td>{user.budget}</td>
              </tr>
              )
            })}
          </tbody>
        </Table>
      : <Spinner className='loading' animation="border" variant="primary" />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const mapStateToProps = (store) => {
  return {
    campaigns: store.campaigns
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
