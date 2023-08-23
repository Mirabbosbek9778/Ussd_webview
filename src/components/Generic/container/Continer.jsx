import { Fragment } from 'react';

export default function Container({ children }) {
  return (
    <Fragment>
      <div className='max-w-[700px]  min-w-[375px] min-h-[100vh] mx-auto bg-[var(--bg-color)] relative'>
        {children}
      </div>
    </Fragment>
  );
}
