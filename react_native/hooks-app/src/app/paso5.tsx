import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from 'react';


interface UsuarioContextType {
 usuario: string;
 cargo: string
 setUsuario: (usuario: string) => void;
 setCargo: (cargo: string) => void;
}



const UsuarioContext = createContext<
 UsuarioContextType | undefined
>(undefined);


interface UsuarioProviderProps {
 children: ReactNode;
}


export function UsuarioProvider({
 children,
}: UsuarioProviderProps) {
 const [usuario, setUsuario] = useState<string>(
   'Francisco'
 );
 const [cargo, setCargo] = useState<string>(
   'Programador'
 );

 return (
   <UsuarioContext.Provider
     value={{ usuario, setUsuario, cargo, setCargo }}
   >
     {children}
   </UsuarioContext.Provider>
 );
}


// 4. Hook personalizado para consumir el contexto
export function useUsuario(): UsuarioContextType {
 const context = useContext(UsuarioContext);


 if (context === undefined) {
   throw new Error(
     'useUsuario debe utilizarse dentro de UsuarioProvider'
   );
 }


 return context;
}