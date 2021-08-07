import React from "react";
import { Form, Row, Col, Button, Jumbotron, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

// Date Picker
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";

registerLocale("pt", pt);

function Checkout(props) {
    return (
        <div>
            <h1>Checkout</h1>
        </div>
    );
}

export default Checkout;
