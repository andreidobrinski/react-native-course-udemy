import React from 'react';
import { Card, CardSection, Input, Button } from './common';

const LoginForm = () => (
  <Card>
    <CardSection>
      <Input
        label="Email"
        placeholder="email@email.com"
      />
    </CardSection>
    <CardSection>
      <Input
        label="Password"
        placeholder="password"
        secureTextEntry
      />
    </CardSection>
    <CardSection>
      <Button>
        Login
      </Button>
    </CardSection>
  </Card>
);

export default LoginForm;
