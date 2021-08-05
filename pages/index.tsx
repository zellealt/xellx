import { useSession, signIn, signOut } from "next-auth/client"

export default function Index() {
  const [session, loading] = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("discord")}>Sign in</button>
    </>
  )
}