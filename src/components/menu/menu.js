import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingBasket,
    faCashRegister,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function Menu(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">Pay&#38;Take</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <NavDropdown
                        title={
                            <div className="dropDown">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                &nbsp; Carrinho
                            </div>
                        }
                        drop="left"
                    >
                        <NavDropdown.Item href="" onClick={props.handleExibirProdutos}>
                            <FontAwesomeIcon icon={faShoppingBasket} />
                            &nbsp;
                            <strong>Produtos</strong>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">
                            Produto {/*será substituido por componente*/}
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="" data-testid="total-carrinho">
                            Total: R$ {/*será substituido por função*/}
                        </NavDropdown.Item>
                        <span className={props.produtos.length === 0 ? "hidden" : null}>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="" onClick={props.handleExibirCheckout}>
                                <FontAwesomeIcon icon={faCashRegister} />
                                &nbsp;
                                <strong>Finalizar compra</strong>
                            </NavDropdown.Item>
                        </span>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

Menu.propTypes = {
    produtos: PropTypes.array.isRequired,
    handleExibirProdutos: PropTypes.func.isRequired,
    handleExibirCheckout: PropTypes.func.isRequired,
};

export default Menu;
