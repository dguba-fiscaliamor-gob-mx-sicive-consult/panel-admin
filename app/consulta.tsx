'use client';
import {useMemo,useRef,useState,useEffect} from 'react';
import {Brand,imageSource} from './brand-defaults';
import {consultationFiles} from './consultation-template';
import {publicationNames} from './vehicle-package';
export default function Consulta({vehicle:v,brand,onBack,onDocument}:{vehicle:any,brand:Brand,onBack:()=>void,onDocument:()=>void}){
 const [page,setPage]=useState('index.html');const frame=useRef<HTMLIFrameElement>(null);
 const files=useMemo(()=>consultationFiles(v,{logo:brand.showLogo?imageSource(brand.logo):undefined,vehicle:brand.showVehicle?imageSource(brand.vehicle):undefined,photos:Array.from({length:7},(_,i)=>v.photos?.[i]?imageSource(v.photos[i]):null)},publicationNames(v).pdfUrl),[v,brand]);
 const html=files[page].replace('<link rel="stylesheet" href="consulta.css">',`<style>${files['consulta.css']}</style>`).replace('<script src="consulta.js" defer></script>',`<script>${files['consulta.js']}</script>`);
 function resize(){const el=frame.current;if(el?.contentDocument){el.style.height='1px';el.style.height=el.contentDocument.documentElement.scrollHeight+'px'}}
 useEffect(()=>{window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize)},[]);
 function loaded(){const doc=frame.current?.contentDocument;if(!doc)return;doc.querySelectorAll<HTMLAnchorElement>('a').forEach(a=>a.addEventListener('click',e=>{const href=a.getAttribute('href')||'';if(files[href]){e.preventDefault();setPage(href)}else if(href===publicationNames(v).pdfUrl){e.preventDefault();onDocument()}}));doc.querySelectorAll('img').forEach(i=>i.addEventListener('load',resize));resize()}
 return <div><div className="previewstrip"><span>Vista previa privada · SIPAC</span><button onClick={onBack}>Volver al panel</button></div><iframe ref={frame} title="Vista previa de consulta SIPAC" srcDoc={html} onLoad={loaded} style={{display:'block',width:'100%',border:0,minHeight:600}}/></div>
}
