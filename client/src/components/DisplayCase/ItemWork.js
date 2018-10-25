import React, { Component } from "react";
import { connect } from "react-redux";
import "./ItemWork.css";

class ItemWork extends Component {
  toggleToGif = e => {
    e.target.src = this.props.src;
  };
  toggleOffGif = e => {
    e.target.src = this.props.static;
  };

  toggleGif = e => {
    if (e.target.src === this.props.src) {
      e.target.src = this.props.static;
    } else {
      e.target.src = this.props.src;
    }
  };

  goToDemo = e => {
    window.open(this.props.demo, "_blank");
  };

  goToCode = e => {
    window.open(this.props.code, "_blank");
  };

  render() {
    const isMobile = this.props.width <= 667;
    if (isMobile) {
      return (
        <div className="card-container-full">
          <div className="card card--big">
            <img
              className="card__image"
              src={this.props.static}
              alt={this.props.title}
              onClick={this.toggleGif}
            />
            <h2 className="card__title">
              <span className="card__title-span">{this.props.title}</span>
            </h2>
            <p className="card__text">{this.props.desc}</p>
            <div className="card__action-bar">
              <button className="card__button" onClick={this.goToDemo}>
                DEMO
              </button>
              <button className="card__button right" onClick={this.goToCode}>
                SEE THE CODE
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={
            this.props.width < 1000
              ? "card-container-full"
              : this.props.width > 1450
                ? "card-container-third"
                : "card-container-half"
          }
        >
          <div className="card card--big">
            <img
              className="card__image"
              src={this.props.static}
              alt={this.props.title}
              onMouseEnter={this.toggleToGif}
              onMouseLeave={this.toggleOffGif}
            />
            <h2 className="card__title">
              <span className="card__title-span">{this.props.title}</span>
            </h2>
            <p className="card__text">{this.props.desc}</p>
            <div className="card__action-bar">
              <button className="card__button" onClick={this.goToDemo}>
                DEMO
              </button>
              <button className="card__button right" onClick={this.goToCode}>
                SEE THE CODE
              </button>
            </div>
          </div>
        </div>
      );

      //   const isMobile = this.props.width <= 667;
      //   if (isMobile) {
      //     return (
      //       <div className="item-work-container" onClick={this.toggleGif}>
      //         <img
      //           className="item-work-img"
      //           src={this.props.static}
      //           alt={this.props.title}
      //         />
      //         <div className="item-work-desc-container">
      //           <div className="item-work-title">{this.props.title}</div>
      //           <p className="item-work-desc">{this.props.desc}</p>
      //         </div>
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div
      //         className="item-work-container"
      //         onMouseEnter={this.toggleToGif}
      //         onMouseLeave={this.toggleOffGif}
      //       >
      //         <img
      //           className="item-work-img"
      //           src={this.props.static}
      //           alt={this.props.title}
      //         />
      //         <div className="item-work-desc-container">
      //           <div className="item-work-title">{this.props.title}</div>
      //           <p className="item-work-desc">{this.props.desc}</p>
      //         </div>
      //       </div>
      //     );
      //   }
    }
  }
}

const mapStateToProps = state => {
  return {
    width: state.width,
  };
};

export default connect(mapStateToProps)(ItemWork);
