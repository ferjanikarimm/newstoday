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
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });


  const [showPassword, setShowPassword] = useState(false);
  

  const { isLoading, mutate } = useMutation(async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        data,
        
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while registering user."
      );
    }
  });
  

  const onSubmit = (data) => {
    mutate(data);
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <Box sx={{ padding: 15 }}>
      <Title order={1} size="50px" color="#00008B">
        Create an account
      </Title>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
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
          name="confirmPassword"
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
