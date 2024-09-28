import React from 'react';

function ChatUsButton() {
  return (
    <a
      href="https://wa.me/8239555834?text=Hello%20I%20am%20interested%20in%20your%20product" // Replace with your actual WhatsApp link
      className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
  className="w-6 h-6 mr-2"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.1-.472-.149-.672.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.921-2.209-.242-.58-.487-.5-.672-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.26.489 1.69.625.71.226 1.355.194 1.868.118.57-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.174-1.414-.074-.124-.272-.198-.571-.347z" />
</svg>
      Chat Us
    </a>
  );
}

export default ChatUsButton;
