import { Switch, Route } from "react-router-dom";
import  Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard/index";
import GeekStore from "../pages/GeekStore/index";
import Multimedia from "../pages/Multimedia/index";
import MyGeekStore from "../pages/MyGeekStore/index";
import MyMultimedia from "../pages/MyMultimedia/index";
import MyPersona from "../pages/MyPersona/index";
import MyXFileGeek from "../pages/MyXFileGeek/index";
import Persona from "../pages/Persona/index";
import Signup from "../pages/Signup/index";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/geekstore">
                    <GeekStore />
                </Route>
                <Route path="/multimedia">
                    <Multimedia />
                </Route>
                <Route path="/mygeekstore">
                    <MyGeekStore />
                </Route>
                <Route path="/mymultimedia">
                    <MyMultimedia />
                </Route>
                <Route path="/mypersona">
                    <MyPersona />
                </Route>
                <Route path="/myxfilegeek">
                    <MyXFileGeek />
                </Route>
                <Route path="/persona">
                    <Persona />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;
