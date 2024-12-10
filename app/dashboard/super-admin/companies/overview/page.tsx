import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex justify-center">X Company Details</div>
      <div className="flex flex-column justify-center ">
        <div className="max-w-24">
          Company Name: <span>ABC Company</span>
        </div>
        <div>
          Company Address: <span>123 Main St, Anytown, USA</span>
        </div>
        <div>
          GST Number: <span>23EBTPG3458I67</span>
        </div>
        <div>
          Company Phone: <span>123-456-7890</span>
        </div>
        <div>
          Company Email: <span>info@abc.com</span>
        </div>
        <div>
          Storage Buyed: <span>1000</span>
        </div>
        <div>
          Storage Used: <span>500</span>
        </div>
        <div>
          Total Employees: <span>10</span>
        </div>
      </div>
    </div>
  );
}
