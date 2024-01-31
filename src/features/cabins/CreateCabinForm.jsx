import { useForm } from "react-hook-form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createEditCabin } from "../../services/apiCabins";
import { useCreateCabin } from "./useCreateCabin";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
// import toast from "react-hot-toast";
import FormRow2 from "../../ui/FormRow";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  // console.log(errors);
  const { isCreating, createCabin } = useCreateCabin();
  // const queryClient = useQueryClient();
  // const { mutate: createCabin, isLoading: isCreating } = useMutation({
  //   mutationFn: createEditCabin,
  //   onSuccess: () => {
  //     toast.success(`New Cabin Successfully Created`);
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //     reset();
  //   },
  //   onError: (err) => toast.error(err.message),
  // });
  const { editCabin, isEditing } = useEditCabin();
  // const { mutate: editCabin, isLoading: isEditing } = useMutation({
  //   mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
  //   onSuccess: () => {
  //     toast.success(`Cabin Successfully edited`);
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //     reset();
  //   },
  //   onError: (err) => toast.error(err.message),
  // });
  const isWorking = isCreating || isEditing;
  function onSubmit(formData) {
    const image =
      typeof formData.image === "string" ? formData.image : formData.image[0];
    if (isEditSession) {
      editCabin(
        { newCabinData: { ...formData, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      console.log(formData);
      createCabin(
        { ...formData, image: formData.image[0] },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }
  function onError(errors) {
    // console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow2>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button
          onClick={() => onCloseModal?.()}
          $variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create New Cabin"}
        </Button>
      </FormRow2>
    </Form>
  );
}

export default CreateCabinForm;
