import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";
import ListItemText from '@material-ui/core/ListItemText';
import Footer from "./Footer";
// import Loading from "../Loading";

// import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from "framer-motion";

const styles = {
};

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = { path: '' };

        console.log(this.props);
    }
    componentDidMount() {
        this.setState({ path: window.location.pathname });
    }

    render() {
        const { classes, backdrop } = this.props;
        return (
            <>
                {/* <Loading /> */}
                {/* <List >
                    <ListItem button>
                        <Link href="/">
                            <a><ListItemText primary="Home" /></a>
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link href="/about">
                            <a><ListItemText primary="About" /></a>
                        </Link>

                    </ListItem>
                </List> */}
                <Header />
                {this.props.children}
                <Footer />
            </>
        )
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout)
// export default Layout
