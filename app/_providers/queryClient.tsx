import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

export const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}