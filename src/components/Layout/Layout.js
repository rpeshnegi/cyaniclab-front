import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";
import ListItemText from '@material-ui/core/ListItemText';
import Footer from "./Footer";
import CyanicButton from "../Button";
// import Loading from "../Loading";

// import { connect } from 'react-redux';

const styles = theme => ({
    container: {
        zIndex: "12",
        color: "black",
        paddingTop: '70px',
        ...container
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#000000",
        textDecoration: "none"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
        paddingBottom: '70px'
    },
    mainRaised: {
        margin: "100px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    bannerTitle: {
        ...bannerTitle
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});


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
<<<<<<< HEAD
                </List> */}
                <Header/>
=======
                </List>
                <CyanicButton/>
>>>>>>> button_component
                {this.props.children}
                <Footer/>
            </>
        )
    }
}

Layout.propTypes = {
    // classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(connect()(Layout))
export default Layout
