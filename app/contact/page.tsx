import ContactPage from "../../src/pages/ContactPage"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Toaster } from "react-hot-toast";
export default function Contact() {

  return <>
  <Toaster position="top-center" reverseOrder={false} /><ContactPage /><WhatsAppFloat/></>
}
