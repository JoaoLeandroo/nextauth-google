import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

const FormButtons =  async () => {

  const session = await auth()

  if(session) {
    return redirect('/painel')
  }
  console.log(session)
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
      className="flex gap-x-2"
    >
      <button
        type="submit"
        className="p-3 rounded shadow-md bg-blue-400 text-white"
        name="action"
        value="google"
      >
        Login With Google
      </button>

    </form>
  );
};

export default FormButtons;
