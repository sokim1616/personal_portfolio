import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Toggle from "./Toggle";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <h2 className="title">Welcome to So Hyun's World</h2>
          <div className="desc">
            안녕하세요, 저는 햇뵹아리 프로그래머 입니다. 누추한 곳에
            찾아와주셔서 감사합니다^~^
          </div>
          <header className="header">
            <div>
              <Link to="/">Home </Link>
            </div>
            <div>
              <Link to="/blog">BLOG </Link>
            </div>
            <div>
              <Link to="/github">Let's GITit!!</Link>
            </div>
          </header>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {" "}
          {/* 주소로 가는 부분 */}
          <Route path="/github">
            <Github />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="content">
      <div className="grid">
        <div>
          <img className="image" src="https://picsum.photos/500"></img>
        </div>
        <div className="home-text">
          제 블로그와 깃헙을 보시고 싶으시다면 해당하는 메뉴바를 클릭해주세요~
          (삐약)
        </div>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <div className="content">
        Blog Address:
        <div>
          <a href="http://programming24-7.tistory.com/">
            http://programming24-7.tistory.com/
          </a>
        </div>
        <div className="grid">
          <div>
            <img
              className="blog-image"
              src="https://signatureiow.marketing/wp-content/uploads/2018/05/Oli-Blog-2.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function Github() {
  return (
    <div>
      <div className="content">
        Github ID:
        <div>
          <a href="https://github.com/sokim1616">sokim1616</a>
        </div>
        <div className="grid">
          <div>
            <img
              className="github-image"
              src="https://miro.medium.com/max/1400/0*c9HBMW0byk5LRouy"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

//export default App;

// import React from "react";
// import ReadContent from "../build/ReadContent";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mode: "welcome",
//       welcome: {
//         title: "Welcome to So Hyun's World",
//         desc:
//           "안녕하세요, 저는 햇뵹아리 프로그래머 입니다. 누추한 곳에 찾아와주셔서 감사합니다^~^",
//       },
//     };
//   }

//   render() {
//     let _title,
//       _desc,
//       _article = null;
//     if (this.state.mode === "welcome") {
//       _title = this.state.welcome.title;
//       _desc = this.state.welcome.desc;
//       _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
//     }
//     return <div className="App">{_article}</div>;
//   }
// }

// export default App;
