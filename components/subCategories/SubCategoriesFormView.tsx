import { SubCategoryType } from "@/lib/clientSchema/subCategory/schema";
import { UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

const SubCategoriesFormView = ({
  form,
}: {
  form: UseFormReturn<SubCategoryType>;
}) => {
  return (
    <FieldGroup>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-sub-categories-name">
              Sub Category Name
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-categories-name"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Sub Category Name"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="slug"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-sub-categories-name">Slug</FieldLabel>
            <Input
              {...field}
              id="form-rhf-categories-name"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Sub Category Name"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  );
};

export default SubCategoriesFormView;
