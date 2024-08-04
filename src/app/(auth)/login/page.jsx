import { auth, signIn } from "@/lib/auth";

const LoginPage = async () => {
  console.log("LoginPage");

  const session = await auth();

  console.log("session:", session);

  const handleGithubLogin = async () => {
    "use server";
    console.log("handleGithubLogin");
    await signIn("github");
  };

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
