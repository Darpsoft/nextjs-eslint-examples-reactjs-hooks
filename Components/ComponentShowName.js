//@ts-check
import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
/**
 * @typedef { "Angel" | "Diego" | "J Carlos" } NameEnable
 */

/**
 * Componente para mostrar tu nombre
 *
 * @param {object} params
 * @param {NameEnable} params.name Aquí se debe colocar el nombre que aparecerá
 * @param {object} params.style Aquí se debe colocar el stylo del <p>
 * @returns
 */

const ButtonApp = ({ name, style }) => {
  const _object = [];
  return <Button style={{ ...style, color: "red" }}>{name}</Button>;
};

ButtonApp.propTypes = {
  ...Button.propTypes,
  name: PropTypes.oneOf(["Angel", "Diego", "J Carlos"]),
};

export default ButtonApp;
