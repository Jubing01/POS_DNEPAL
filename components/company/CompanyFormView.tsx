import { CreateCompanyFormType } from "@/lib/clientSchema/company/schema";
import { UseFormReturn, Controller } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const RenderInputField = ({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: {
  form: UseFormReturn<CreateCompanyFormType>;
  name: keyof CreateCompanyFormType | string;
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
}) => (
  <Controller
    name={name as any}
    control={form.control}
    render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
        <FieldLabel htmlFor={`form-rhf-${name}`}>{label}</FieldLabel>
        <Input
          {...field}
          id={`form-rhf-${name}`}
          type={type}
          placeholder={placeholder}
          aria-invalid={fieldState.invalid}
          autoComplete="off"
        />
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </Field>
    )}
  />
);

const CompanyFormView = ({
  form,
}: {
  form: UseFormReturn<CreateCompanyFormType>;
}) => {
  return (
    <div className="space-y-8">
      {/* ================= Company Info ================= */}
      <FieldGroup>
        <RenderInputField
          form={form}
          name="company.name"
          label="Company Name"
          placeholder="ABC Traders"
        />
        <RenderInputField
          form={form}
          name="company.address"
          label="Address"
          placeholder="Kathmandu"
        />
        <RenderInputField
          form={form}
          name="company.phone"
          label="Phone No."
          placeholder="98xxxxxxxx"
        />
        <RenderInputField
          form={form}
          name="company.pan"
          label="PAN No."
          placeholder="PAN123"
        />
        <RenderInputField
          form={form}
          name="company.logoUrl"
          label="Logo URL"
          placeholder="https://logo.png"
        />
        <RenderInputField
          form={form}
          name="company.currency"
          label="Currency"
          placeholder="NPR"
        />
        <RenderInputField
          form={form}
          name="company.rounding"
          label="Decimal Precision"
          placeholder="2"
          type="number"
        />
      </FieldGroup>

      {/* ================= Admin User Info ================= */}
      <FieldGroup>
        <RenderInputField
          form={form}
          name="adminUser.name"
          label="Admin Name"
          placeholder="Ram Sharma"
        />
        <RenderInputField
          form={form}
          name="adminUser.email"
          label="Admin Email"
          placeholder="admin@example.com"
          type="email"
        />
        <RenderInputField
          form={form}
          name="adminUser.password"
          label="Password"
          placeholder="Enter password"
          type="password"
        />
      </FieldGroup>

      {/* ================= Subscription ================= */}
      <FieldGroup>
        <RenderInputField
          form={form}
          name="subscription.packageId"
          label="PackageId"
          placeholder="Enter Package Id"
        />
      </FieldGroup>
    </div>
  );
};

export default CompanyFormView;
