import { Form } from "@/components/form/Form";
import Heading from "@/components/heading/Heading";


export default function Home() {
  return (
    <main className="flex h-screen w-full justify-center items-center bg-black">
      <div>
        <Heading className="text-white mb-5 text-center" tag="h1" text="welcome to Regitration"/>
        <Form />
      </div>
    </main>
  );
}
