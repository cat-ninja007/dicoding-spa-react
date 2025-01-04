import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function HomePage(){
  return <p>This is Homepage</p>;
}

function AboutPage(){
  return <p>This is About page</p>;
}

function FAQPage(){
  return <p>This is FAQ page</p>;
}

// function Link({ target, navigate, children}){
//   return (
//     <a
//       href={target}
//       onClick={(event) => {
//         event.preventDefault(); // menghapus behaviour default
//         navigate(target); // mengubah state berdasarkan target
//       }}
//     >
//       {children}
//     </a>
//   )
// }

class App extends React.Component {
  constructor(props){
    super(props);

    // inisialisasi state
    this.state = {
      page: '/about'
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target){
    this.setState(() => {
      return {
        page: target
      };
    });
  }
  render(){
    return (
      <>
        <header>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
      </>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)