import { ProductFormType } from "@/lib/clientSchema/product/schema";
import { UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

const ProductFormView = ({
  form,
}: {
  form: UseFormReturn<ProductFormType>;
}) => {
  return (
    <FieldGroup>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-name">
              Product Name
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-name"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Product Name"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="price"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-price">Price</FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-price"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Price"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="price"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-price">Price</FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-price"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Price"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  );
};

export default ProductFormView;
