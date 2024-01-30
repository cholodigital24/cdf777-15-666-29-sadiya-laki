import React from "react";

function Map() {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14578.286152935147!2d90.31108923382942!3d24.01090265589236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dda343fb798b%3A0x8eb85c599592cb2b!2sKonabari!5e0!3m2!1sen!2sbd!4v1706634147117!5m2!1sen!2sbd"
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}

export default Map;
