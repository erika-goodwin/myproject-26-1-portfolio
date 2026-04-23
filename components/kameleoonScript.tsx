import Script from "next/script";

export default function KameleoonScript() {
  return (
    <>
      <Script id="kameleoon-anti-flicker-logic" type="text/javascript">
        {` 
          // Duration in milliseconds to wait while the Kameleoon application file is loaded
          var kameleoonLoadingTimeout = 750;

          window.kameleoonQueue = window.kameleoonQueue || [];
          window.kameleoonStartLoadTime = Date.now();
          if (! document.getElementById("kameleoonLoadingStyleSheet") && ! window.kameleoonDisplayPageTimeOut)
          {
              var kameleoonS = document.getElementsByTagName("script")[0];
              var kameleoonCc = "html::after { content: ''; position: fixed; inset: 0; background: #fff; z-index: 2147483647; }";
              var kameleoonStn = document.createElement("style");
              kameleoonStn.type = "text/css";
              kameleoonStn.id = "kameleoonLoadingStyleSheet";
              if (kameleoonStn.styleSheet)
              {
                  kameleoonStn.styleSheet.cssText = kameleoonCc;
              }
              else
              {
                  kameleoonStn.appendChild(document.createTextNode(kameleoonCc));
              }
              kameleoonS.parentNode.insertBefore(kameleoonStn, kameleoonS);
              window.kameleoonDisplayPage = function(fromEngine)
              {
                  if (!fromEngine)
                  {
                      window.kameleoonTimeout = true;
                  }
                  if (kameleoonStn.parentNode)
                  {
                      kameleoonStn.parentNode.removeChild(kameleoonStn);
                  }
              };
              window.kameleoonDisplayPageTimeOut = window.setTimeout(window.kameleoonDisplayPage, kameleoonLoadingTimeout);
          } 
        `}
      </Script>
      <Script
        id="kameleoon-engine"
        type="text/javascript"
        src="//mw3bb7k31u.kameleoon.io/engine.js"
        async={true}
        fetchPriority="high"
      ></Script>
    </>
  );
}
