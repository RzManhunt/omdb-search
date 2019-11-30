import React from 'react';

/*
* Higher Order Component para logica hover over
*
* @return Component
*
*/

export const withHover = function(Component, propName = 'hovering') {
  return class WithHover extends Component {
  	// Logica del HOC
    state = { hovering: false }

    mouseOver = () => this.setState({ hovering: true })
    mouseOut = () => this.setState({ hovering: false })

    render() {
    // Permite cambiar el nombre de la prop de la logica y pasar otras
      const props = {
        [propName]: this.state.hovering, ...this.props,
      }
      // Renderiza el componente pasado como argumento con sus props
      // Se deben pasar las props adicionales, en este caso el 'height'
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  }
}


// Componente que se pasa como argumento al HOC
function Info ({ showTooltip, height }) {
  return (
  	// Renderizado condicional de un Tooltip - Recibira las prop desde el HOC
      {showTooltip === true
        ? <Tooltip id={this.props.id} />
        : null}
    // Icono que renderiza el componente Info
      <svg
        className="Icon-svg Icon--hoverable-svg"
        height={height}
        viewBox="0 0 16 16" width="16">
          <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
  )
}

// Llamada al HOC
const InfoWithHover = withHover(Info, 'showTooltip');