import React, { useEffect, useRef, memo } from "react";

function Chart() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
          {
            "width": "",
          "height": "",
            "symbol": "BITSTAMP:BTCUSD",
            "interval": "W",
            "timezone": "exchange",
            "theme": "light",
            "style": "2",
            "locale": "en",
            "enable_publishing": false,
            "gridColor": "rgba(255, 255, 255, 0.06)",
            "hide_top_toolbar": true,

            "allow_symbol_change": true,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
          }`;
    container.current.appendChild(script);
    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(Chart);
