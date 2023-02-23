import { Box, Button, Checkbox, PasswordInput, Title } from "@mantine/core";
import { IconMail, IconUserCircle } from "@tabler/icons-react";
import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../Forms/TextInput";
import { requiredValidator } from "../Forms/TextInput/validators";
function Loginform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  console.log({ errors });

  return (
    <Box
      sx={{
        padding: 15,
      }}
    >
      <Title order={1} size="50px" color="#00008B">
        Create
      </Title>
      <Title order={1} size="50px" color="#00008B">
        an account{" "}
      </Title>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          size="lg"
          name="username"
          placeholder="username"
          required={true}
          register={register}
          errors={errors}
          validate={{
            requiredValidator,
            // emailValidator
          }}
          rightSection={<IconUserCircle  color="#A9A9A9" />}
        />
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
            // emailValidator
          }}
          rightSection={ <IconMail color="#A9A9A9"  />}
        />
        <br />
        <PasswordInput
          size="lg"
          name="password"
          placeholder="Password"
          withAsterisk
          radius="xl"
          required={true}
          register={register}
          errors={errors}
          validate={{ requiredValidator }}
        />
        <br />
        <PasswordInput
          size="lg"
          name="password"
          placeholder="Password"
          withAsterisk
          radius="xl"
          required={true}
          register={register}
          errors={errors}
          validate={{ requiredValidator }}
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
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default Loginform;
