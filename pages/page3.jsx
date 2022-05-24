import { useEffect } from "react";
function Page3() {
  useEffect(() => {
    console.log("rendered page 3!");
  });
  return <div>Page3</div>;
}

export default Page3;
