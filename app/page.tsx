import Dashboard from './dashboard';
import {getChatGPTUser,chatGPTSignInPath,chatGPTSignOutPath} from './chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Page(){
 const user=await getChatGPTUser();
 if(!user)return <main style={{maxWidth:560,margin:'12vh auto',padding:32,background:'white',borderRadius:16}}><h1>SIPAC</h1><h2>Accede a tus expedientes</h2><p>Inicia sesión con la cuenta de ChatGPT donde registraste tus vehículos. Abrir la página no inicia la sesión automáticamente.</p><a className="primary" href={chatGPTSignInPath('/')} target="_top">Iniciar sesión con ChatGPT</a></main>;
 return <><div style={{padding:12,textAlign:'right',background:'#eef5f5'}}>Sesión: {user.email} · <a target="_top" href={chatGPTSignOutPath('/')}>Cambiar cuenta</a></div><Dashboard/></>;
}
