import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'SIPAC · Control vehicular',description:'Panel privado de registro y administración vehicular'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
