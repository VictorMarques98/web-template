import { useMutation } from "@tanstack/react-query";
import { useUserData } from "../_stores/userData";

// constants
const SIGNUP_SUCCESS = "Signup success";
const SIGNUP_ERROR = "Signup error";

async function signup(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
}

export function useSignup() {
  const setUserData = useUserData((state) => state.setUserData);

  const {
    mutate,
    isPending,
  } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      setUserData(data);
      alert(SIGNUP_SUCCESS);
    },
    onError: (error) => {
      alert(SIGNUP_ERROR)
    }
  });

  return {
    mutate,
    isPending,
  }
}