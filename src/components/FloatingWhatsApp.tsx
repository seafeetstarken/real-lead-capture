import { trackWhatsAppClick } from "@/lib/gtm";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const whatsappNumber = "554733084390";
    const message = encodeURIComponent(
      "Olá! Gostaria de falar com um projetista sobre móveis sob medida."
    );
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    trackWhatsAppClick(url);
    window.location.href = url;
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300 animate-fade-in"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
      
      <svg className="w-9 h-9 relative z-10 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.09-3.93c1.644.976 3.255 1.489 4.908 1.492 5.56.002 10.082-4.515 10.086-10.079.002-2.695-1.047-5.227-2.952-7.133C16.28 2.446 13.75 1.397 11.06 1.397c-5.563 0-10.086 4.517-10.09 10.083-.001 1.93.504 3.812 1.464 5.485L1.442 21.8l4.705-1.73zM17.476 14.3c-.354-.177-2.096-1.033-2.42-1.15-.324-.117-.56-.177-.796.177-.236.354-.913 1.15-1.12 1.384-.207.234-.413.264-.768.087-.354-.177-1.497-.552-2.85-1.76-1.053-.94-1.763-2.1-1.97-2.45-.206-.354-.022-.546.155-.722.16-.16.354-.413.531-.62.176-.207.236-.354.354-.59.117-.237.058-.443-.03-.62-.088-.177-.796-1.916-1.09-2.624-.287-.69-.577-.597-.797-.607-.206-.01-.443-.01-.678-.01-.236 0-.62.088-.943.443-.324.354-1.237 1.21-1.237 2.95 0 1.74 1.267 3.42 1.443 3.655.177.234 2.493 3.807 6.04 5.34.844.36 1.503.576 2.016.74.848.27 1.62.23 2.23.14.68-.1 2.096-.856 2.39-1.684.295-.828.295-1.537.207-1.684-.088-.15-.323-.236-.677-.413z" />
      </svg>
    </button>
  );
};

export default FloatingWhatsApp;
