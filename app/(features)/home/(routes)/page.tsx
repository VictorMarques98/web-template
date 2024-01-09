"use client"
import { SignupForm, UserData } from "app/(features)/home/_components";

export default function Page() {
  return (
    <section>
      <SignupForm />
      <UserData />
    </section>
  )
}