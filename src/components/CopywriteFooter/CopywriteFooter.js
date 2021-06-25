import React from "react";

const CopywriteFooter = () => {
  const date = new Date().getFullYear();
  return (
    <div className="d-flex justify-content-center align-items-center">
      <p>Copyright © {date} Utopian. All rights reserved.</p>
    </div>
  );
};

export default CopywriteFooter;
