import { Box, Button, Checkbox, Title, RingProgress } from "@mantine/core";
import {
  IconMail,
  IconUserCircle,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import TextInput from "../Forms/TextInput";
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
} from "../Forms/TextInput/validators";
import { useMutation } from "react-query";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const verifyEmailMutation = useMutation(async (email) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.post(
        "http://localhost:5000/api/user/verifyEmail",
        { email },
        config
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.response.data.message);
    }
  });
  const mutation = useMutation(async (data) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        data,
        config
      );
      return res.data.data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.response.data.message);
    }
  });

  const isFormValid = Object.keys(errors).length === 0;
 const { isLoading} = mutation;
  return (
    <Box sx={{ padding: 15 }}>
      <Title order={1} size="50px" color="#00008B">
        Create an account
      </Title>
      <br />
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))}>
        <TextInput
          size="lg"
          name="username"
          placeholder="Username"
          required={true}
          register={register}
          errors={errors}
          validate={{ requiredValidator }}
          rightSection={<IconUserCircle color="#A9A9A9" />}
        />
        <br />
        <TextInput
          size="lg"
          name="email"
          placeholder="Email"
          required={true}
          register={register}
          errors={errors}
          validate={{ requiredValidator, emailValidator }}
          rightSection={<IconMail color="#A9A9A9" />}
        />
        <br />
        <TextInput
          size="lg"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          withAsterisk
          radius="xl"
          required={true}
          register={register}
          errors={errors}
          validate={{ requiredValidator, passwordValidator }}
          rightSection={
            <IconEye
              color="#A9A9A9"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          }
        />
        <br />
        <TextInput
          size="lg"
          type={showPassword ? "text" : "password"}
          name="confirm_Password"
          placeholder="Confirm Password"
          withAsterisk
          radius="xl"
          required={true}
          register={register}
          errors={errors}
          validate={{
            requiredValidator,
          }}
          rightSection={
            showPassword ? (
              <IconEyeOff
                color="#A9A9A9"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <IconEye color="#A9A9A9" onClick={() => setShowPassword(true)} />
            )
          }
        />
        <br />
        <Checkbox
          label="I have read the Terms & Agreement"
          color="red"
          radius="md"
        />
        <br />
        <Button
          fullWidth
          style={{
            background: "#FF3F4B",
            height: "50px",
          }}
          type="submit"
          color="red"
          radius="xl"
          disabled={isLoading || !isFormValid}
        >
          {isLoading ? (
            <RingProgress
              size={40}
              thickness={5}
              roundCaps
              sections={[
                { value: 40, color: "#FFF8DC" },
                { value: 15, color: "#FFF8DC" },
                { value: 15, color: "#FFF8DC" },
                { value: 15, color: "#FFF8DC" },
              ]}
            />
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </Box>
  );
}

export default SignupForm;
