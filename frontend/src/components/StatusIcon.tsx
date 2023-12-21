import { CheckIcon, DoubleCheckIcon, HistoryIcon } from "../icons";

function StatusIcon({ status }: { status: string }) {
   if (status === "waited") {
     return (
       <HistoryIcon
         width="14"
         height="14"
         style="fill-secondaryText inline-block mb-0.5"
       />
     );
   } else if (status === "saved") {
     return (
       <CheckIcon
         width="14"
         height="14"
         style="fill-secondaryText inline-block mb-0.5"
       />
     );
   } else if (status === "recieved") {
     return (
       <DoubleCheckIcon
         width="14"
         height="14"
         style="fill-secondaryText inline-block mb-0.5"
       />
     );
   } else {
     return (
       <DoubleCheckIcon
         width="14"
         height="14"
         style="fill-sky-400 inline-block mb-0.5"
       />
     );
   }
 }
 
export default StatusIcon;
