import React, { Component } from "react";
import logo from "./logo.svg";
import EchartsRadar from "./EChart";
import "./App.css";
import Tabs from "./tabs";

class App extends Component {
  componentDidMount() {
    const tab = new Tabs({
      element: "#tab-demo",
      tabs: "#tab-demo .tabs-nav li",
      panels: "#tab-demo .tabs-content div",
      activeIndex: 1
    });
    tab.events.on("change", o => {
      console.log("aaaaaaa", o);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Now you are in Index Page.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div id="tab-demo">
          <div className="tabs-bar" role="tablist">
            <ul className="tabs-nav">
              <li role="tab" className="tabs-tab">
                Tab 1
              </li>
              <li role="tab" className="tabs-tab">
                Tab 2
              </li>
              <li role="tab" className="tabs-tab">
                Tab 3
              </li>
            </ul>
          </div>
          <div className="tabs-content">
            <div role="tabpanel" className="tabs-panel">
              第一个 Tab 里的内容
            </div>
            <div role="tabpanel" className="tabs-panel">
              第二个 Tab 里的内容
            </div>
            <div role="tabpanel" className="tabs-panel">
              第三个 Tab 里的内容
            </div>
          </div>
        </div>
        <EchartsRadar />
      </div>
    );
  }
}

export default App;
