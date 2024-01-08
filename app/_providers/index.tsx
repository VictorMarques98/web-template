import { AuthProvider } from "./auth";
import { ReactQueryProvider } from "./queryClient";

interface AppProvidersInterface {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersInterface) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ReactQueryProvider>
  )
}