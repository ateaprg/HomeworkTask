import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import TextInput from '../../../Utils/Components/TextInput';
import { filterByStartDate, filterByEndDate, filterByName } from '../../actions'

const FilterCampaignData = props => {
  return (
    <Container style={{paddingBottom: 10}}>
      <Row>
        <Col>
          <TextInput
            onChange={event => {props.dispatch(filterByStartDate(event.target.value))}}
            type='date'
            label='Start date'>
            </TextInput>
        </Col>
        <Col>
          <TextInput
            onChange={event => {props.dispatch(filterByEndDate(event.target.value))}}
            type='date'
            label='End date'
            minDate={props.campaign.startDateFilter}>
            </TextInput>
        </Col>
        <Col>
          <TextInput
            onChange={event => {props.dispatch(filterByName(event.target.value))}}
            type='text'
            label='Search by name'>
            </TextInput>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterCampaignData;

// class FilterCampaignData extends React.Component {
  
//     render() {
//         return (
//           <Container style={{paddingBottom: 10}}>
//             <Row>
//               <Col>
//                 <TextInput
//                   onChange={event => {this.props.dispatch(filterByStartDate(event.target.value))}}
//                   type='date'
//                   label='Start date'>
//                   </TextInput>
//               </Col>
//               <Col>
//                 <TextInput
//                   onChange={event => {this.props.dispatch(filterByEndDate(event.target.value))}}
//                   type='date'
//                   label='End date'
//                   minDate={this.props.campaign.startDateFilter}>
//                   </TextInput>
//               </Col>
//               <Col>
//                 <TextInput
//                   onChange={event => {this.props.dispatch(filterByName(event.target.value))}}
//                   type='text'
//                   label='Search by name'>
//                   </TextInput>
//               </Col>
//             </Row>
//           </Container>
//         );
//     }
//   }
//   export default FilterCampaignData;