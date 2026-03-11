import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254713946999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
}
