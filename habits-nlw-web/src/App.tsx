import { ToastContainer } from 'react-toastify';

import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';

import './lib/dayjs';

import 'react-toastify/dist/ReactToastify.css';
import './styles/toastify.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <ToastContainer />

      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
          <Header />
          <SummaryTable />
        </div>
      </div>
    </>
  );
}
