// components/generic/GenericPaginationView.tsx
import { Button } from "@/components/ui/button";

interface GenericPaginationViewProps {
  table: any;
}

export default function GenericPaginationView({
  table,
}: GenericPaginationViewProps) {
  return (
    <div className="flex justify-end gap-4 items-center">
      <Button
        variant={"outline"}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous Page
      </Button>
      <span>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </span>
      <Button
        variant={"outline"}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next Page
      </Button>
    </div>
  );
}