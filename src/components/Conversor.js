import React, { Component } from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyA: 1,
            currencyB: 1,
            currencyPrice: 1
        }

        this.handleChangeCurrencyA = this.handleChangeCurrencyA.bind(this);
        this.handleChangeCurrencyB = this.handleChangeCurrencyB.bind(this);

            
        let url = `https://economia.awesomeapi.com.br/last/USD-BRL`;
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
            this.currencyPrice = parseFloat(json["USDBRL"].bid);
            this.currencyB = ( parseFloat(this.currencyA) * this.currencyPrice).toFixed(2);
            
            this.setState({currencyA:this.currencyA});
            this.setState({currencyB:this.currencyB});
            this.setState({currencyPrice:this.currencyPrice});
        })        
    }

    handleChangeCurrencyA(event) { this.setState({currencyA: event.target.value});  }
    handleChangeCurrencyB(event) { this.setState({currencyB: event.target.value});  }
    

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12}>
                        

                    <Form className="row">

                        <>
      <label>
        Dólar:
        <input
          value={this.state.currencyA} onChange={this.handleChangeCurrencyA}
        />
      </label>
      <label>
        Reais:
        <input
          value={this.state.currencyA * this.state.currencyPrice} onChange={this.handleChangeCurrencyB}
        />
      </label>      
      
      <p>
        {this.state.currencyA}{' '}
        {this.state.currencyB}{' '}
        ({this.state.currencyPrice})
      </p>
    </>
    </Form>

                    </Col>
                </Row>
            </Container>
        );        
    }
}

  