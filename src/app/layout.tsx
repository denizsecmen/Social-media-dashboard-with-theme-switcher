import './globals.css';
import Home from './page';
import 'bootstrap/dist/css/bootstrap.min.css'; 
export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"/>
      </head>
      <body>
        <Home/>
        <div id="long">
          
        </div>
        <div id="wave">
        </div>
      </body>
    </html>
  );
}
