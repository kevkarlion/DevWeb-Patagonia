

export const ContactCTA = ({buttonText, href}: { buttonText:string, href:string}) => {
  return (
    <div className="mt-10 text-center wow fadeInUp" data-wow-delay="0.5s">
     
      <a 
        href={href}
        target="_blank"
        
        rel="noopener noreferrer"
        className="inline-block bg-[#d42629] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-red-700"
      >
        {buttonText}
      </a>
    </div>
  );
};


