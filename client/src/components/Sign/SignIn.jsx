import { Box, Button, Checkbox, Title, RingProgress } from "@mantine/core";
import { IconMail, IconEye, IconEyeOff } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import TextInput from "../Forms/TextInput";
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
} from "../Forms/TextInput/validators";



function Loginform() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
  });

  const mutation = useMutation(async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/login",
        data
      );
      return res.data.data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.response.data.message);
    }
  });

  const { isLoading, isError, data, error, mutate } = mutation;

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("isBanned", data.isBanned);
      localStorage.setItem("isVerified", data.isVerified);
      localStorage.setItem("isAdmin", data.isAdmin);

      
    }
  }, [data]);

  const onSubmit = (data) => {
    mutate(data);
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <Box
      sx={{
        padding: 15,
      }}
    >
      <Title order={1} size="50px" color="#00008B">
        Create an account
      </Title>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <TextInput
          size="lg"
          name="email"
          placeholder="Email"
          required={true}
          register={register}
          errors={errors}
          validate={{
            requiredValidator,
            emailValidator,
          }}
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

export default Loginform;
