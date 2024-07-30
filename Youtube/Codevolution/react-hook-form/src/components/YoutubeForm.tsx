import { type FC } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/Devtools";

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: {
    number: string;
  }[];
};

const YoutubeForm: FC = (): JSX.Element => {
  const form = useForm<FormValues>({
    defaultValues: async () => {
      return {
        username: "Batman",
        email: "",
        channel: "",
        social: {
          twitter: "",
          facebook: ""
        },
        phoneNumbers: [{ number: "" }]
      };
    }
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phoneNumbers",
    control
  });

  const onSubmit = (data: FormValues) => {
    console.log("form submitted ", data);
  };

  renderCount++;
  return (
    <div>
      <h1>Youtube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "Username is required"
          })}
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/,
              message: "email not correct"
            },
            validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("bddomain.com") ||
                  "This is a banned domain"
                );
              }
            }
          })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        <p>{errors.channel?.message}</p>

        <div>
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>

        <div>
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="twitter" {...register("social.facebook")} />
        </div>

        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input
                    type="text"
                    {...register(`phoneNumbers.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>Remove</button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: "" })}>
              Add Phone number{" "}
            </button>
          </div>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
