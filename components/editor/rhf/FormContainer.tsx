import { ReactNode } from 'react';

export default function FormContainer({ children }: { children: ReactNode }) {
  return <form className="flex flex-col">{children}</form>;
}
