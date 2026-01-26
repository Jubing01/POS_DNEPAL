import { PackageType } from "@/lib/clientSchema/package/schema";
import { UseFormReturn, Controller } from "react-hook-form";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Select } from "@/components/ui/select";

const PackagesFormView = ({ form }: { form: UseFormReturn<PackageType> }) => {
	return (
		<FieldGroup>
			{/* Name */}
			<Controller
				name="name"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>Package Name</FieldLabel>
						<Input {...field} placeholder="Enter package name" />
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			{/* Price */}
			<Controller
				name="price"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>Price</FieldLabel>
						<Input type="number" {...field} />
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			{/* Interval */}
			<Controller
				name="interval"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>Interval</FieldLabel>
						<Select
							{...field}
							options={[
								{ label: "Monthly", value: "MONTHLY" },
								{ label: "Yearly", value: "YEARLY" },
							]}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			{/* Limits */}
			<Controller
				name="maxProducts"
				control={form.control}
				render={({ field }) => (
					<Field>
						<FieldLabel>Max Products</FieldLabel>
						<Input type="number" {...field} />
					</Field>
				)}
			/>

			<Controller
				name="maxStaff"
				control={form.control}
				render={({ field }) => (
					<Field>
						<FieldLabel>Max Staff</FieldLabel>
						<Input type="number" {...field} />
					</Field>
				)}
			/>

			{/* Features */}
			<Controller
				name="enableReports"
				control={form.control}
				render={({ field }) => (
					<Field>
						<Checkbox checked={field.value} onCheckedChange={field.onChange}>
							Enable Reports
						</Checkbox>
					</Field>
				)}
			/>

			<Controller
				name="enableAdvanced"
				control={form.control}
				render={({ field }) => (
					<Field>
						<Checkbox checked={field.value} onCheckedChange={field.onChange}>
							Enable Advanced Features
						</Checkbox>
					</Field>
				)}
			/>
		</FieldGroup>
	);
};

export default PackagesFormView;
