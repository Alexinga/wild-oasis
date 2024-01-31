import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import toast from "react-hot-toast";
import FormRow2 from "../../ui/FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  // console.log(errors);
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success(`New Cabin Successfully Created`);
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  function onSubmit(formData) {
    console.log(formData);
    mutate({ ...formData, image: formData.image[0] });
  }
  function onError(errors) {
    // console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This fields is required",
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow> */}

      <FormRow2 label={"Cabin Name"} error={errors?.name?.message}>
        <Input
          disabled={isCreating}
          type="text"
          id="name"
          {...register("name", {
            required: "This fields is required",
          })}
        />
      </FormRow2>

      {/* <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This fields is required",
            min: {
              value: 1,
              message: "Capacity should at least be 1",
            },
          })}
        />
      </FormRow> */}

      <FormRow2 label={"Maximum Capacity"} error={errors?.maxCapacity?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This fields is required",
          })}
        />
      </FormRow2>

      {/* <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This fields is required",
            min: {
              value: 1,
              message: "Capacity should at least be 1",
            },
          })}
        />
      </FormRow> */}
      <FormRow2 label={"Regular Price"} error={errors?.regularPrice?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This fields is required",
            min: {
              value: 1,
              message: "Capacity should at least be 1",
            },
          })}
        />
      </FormRow2>

      {/* <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This fields is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow> */}
      <FormRow2 label={"Discount"} error={errors?.discount?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This fields is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow2>

      {/* <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="text"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This fields is required",
          })}
        />
      </FormRow> */}
      <FormRow2
        label={"Description for Website"}
        error={errors?.description?.message}
      >
        <Textarea
          disabled={isCreating}
          type="text"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This fields is required",
          })}
        />
      </FormRow2>

      {/* <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow> */}
      <FormRow2 label="Cabin Photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow2>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow2>
    </Form>
  );
}

export default CreateCabinForm;
