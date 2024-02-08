import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
 const error = useRouteError();
 console.error(error);

 return (
   <div className="flex flex-col justify-center items-center h-[100vh] font-bold bg-gradient-to-r from-violet-400 to-fuchsia-300">
     <h1 className="text-8xl text-white pb-4">Oops!</h1>
     <p className="text-2xl text-rose-700">{error.data}</p>
     <p className="text-6xl pt-4">
       <i>{error.statusText || error.message}</i>
     </p>
   </div>
 );
}

