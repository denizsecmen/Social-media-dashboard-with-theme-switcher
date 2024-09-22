'use client';
import './globals.css';
import Home from './page';
import { Providers } from './providers';
import My from './context/context';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/layout/layout.module.css'; 
import BG from './bg/bg';
export default function RootLayout() {
  return (
    <html lang="en">
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"/>
      </head>
      <body>
        <My >
          <Providers>
            <Home />
        </Providers>
        </My>
      </body>
    </html>
  );
}
