import { CompanyTypeForm } from "@/lib/clientSchema/company/schema";
import { UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

const CompanyFormView = ({
  form,
}: {
  form: UseFormReturn<CompanyTypeForm>;
}) => {
  return (
    <FieldGroup>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-company-name">
              Company Name
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-company-name"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Company Name"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="address"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-company-address">
              Company Address
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-company-address"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Company Address"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="address"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-company-address">
              Company Address
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-company-address"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Company Address"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="phone"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-company-phone">Phone No.</FieldLabel>
            <Input
              {...field}
              id="form-rhf-company-phone"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Phone Number"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  );
};

export default CompanyFormView;
