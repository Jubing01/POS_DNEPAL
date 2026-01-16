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
        name="sku"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-sku">Product SKU</FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-sku"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Product SKU"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="costPrice"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-costPrice">
              Cost Price
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-costPrice"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Cost Price"
              autoComplete="off"
              type="number"
              onChange={(event) =>
                field.onChange(
                  event.target.value === ""
                    ? undefined
                    : event.target.valueAsNumber
                )
              }
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="sellingPrice"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-sellingPrice">
              Selling Price
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-sellingPrice"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Selling Price"
              autoComplete="off"
              type="number"
              onChange={(event) =>
                field.onChange(
                  event.target.value === ""
                    ? undefined
                    : event.target.valueAsNumber
                )
              }
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="unit"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-unit">Unit</FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-unit"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Unit"
              autoComplete="off"
              type="number"
              onChange={(event) =>
                field.onChange(
                  event.target.value === ""
                    ? undefined
                    : event.target.valueAsNumber
                )
              }
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="minStock"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-minStock">
              Minimum Stock
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-minStock"
              aria-invalid={fieldState.invalid}
              placeholder="Enter MinStock"
              autoComplete="off"
              type="number"
              onChange={(event) =>
                field.onChange(
                  event.target.value === ""
                    ? undefined
                    : event.target.valueAsNumber
                )
              }
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="openingStock"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-openingStock">
              Opening Stock
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-openingStock"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Opening Stock"
              autoComplete="off"
              type="number"
              onChange={(event) =>
                field.onChange(
                  event.target.value === ""
                    ? undefined
                    : event.target.valueAsNumber
                )
              }
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="expiryDate"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-expiryDate">
              Expiry Date
            </FieldLabel>
            <Input
              id="form-rhf-product-expiryDate"
              type="date"
              value={
                field.value
                  ? new Date(field.value).toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) =>
                field.onChange(
                  e.target.value ? new Date(e.target.value) : undefined
                )
              }
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="status"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-status">
              Active Status
            </FieldLabel>
            <Input
              id="form-rhf-product-status"
              type="checkbox"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="categoryId"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-categoryId">
              Category
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-categoryId"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Category ID"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="brandId"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-product-brandId">Brand</FieldLabel>
            <Input
              {...field}
              id="form-rhf-product-brandId"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Brand ID"
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
