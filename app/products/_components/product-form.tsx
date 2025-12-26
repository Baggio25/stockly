import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "O nome do produto é obrigatório" }),
  price: z.number().min(0.01, { message: "O preço do produto é obrigatório" }),
  stock: z.coerce.number().int().min(0, {
    message: "A quantidade em estoque é obrigatória.",
  }),
});

interface ProductFormProps {
  onSuccess: () => void;
}

type FormSchema = z.infer<typeof formSchema>;

export const ProductForm = ({ onSuccess }: ProductFormProps) => {
  const form = useForm<FormSchema>({
    shouldUnregister: true,
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", price: 0, stock: 1 },
  });

  const handleSubmit = (data: FormSchema) => {
    // 🔹 salvar produto (API / server action)
    console.log("Produto salvo", data);

    // 🔹 fecha o dialog
    onSuccess();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Produto</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome do produto"
                  {...field}
                  autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <NumericFormat
                  value={field.value}
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={2}
                  prefix="R$"
                  allowNegative={false}
                  customInput={Input}
                  onValueChange={(values) => {
                    field.onChange(values.floatValue ?? 0);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estoque</FormLabel>
              <FormControl>
                <NumericFormat
                  value={field.value}
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={0}
                  allowNegative={false}
                  customInput={Input}
                  onValueChange={(values) => {
                    field.onChange(values.floatValue ?? 0);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onSuccess}>
            Cancelar
          </Button>

          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
};
