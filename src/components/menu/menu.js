import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingBasket,
    faCashRegister,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
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
                        <NavDropdown.Item href="">
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
                        <span>
                            {/* verificar qtd de prosutos para exibir ou não o botão */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">
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

export default Menu;
