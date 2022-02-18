import { useState } from "react";
import { Button } from "ui";

export default function Web() {
  const [primary, setPrimary] = useState<boolean>(true);
  return (
    <div>
      <h1>Web</h1>
      <Button
        label="Boooo"
        primary={primary}
        onClick={() => {
          setPrimary(!primary);
        }}
      />
    </div>
  );
}
