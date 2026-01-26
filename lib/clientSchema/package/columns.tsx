import { ColumnDef } from "@tanstack/react-table";
import { PackageType } from "./schema";

export const getPackagesColumns = (): ColumnDef<PackageType>[] => [
	{
		accessorKey: "name",
		header: "Package Name",
	},
	{
		accessorKey: "price",
		header: "Price",
	},
	{
		accessorKey: "interval",
		header: "Interval",
	},
	{
		accessorKey: "maxProducts",
		header: "Max Products",
	},
	{
		accessorKey: "maxStaff",
		header: "Max Staff",
	},
	{
		accessorKey: "enableReports",
		header: "Reports",
		cell: ({ row }) => (row.getValue("enableReports") ? "Yes" : "No"),
	},
	{
		accessorKey: "enableAdvanced",
		header: "Advanced",
		cell: ({ row }) => (row.getValue("enableAdvanced") ? "Yes" : "No"),
	},
];
