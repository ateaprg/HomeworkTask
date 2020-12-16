import React from "react";
import { Container, Row, Alert, Button} from 'react-bootstrap';
import { RenderIf } from '../../../Utils/Components/RenderIf';
import { AddCampaigns } from '../../actions'

class NewCampaignData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showAddCampaignPart: false,
        newCampaignData: '',
        jsonError: false
      };
    }

    addCampaigndata() {
        this.setState({
          showAddCampaignPart: !this.state.showAddCampaignPart
        });
      }
    
      handleCampaignDataChange = event => {
        this.setState({newCampaignData: event.target.value});
      }
    
    submitNewCompaignData() {
        try {
            var result = JSON.parse(this.state.newCampaignData);
            this.props.dispatch(AddCampaigns(result));
            this.setState({newCampaignData: '', showAddCampaignPart: false});
        } catch (e) {
            this.setState({jsonError: true});
        }
    }
  
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Button onClick={() => this.addCampaigndata()}>Add campaign data</Button>
                    </Row>
                </Container>
                <RenderIf isTrue={this.state.showAddCampaignPart}>
                    <Container style={{padding: 10}}>
                        <RenderIf isTrue={this.state.jsonError}>
                            <Alert key='error' variant='danger'>
                                JSON is not valid
                            </Alert>
                        </RenderIf>
                        <Row>
                            <textarea onChange={this.handleCampaignDataChange} rows="4" style={{width: '100%'}}></textarea> 
                        </Row>
                        <Row className="justify-content-md-center" style={{padding: 10}}>
                            <Button onClick={() => this.submitNewCompaignData()}>Submit new compaign data</Button>
                        </Row>
                    </Container>
                </RenderIf>
            </div>
        );
    }
  }
  export default NewCampaignData;