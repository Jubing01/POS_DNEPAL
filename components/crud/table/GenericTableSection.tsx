import { CrudConfig } from "@/lib/clientSchema/crud/schema";
import { FieldValues } from "react-hook-form";
import GenericTableView from "./GenericTableView";
import GenericPaginationView from "./GenericPaginationView";

export function GenericTableSection<TForm extends FieldValues, TRow>({
  config,
  setEditData,
}: {
  config: CrudConfig<TForm, TRow>;
  setEditData: (data: TForm | null) => void;
}) {
  const table = config.hooks.useTable({
    onEdit: (item: TForm) => {
      setEditData(item);
    },
    onDelete: (data: TForm) => {
      console.log(data);
    },
  });
  return (
    <div className="flex flex-col gap-8">
      <GenericTableView table={table} />
      <GenericPaginationView table={table} />
    </div>
  );
}
