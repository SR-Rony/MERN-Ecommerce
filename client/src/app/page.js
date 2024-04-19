import Form from "@/components/form/Form";
import Input from "@/components/form/Input";

export default function Registration() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Form >
          <Input className="" label="fullName" type="text" name="fullName" placeholder="full name"/>
        </Form>
      </div>
    </main>
  );
}
