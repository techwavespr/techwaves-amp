import React, {Component} from 'react';

import {ModalsComponent} from '../Modals.Styles';
import {AMP_URL} from '@/const/general.constants';

export default class GetInTouch extends Component {
  render() {
    return (
      <ModalsComponent
        id="getInTouchModal"
        closeOnOutsideTap
        className="request_modal"
        layout="nodisplay"
      >
        <div
          className="modal-card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contactTitle"
          data-amp-bind-class="'modal-card ' + (ui.modalOpen ? '-show' : '')"
        >
          <div className="modal-form__wrap">
            <form
              id="getInToucForm"
              method="post"
              action-xhr={`${AMP_URL}/api/form`}
              encType="application/x-www-form-urlencoded"
              target="_top"
              on="submit-success:getInToucForm.clear,getInTouchModal.close,successModal.open,autoCloseSuccess.start;submit-error:getInToucForm.clear,getInTouchModal.close"
            >
              <div className="modal-icon__wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none" className="modal-icon">
                  <mask id="mask0_383_36" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="51">
                    <path d="M50 0.972168H0V50.9722H50V0.972168Z" fill="white"></path>
                  </mask>
                  <g mask="url(#mask0_383_36)">
                    <path
                      d="M25 47.5944C24.7471 47.5944 24.4942 47.5291 24.2677 47.3983C24.0216 47.2563 18.1748 43.8615 12.2442 38.7465C8.72914 35.715 5.92329 32.7081 3.90474 29.8097C1.29263 26.0591 -0.020939 22.4515 0.000252352 19.087C0.025057 15.172 1.4273 11.4901 3.94898 8.71962C6.51323 5.90244 9.93529 4.35107 13.585 4.35107C18.2624 4.35107 22.5389 6.97119 25.0001 11.1218C27.4613 6.97128 31.7378 4.35107 36.4152 4.35107C39.8633 4.35107 43.153 5.75088 45.6788 8.29267C48.4506 11.082 50.0255 15.0232 49.9998 19.1055C49.9785 22.4642 48.6403 26.0664 46.0224 29.8118C43.9976 32.7087 41.1957 35.7142 37.6944 38.7449C31.7854 43.8594 25.9807 47.254 25.7364 47.396C25.5088 47.5282 25.2543 47.5944 25 47.5944Z"
                      fill="#3771DD"></path>
                  </g>
                </svg>
              </div>
              <div className="modal-texts">
                <span className="modal-texts__title text">Get In Touch</span>
                <span className="modal-texts__description text-thin">To stay connected with us</span>
              </div>
              <div className="modal-form__line">
                <input
                  className="modal-form__input name"
                  id="modalRequest_name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="modal-form__line">
                <input
                  className="modal-form__input phone"
                  id="modalRequest_email"
                  name="email"
                  type="email"
                  placeholder="Email*"
                  required
                />
              </div>
              <div className="modal-form__checkboxes">
                <div className="modal-form__checkbox request_checkbox">
                  <input
                    name="checkbox"
                    type="checkbox"
                    id="checkbox_confirm"
                    className="modal-form__checkbox_confirm"
                    required
                  />
                  <label htmlFor="checkbox_confirm"/>
                  <div className="modal-form__checkbox_tag">
                    <p className="text-thin modal-form__checkbox_text">I agree to the <a
                      href={`/user-agreement`}
                      rel="nofollow" target="_blank">User
                      Agreement</a> and <a href={`/privacy-policy`} rel="nofollow" target="_blank">Privacy Police</a></p>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </ModalsComponent>
    )
      ;
  }
};
