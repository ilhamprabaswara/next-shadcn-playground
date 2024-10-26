import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormFieldMolecule from "../molecules/form-field";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";

const LoginCard = ({ control }: { control: any }) => {
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <FormFieldMolecule
          control={control}
          name="username"
          label="Username"
          inputField="input"
        />
        <FormFieldMolecule
          control={control}
          name="password"
          label="Password"
          inputField="input"
        />
      </CardContent>
      <CardFooter>
        <Button type="submit">Login</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
