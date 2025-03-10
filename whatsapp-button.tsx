
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open("https://wa.me/923498660326", "_blank")}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 z-50 flex items-center gap-2"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline">Chat with us</span>
    </button>
  );
}
