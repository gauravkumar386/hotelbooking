import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    grecaptcha: any;
    onloadCallback: () => void;
  }
}

type ReCaptchaProps = {
  siteKey: string;
  onVerify?: (token: string) => void;
};

const ReCaptcha = ({ siteKey, onVerify }: ReCaptchaProps) => {
  const captchaRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Check if script is already loaded
    if (scriptLoaded.current || window.grecaptcha) {
      if (captchaRef.current && window.grecaptcha) {
        // Clear any previously rendered captcha
        try {
          window.grecaptcha.reset();
        } catch (e) {
          console.log("No captcha to reset");
        }
        
        window.grecaptcha.render(captchaRef.current, {
          sitekey: siteKey,
          callback: onVerify,
        });
        setIsLoaded(true);
      }
      return;
    }

    // Define the callback function
    window.onloadCallback = () => {
      if (captchaRef.current && window.grecaptcha) {
        window.grecaptcha.render(captchaRef.current, {
          sitekey: siteKey,
          callback: onVerify,
        });
        setIsLoaded(true);
      }
    };

    // Load the reCAPTCHA script only once
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      scriptLoaded.current = true;
    };
    document.body.appendChild(script);

    // Cleanup
    return () => {
      // Don't remove the script to avoid reloading issues
      // Just reset the captcha if it exists
      if (captchaRef.current && window.grecaptcha) {
        try {
          window.grecaptcha.reset();
        } catch (e) {
          console.log("Error resetting captcha:", e);
        }
      }
    };
  }, [siteKey, onVerify]);

  return (
    <div className="recaptcha-container">
      <div ref={captchaRef} id="html_element"></div>
      {!isLoaded && <p>Loading reCAPTCHA...</p>}
    </div>
  );
};

export default ReCaptcha;