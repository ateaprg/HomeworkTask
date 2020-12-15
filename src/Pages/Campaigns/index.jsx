import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { Table, Spinner, Alert } from 'react-bootstrap';
import { RenderIf } from '../../Utils/Components/RenderIf';
import TextInput from '../../Utils/Components/TextInput';
import { Container, Row, Col} from 'react-bootstrap';
import { filterByName, filterByEndDate, filterByStartDate, AddCampaigns } from '../actions'

class Campaigns extends React.Component {

  componentDidMount() {
    this.props.fetchCampaignData();
    window.AddCampaigns = campaignData => this.props.dispatch(AddCampaigns(campaignData));
  }
  
  render() {
    return (
      <div>
        <RenderIf isTrue={this.props.campaign.error}>
          <Alert key='error' variant='danger'>
            {this.props.campaign.error}
          </Alert>
        </RenderIf>
        <RenderIf isTrue={this.props.campaign && this.props.campaign.data.length > 0}>
          <Container style={{paddingBottom: 10}}>
            <Row>
              <Col>
                <TextInput
                  onChange={event => {this.props.dispatch(filterByStartDate(event.target.value))}}
                  type='date'
                  label='Start date'>
                  </TextInput>
              </Col>
              <Col>
                <TextInput
                  onChange={event => {this.props.dispatch(filterByEndDate(event.target.value))}}
                  type='date'
                  label='End date'
                  minDate={this.props.campaign.startDateFilter}>
                  </TextInput>
              </Col>
              <Col>
                <TextInput
                  onChange={event => {this.props.dispatch(filterByName(event.target.value))}}
                  type='text'
                  label='Search by name'>
                  </TextInput>
              </Col>
            </Row>
          </Container>
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
              {this.props.campaign.data.filter(user => !user.filteredOutName 
                                                && !user.filteredOutEndDate 
                                                && !user.filteredOutStartDate 
                                                && ((typeof user.startDate === 'undefined' || typeof user.endDate === 'undefined') 
                                                || (new Date(user.startDate) < new Date(user.endDate))))
              .map((user, index)=> {
                return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.userId ? user.userName : <span style={{fontStyle: 'Italic'}}>Unknown User</span>}</td>
                  <td>{user.startDate}</td>
                  <td>{user.endDate}</td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={(new Date(user.startDate) < new Date() && new Date() < new Date(user.endDate)) ? 'green' : 'red'} className="bi bi-circle-fill" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8"/>
                    </svg>
                    <span style={{paddingLeft: 10}}>{(new Date(user.startDate) < new Date() && new Date() < new Date(user.endDate)) ? 'Active' : 'Inactive'}</span>
                  </td>
                  <td>{user.Budget ? user.Budget + ' USD' : ''}</td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </RenderIf>
        <RenderIf isTrue={this.props.campaign.data.length === 0 && this.props.campaign.error === null}>
          <Spinner className='loading' animation="border" variant="primary" />
        </RenderIf>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  let actions =  bindActionCreators(actionCreators, dispatch);
  return { ...actions, dispatch };
};

const mapStateToProps = (store) => {
  return {
    campaign: store.campaign
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
