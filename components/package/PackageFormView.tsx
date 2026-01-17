import { PackageFormType } from "@/lib/clientSchema/package/schema";
import { UseFormReturn } from "react-hook-form";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

const PackageFormView = ({
	form,
}: {
	form: UseFormReturn<PackageFormType>;
}) => {
	return (
		<FieldGroup>
			<Controller
				name="name"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor="form-rhf-package-name">
							Package Name
						</FieldLabel>
						<Input
							{...field}
							id="form-rhf-package-name"
							aria-invalid={fieldState.invalid}
							placeholder="Enter Package Name (e.g., Starter, Professional)"
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
						<FieldLabel htmlFor="form-rhf-package-price">Price (Rs)</FieldLabel>
						<Input
							{...field}
							id="form-rhf-package-price"
							type="number"
							aria-invalid={fieldState.invalid}
							placeholder="Enter Price"
							autoComplete="off"
							onChange={(e) => field.onChange(parseFloat(e.target.value))}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="interval"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor="form-rhf-package-interval">
							Billing Interval
						</FieldLabel>
						<select
							{...field}
							id="form-rhf-package-interval"
							aria-invalid={fieldState.invalid}
							className="border p-2 rounded"
						>
							<option value="">Select Interval</option>
							<option value="MONTHLY">Monthly</option>
							<option value="YEARLY">Yearly</option>
						</select>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="maxProducts"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor="form-rhf-package-maxproducts">
							Max Products
						</FieldLabel>
						<Input
							{...field}
							id="form-rhf-package-maxproducts"
							type="number"
							aria-invalid={fieldState.invalid}
							placeholder="Maximum number of products"
							autoComplete="off"
							onChange={(e) => field.onChange(parseInt(e.target.value))}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="maxStaff"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor="form-rhf-package-maxstaff">
							Max Staff
						</FieldLabel>
						<Input
							{...field}
							id="form-rhf-package-maxstaff"
							type="number"
							aria-invalid={fieldState.invalid}
							placeholder="Maximum number of staff"
							autoComplete="off"
							onChange={(e) => field.onChange(parseInt(e.target.value))}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="maxWarehouses"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor="form-rhf-package-maxwarehouses">
							Max Warehouses (Optional)
						</FieldLabel>
						<Input
							{...field}
							id="form-rhf-package-maxwarehouses"
							type="number"
							aria-invalid={fieldState.invalid}
							placeholder="Maximum number of warehouses"
							autoComplete="off"
							onChange={(e) => field.onChange(parseInt(e.target.value))}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="maxStockAdjust"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor="form-rhf-package-maxstockadjust">
							Max Stock Adjustments (Optional)
						</FieldLabel>
						<Input
							{...field}
							id="form-rhf-package-maxstockadjust"
							type="number"
							aria-invalid={fieldState.invalid}
							placeholder="Maximum number of stock adjustments"
							autoComplete="off"
							onChange={(e) => field.onChange(parseInt(e.target.value))}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="enableReports"
				control={form.control}
				render={({ field, fieldState }) => (
					<Field>
						<FieldLabel htmlFor="form-rhf-package-enablereports">
							Enable Reports
						</FieldLabel>
								<input
								{...field}
								id="form-rhf-package-enablereports"
								type="checkbox"
								aria-invalid={fieldState.invalid}

								checked={field.value}
								onChange={(e) => field.onChange(e.target.checked)}
							/>
					</Field>
				)}
			/>

			<Controller
				name="enableAdvanced"
				control={form.control}
				render={({ field }) => (
					<Field>
						<FieldLabel htmlFor="form-rhf-package-enableadvanced">
							Enable Advanced Features

						</FieldLabel>
							<input
								{...field}
								id="form-rhf-package-enableadvanced"
								type="checkbox"
								checked={field.value}
								onChange={(e) => field.onChange(e.target.checked)}
							/>
					</Field>
				)}
			/>
		</FieldGroup>
	);
};

export default PackageFormView;
