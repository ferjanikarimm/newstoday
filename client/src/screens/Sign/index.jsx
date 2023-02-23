import React, { useState } from "react";
import { Button, Grid, Group } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import Info from "../../components/Sign/Info";
import SignInForm from "../../components/Sign/SignIn";
import SignUpForm from "../../components/Sign/SingUp";
const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_Up";

function Login() {
  const { width } = useViewportSize();
  const [signForm, setSignForm] = useState(SIGN_IN, SIGN_UP);
  return (
    <Grid>
      <Grid.Col span={12} sm={6}>
        <Group
          sx={{
            marginTop: "50px",
            padding: 15,
          }}
        >
          <Button
            color="indigo"
            radius="xl"
            onClick={() => setSignForm(SIGN_IN)}
            variant={signForm === SIGN_IN ? "filled" : "subtle"}
          >
            Sign In
          </Button>
          <Button
            color="indigo"
            radius="xl"
            onClick={() => setSignForm(SIGN_UP)}
            variant={signForm === SIGN_UP ? "filled" : "subtle"}
          >
            Sign Up
          </Button>
        </Group>

        {signForm === SIGN_IN && <SignInForm />}
        {signForm === SIGN_UP && <SignUpForm />}
      </Grid.Col>
      {width > 800 && (
        <Grid.Col span={12} sm={6}>
          <Info />
        </Grid.Col>
      )}
    </Grid>
  );
}

export default Login;
