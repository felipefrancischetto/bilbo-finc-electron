import React from "react";

import { Styles } from "./styles";

export default function Container({ children }: any) {
  return (
    <Styles>
      {children}
    </Styles>
  );
}
