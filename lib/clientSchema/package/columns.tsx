import { PackageFormType } from "./schema";
import { ColumnDef } from "@tanstack/react-table";

export const getPackageColumns = (): ColumnDef<PackageFormType>[] => [
	{
		accessorKey: "name",
		header: "Package Name",
		cell: ({ row }) => row.getValue("name"),
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => `Rs. ${row.getValue("price")}`,
	},
	{
		accessorKey: "interval",
		header: "Interval",
		cell: ({ row }) => row.getValue("interval"),
	},
	{
		accessorKey: "maxProducts",
		header: "Max Products",
		cell: ({ row }) => row.getValue("maxProducts"),
	},
	{
		accessorKey: "maxStaff",
		header: "Max Staff",
		cell: ({ row }) => row.getValue("maxStaff"),
	},
	{
		accessorKey: "maxWarehouses",
		header: "Max Warehouses",
		cell: ({ row }) => row.getValue("maxWarehouses"),
	},
    {
		accessorKey: "maxStockAdjust",
		header: "Max StockAdjust",
		cell: ({ row }) => row.getValue("maxStockAdjust"),
	},
    {
		accessorKey: "enableReports",
		header: "Report",
		cell: ({ row }) => row.getValue("enableReports"),
	},
    {
		accessorKey: "enableAdvanced",
		header: "Advanced",
		cell: ({ row }) => row.getValue("enableAdvanced"),
	},
    

];
