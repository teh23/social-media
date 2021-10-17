import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../Header';

const Application: React.FunctionComponent = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Header />
      hihio
      {/*{count}*/}
      {/*<button onClick={() => dispatch(increment())}>asd</button>*/}
    </div>
  );
};

export default Application;
