import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Container({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener('message', receiveRespnse);
    return () => window.addEventListener('message', receiveRespnse);
  }, []);
  const receiveRespnse = (event) => {
    const receiveData = event?.data;
    if (receiveData == 'close' && window.location?.pathname == '/') {
      window?.Android?.closeApp();
    } else if (receiveData == 'close') {
      navigate(-1);
    }
  };
  return (
    <Fragment>
      <div className='max-w-[700px]  min-w-[360px] min-h-[100vh] mx-auto bg-[var(--bg-color)] relative'>
        {children}
      </div>
    </Fragment>
  );
}
