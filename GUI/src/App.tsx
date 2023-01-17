import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'components';
import ChatActive from 'pages/Chat/ChatActive';
import ChatHistory from 'pages/Chat/ChatHistory';

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to='/vestlus/aktiivsed' />} />
        <Route path='/vestlus/aktiivsed' element={<ChatActive />} />
        <Route path='/vestlus/ajalugu' element={<ChatHistory />} />
      </Route>
    </Routes>
  );
};

export default App;