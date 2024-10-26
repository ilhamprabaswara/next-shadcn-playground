import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, ControllerRenderProps, FieldValues } from "react-hook-form";

const FormFieldMolecule = ({
  control,
  name,
  label,
  inputField,
}: {
  control: Control<FieldValues>;
  name: string;
  label: string;
  inputField:
    | "checkbox"
    | "date picker"
    | "input"
    | "radio group"
    | "select"
    | "switch";
}) => {
  const formField = (field: ControllerRenderProps<any>) => {
    switch (inputField) {
      case "input":
        return <Input {...field} />;
      default:
        break;
    }
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{formField(field)}</FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldMolecule;
