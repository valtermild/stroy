import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import HomeOne from './HomeOne';
import About from './pages/About';
import Services from './service/Services';
//import ServiceDetailsLeftSidebar from './service/ServiceDetailsLeftSidebar';
import stroyka from './service/stroyka';
import repair from './service/repair';
import fasad from './service/fasad';
import turkey from './service/turkey';
import genpod from './service/genpod';
import otdelka from './service/otdelka';
import ServiceDetailsRightSidebar from './service/ServiceDetailsRightSidebar';
import Projects from './project/Projects';
import ProjectDetails from './project/ProjectDetails';
import BlogLeftSidebar from './blog/BlogLeftSidebar';
import BlogRightSidebar from './blog/BlogRightSidebar';
import BlogDetailsLeftSidebar from './blog/BlogDetailsLeftSidebar';
import BlogDetailsRightSidebar from './blog/BlogDetailsRightSidebar';
import Contact from './pages/Contact';
import PageNotFound from './pages/404';
import NoMAtch from './pages/404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>                    
                    <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/services`} component={Services}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/stroyka`} component={stroyka}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/repair`} component={repair}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/fasad`} component={fasad}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/turkey`} component={turkey}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/genpod`} component={genpod}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/otdelka`} component={otdelka}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details-right-sidebar`} component={ServiceDetailsRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details`} component={ProjectDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-left-sidebar`} component={BlogLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-right-sidebar`} component={BlogRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`} component={BlogDetailsLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`} component={BlogDetailsRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
                    <Route component={NoMAtch} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.register();