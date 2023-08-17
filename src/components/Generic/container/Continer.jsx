import { Fragment } from "react";

export default function Container({ children }) {
  return (
    <Fragment>
      <div className="max-w-[700px] min-w-[375px] mx-auto bg-slate-500">
        {children}
      </div>
    </Fragment>
  );
}
