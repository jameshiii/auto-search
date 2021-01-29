import { BrowserRouter as Router, Switch, useLocation, Route } from "react-router-dom";
import App from './components/App';
import Error from './components/error';

export default function MyRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/search">
                    <QueryParams />        
                </Route>
                <Route path="/">
                    <Error />        
                </Route>
            </Switch>
        </Router>
    );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function QueryParams() {
    let query = useQuery();
    let dealer = query.get("dealer");

    if (dealer) {
        return (
            <App dealer={dealer} />
        );
    } else {
        return (
            <Error />
        );
    }
}