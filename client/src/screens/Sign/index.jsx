import React, { useState } from "react";
import { Button, Grid, Group } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import Info from "../../components/Sign/Info";
import SignInForm from "../../components/Sign/SignIn";

const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_Up";

function Login() {
  const { width } = useViewportSize();

  const [signForm, setSignForm] = useState(SIGN_IN);

  return (
    <Grid>
      <Grid.Col span={12} sm={6}>
        <Group>
          <Button
            color="gray"
            radius="xl"
            onClick={() => setSignForm(SIGN_IN)}
            variant={signForm === SIGN_IN ? "filled" : "subtle"}
          >
            Sign In
          </Button>
          <Button color="gray" radius="xl" onClick={() => setSignForm(SIGN_UP)}>
            Sign Up
          </Button>
        </Group>

        {signForm === SIGN_IN && <SignInForm />}
        {signForm === SIGN_UP && <p>register</p>}
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
