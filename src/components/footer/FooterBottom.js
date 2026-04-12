import React from 'react';

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-sm text-center text-midnightBlue/60 font-semibold">
        &copy; {new Date().getFullYear()}. Umar Ibrahim Ayobami.
      </p>
    </div>
  );
}
export default FooterBottom;