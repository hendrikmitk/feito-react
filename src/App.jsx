import { useState } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import Link from './components/Link';

const App = () => {
  const [count, setCount] = useState(0);

  const buttonClickhandler = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="text-center font-poppins">
      <header className="flex min-h-screen flex-col items-center justify-center bg-react-gray text-[calc(10px+2vmin)] text-white">
        <img
          src={logo}
          className="pointer-events-none h-[40vmin] motion-safe:animate-app-logo-spin"
          alt="logo"
        />
        <div className="space-y-12 py-6">
          <p>Hello Vite + React + Tailwind!</p>
          <p>
            <Button count={count} onClick={buttonClickhandler} />
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <Link 
              linkTitle="Learn React"
              linkTarget="https://reactjs.org"
            />
            {' | '}
            <Link
              linkTitle="Vite Docs"
              linkTarget="https://vitejs.dev/guide/"
            />
            {' | '}
            <Link
              linkTitle="Tailwind CSS"
              linkTarget="https://tailwindcss.com"
            />
          </p>
        </div>
      </header>
    </div>
  );
};

export default App;
