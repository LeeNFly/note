import React from 'react'

import { Form } from 'semantic-ui-react'

import { Button } from 'antd'

import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Form className="loginForm">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Form.Button type='submit'>Submit</Form.Button>

                <Button type="dashed">Primary</Button>
            </Form>
        )
    }
}

export default Login