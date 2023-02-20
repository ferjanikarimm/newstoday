import { Box, Button} from "@mantine/core";
import { IconMail, IconEye } from "@tabler/icons-react";
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
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="email"
          placeholder="Email"
          required={true}
          register={register}
          errors={errors}
          validate={{
            requiredValidator,

            // emailValidator
          }}
          rightSection={<IconMail />}
        />
        <TextInput
          name="password"
          placeholder="Password"
          required={true}
          register={register}
          errors={errors}
          validate={{ requiredValidator }}
          rightSection={<IconEye />}
        />

        <Button type="submit" color="red" radius="xl">
          Sign In
        </Button>
      </form>
    </Box>
  );
}

export default Loginform;
