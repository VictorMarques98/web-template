"use client"
import { useUserData } from "app/(features)/home/_stores/userData";

export function UserData() {
  const userData = useUserData((state) => state.userData);

  return (
    <div>
      <h3>My user Data:</h3>
      {!userData ? (
        <span>User is not registred</span>
      )
        :
        (
          <div>
            <span>name: {userData.name}</span>
            <span>email: {userData.email}</span>
          </div>
        )}
    </div>
  )
}
