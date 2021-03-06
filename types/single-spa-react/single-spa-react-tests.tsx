import singleSpaReact = require("single-spa-react");
import { Lifecycles } from "single-spa-react";
import * as React from "react";
import * as ReactDOM from "react-dom";

interface customProps {
    name: string;
}

class rootComponent extends React.Component<customProps> {
    render() {
        return <div> hello{this.props.name} !</div>;
    }
}

// $ExpectType Lifecycles
singleSpaReact({
    React,
    ReactDOM,
    rootComponent
});

// $ExpectType Lifecycles
singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    errorBoundary: (err, info, props) => {
        return null;
    }
});

// $ExpectType Lifecycles
singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    errorBoundary: (err, info, props) => {
        return (<h1>{err}</h1>);
    }
});
