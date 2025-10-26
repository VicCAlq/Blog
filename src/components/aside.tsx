import type { ReactNode } from "react";

export function Aside(props: { type: string, children: ReactNode }) {
  return(
    <aside>
      {props.children}
    </aside>
  )
}
