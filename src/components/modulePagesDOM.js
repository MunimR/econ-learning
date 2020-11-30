import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect
} from "react-router-dom";


import { modulesData } from "./modulesData.js";
import './modulePages.css';

export default function ModulePagesDOM() {
    let { module, page } = useParams();

    module = parseInt(module);

    if (modulesData[module] === undefined) {
      return <Redirect to={`/modules`}/>;
    }

    if (page === undefined) {
        page = 0;
    }

    page = parseInt(page);

    if (modulesData[module].Pages[page] === undefined) {
      return <Redirect to={`/modules`}/>
    }

    return (
      <div>
          <div className="topNavigation">
            <p>&lt;Previous Module</p>
            <h1>{modulesData[module].Title}</h1>
            <p>Next Module&gt;</p>
          </div>
          
          <div className="pageContent">
            <h2>{modulesData[module].Pages[page][0]}</h2>
            <p>{modulesData[module].Pages[page][1]}</p>
          </div>
          
          <BottomNavGen module={module} page={page}/>
          
      </div>
    );
}


function BottomNavGen(props) {
    const module = props.module;
    const pages = props.page;
    const len = modulesData[module].Pages.length;

    
    if ((len - pages - 1) === 0) {
      return (<div className="bottomNavigation">
        <h4><Link to={`/modules/${module}/${pages - 1}`} replace>Previous Page</Link></h4>
        <p>Page {pages + 1}/{len}</p>
        <h4>Start Quiz</h4>
      </div>)
    }

    if (pages === 0) {
      return (<div className="bottomNavigation">
        <h4>Previous Page</h4>
        <p>Page {pages + 1}/{len}</p>
        <h4><Link to={`/modules/${module}/${pages + 1}`} replace>Next Page</Link></h4>
      </div>)
    }


    return (<div className="bottomNavigation">
        <h4><Link to={`/modules/${module}/${pages - 1}`} replace>Previous Page</Link></h4>
        <p>Page {pages + 1}/{len}</p>
        <h4><Link to={`/modules/${module}/${pages + 1}`} replace>Next Page</Link></h4>
    </div>)
}