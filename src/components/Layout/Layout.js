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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                {/* <ul className="mt-0 sociallist">
                    <li className="social-links">
                        <a target="_blank" href="https://www.facebook.com/CyanicLab-310488926246347/" className="social">
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} height="22px" />
                        </a>
                        <a href="https://twitter.com/CyanicLab" target="_blank" className="social">
                            <FontAwesomeIcon icon={["fab", "twitter"]} height="22px" />
                        </a>
                        <a href="https://www.instagram.com/cyanic_lab" target="_blank" className="social">
                            <FontAwesomeIcon icon={["fab", "instagram"]} height="22px" />
                        </a>
                        <a href="https://www.linkedin.com/company/cyaniclab/" target="_blank" className="social">
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} height="22px" />
                        </a>
                    </li>
                </ul> */}
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
