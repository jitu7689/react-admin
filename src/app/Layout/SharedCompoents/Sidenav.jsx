import React, { Component, Fragment } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import { navigations } from "../../navigations";
// import { MatxVerticalNav } from "matx";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { NavLink } from "react-router-dom";
import { Icon } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase";
class Sidenav extends Component {
  state = {};

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings } = this.props;
    let activeLayoutSettingsName = settings.activeLayout+"Settings";
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    setLayoutSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  renderOverlay = () => (
    <div
      onClick={() => this.updateSidebarMode({ mode: "close" })}
      className="sidenav__overlay"
    />
  );
  render() {
    return (
      <Fragment>
        <Scrollbar option={{suppressScrollX: true}} className="scrollable position-relative">
          {this.props.children}
          {/* <MatxVerticalNav navigation={navigations} /> */}
          <div className="navigation">
            <NavLink to={'/dashboard'} className="nav-item">
              <TouchRipple name="child" className="w-100">
                {(() => {
                  return (
                    <Icon className="item-icon text-middle">people_alt</Icon>
                  );
                })()}
                <span className="text-middle pl-20 item-text">Clients</span>
                <div className="mx-auto"></div>
              </TouchRipple>
            </NavLink>

            <NavLink to={'/quotations'} className="nav-item">
              <TouchRipple name="child" className="w-100">
                {(() => {
                  return (
                    <Icon className="item-icon text-middle">description</Icon>
                  );
                })()}
                <span className="text-middle pl-20 item-text">Quotations</span>
                <div className="mx-auto"></div>
              </TouchRipple>
            </NavLink>

            <NavLink to={'/invoices'} className="nav-item">
              <TouchRipple name="child" className="w-100">
                {(() => {
                  return (
                    <Icon className="item-icon text-middle">sticky_note_2</Icon>
                  );
                })()}
                <span className="text-middle pl-20 item-text">Invoices</span>
                <div className="mx-auto"></div>
              </TouchRipple>
            </NavLink>

            <NavLink to={'/reports'} className="nav-item">
              <TouchRipple name="child" className="w-100">
                {(() => {
                  return (
                    <Icon className="item-icon text-middle">trending_up</Icon>
                  );
                })()}
                <span className="text-middle pl-20 item-text">Reports</span>
                <div className="mx-auto"></div>
              </TouchRipple>
            </NavLink>

            <NavLink to={'/administrations'} className="nav-item">
              <TouchRipple name="child" className="w-100">
                {(() => {
                  return (
                    <Icon className="item-icon text-middle">admin_panel_settings</Icon>
                  );
                })()}
                <span className="text-middle pl-20 item-text">Administrations</span>
                <div className="mx-auto"></div>
              </TouchRipple>
            </NavLink>
          </div>
        </Scrollbar>
        {this.renderOverlay()}
      </Fragment>
    );
  }
}
Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});
export default withRouter(
  connect(
    mapStateToProps,
    {
      setLayoutSettings
    }
  )(Sidenav)
);