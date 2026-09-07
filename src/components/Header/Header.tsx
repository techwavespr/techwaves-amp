import React, {Component} from 'react';

import { HeaderComponent } from './HeaderComponent.Styles';
import {PHONES_BY_COUNTRY, PhonesKey} from '@/const/general.constants';

type HeaderProps = {
  slug: string;
  isServicePage?: boolean;
  geo?: {
    country: string;
  }
}

export default class Header extends Component<HeaderProps> {
  render() {
    const { geo, slug, isServicePage } = this.props;

    return (
      <HeaderComponent className="header">
        <div className="header-wrap">
          <div className="container">
            <div className="row">
              <div className="header-container">
                <div className="header-menu__container d-none d-lg-block">
                  <ul className="header-menu nav-links" role="menubar">
                    <li
                      className={`menu-item nav-item dropdown ${slug === 'services' ? '-active' : ''}`}
                      role="menuitem"
                      data-amp-bind-class="'menu-item nav-item dropdown ' + (ui.nav == 'services' ? ' -active' : '')"
                    >
                      <a
                        href={`/services`}
                        className={`${slug === 'services' ? '-active' : ''}`}
                        data-amp-bind-class="(ui.nav == 'services' ? '-active' : '')"
                        on="tap:AMP.setState({ui:{menuOpened:false, nav:'services'}})"
                      >
                        <span>Services</span>
                      </a>
                      <div className="dropdown-menu">
                        <a href={`/services/public-relations`} className=" dropdown-item">Public
                          relations</a>
                        <a href={`/services/pr-release`} className=" dropdown-item">PR
                          release</a>
                      </div>
                    </li>
                    <li
                      className={`menu-item nav-item ${slug === 'cases' ? '-active' : ''}`}
                      role="menuitem"
                      data-amp-bind-class="'menu-item nav-item ' + (ui.nav == 'cases' ? ' -active' : '')"
                    >
                      <a
                        href={`/cases`}
                        className={`${slug === 'cases' ? '-active' : ''}`}
                        data-amp-bind-class="(ui.nav == 'cases' ? '-active' : '')"
                        on="tap:AMP.setState({ui:{menuOpened:false, nav:'cases'}})"
                      >
                        <span>Cases</span>
                      </a>
                    </li>
                    <li
                      className={`menu-item nav-item ${slug === 'blog' ? '-active' : ''}`}
                      role="menuitem"
                      data-amp-bind-class="'menu-item nav-item ' + (ui.nav == 'blog' ? ' -active' : '')"
                    >
                      <a
                        href={`/blog`}
                        className={`${slug === 'blog' ? '-active' : ''}`}
                        data-amp-bind-class="(ui.nav == 'blog' ? '-active' : '')"
                        on="tap:AMP.setState({ui:{menuOpened:false, nav:'blog'}})"
                      >
                        <span>Blog</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-btn__container d-flex d-lg-none">
                  <a
                    href={`https://wa.me/${PHONES_BY_COUNTRY[geo?.country as PhonesKey || 'US']}`}
                    id="go_to_cta_header_mobile"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="header-btn btn -secondary"
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M16.6542 3.17227C14.8772 1.36758 12.5107 0.375 9.99576 0.375C4.80469 0.375 0.58058 4.65469 0.58058 9.91406C0.58058 11.5941 1.01317 13.2355 1.83594 14.6836L0.5 19.625L5.49174 18.2973C6.86585 19.0578 8.41384 19.4574 9.99152 19.4574H9.99576C15.1826 19.4574 19.5 15.1777 19.5 9.91836C19.5 7.37031 18.4312 4.97695 16.6542 3.17227ZM9.99576 17.8504C8.58772 17.8504 7.20937 17.468 6.00915 16.7461L5.725 16.5742L2.76473 17.3605L3.55357 14.4344L3.36696 14.1336C2.58237 12.8703 2.17098 11.4137 2.17098 9.91406C2.17098 5.54414 5.68259 1.98633 10 1.98633C12.0908 1.98633 14.0545 2.81133 15.5304 4.31094C17.0062 5.81055 17.9138 7.8 17.9096 9.91836C17.9096 14.2926 14.3089 17.8504 9.99576 17.8504ZM14.2877 11.9121C14.0545 11.7918 12.8967 11.216 12.6804 11.1387C12.4641 11.057 12.3071 11.0184 12.1502 11.259C11.9933 11.4996 11.5437 12.0324 11.4038 12.1957C11.2681 12.3547 11.1281 12.3762 10.8949 12.2559C9.51228 11.5555 8.60469 11.0055 7.69286 9.41992C7.45112 8.99883 7.9346 9.02891 8.38415 8.11797C8.46049 7.95898 8.42232 7.82148 8.36295 7.70117C8.30357 7.58086 7.83281 6.40781 7.63772 5.93086C7.44687 5.4668 7.25179 5.53125 7.10759 5.52266C6.97187 5.51406 6.81495 5.51406 6.65804 5.51406C6.50112 5.51406 6.24665 5.57422 6.03036 5.81055C5.81406 6.05117 5.20759 6.62695 5.20759 7.8C5.20759 8.97305 6.05156 10.1074 6.16607 10.2664C6.28482 10.4254 7.82433 12.8316 10.1866 13.8672C11.6795 14.5203 12.2647 14.5762 13.0112 14.4645C13.465 14.3957 14.4022 13.8887 14.5973 13.3301C14.7924 12.7715 14.7924 12.2945 14.733 12.1957C14.6779 12.0883 14.521 12.0281 14.2877 11.9121Z" fill="white"></path>
                    </svg>
                  </a>
                </div>
                <div className="header-logo__container">
                  <div className="header-logo__wrap">
                    <a href={`/`} className="header-logo__link" rel="nofollow" aria-label="logo">
                      <svg className="header-logo" xmlns="http://www.w3.org/2000/svg" width="139" height="139" viewBox="0 0 139 139" fill="none">
                        <path d="M136.23 22.5998C136.57 22.0098 136.9 21.3898 137.24 20.8098C137.81 19.8598 138 18.9098 138 17.9698C138 15.1198 135.72 12.2798 132.31 12.2798C130.42 12.2798 128.52 13.4098 127.39 15.1198C113.36 38.8198 104.06 71.2498 98.38 90.2098C95.91 98.5498 94.2 99.4998 93.45 99.4998C92.88 99.4998 91.37 99.1198 89.66 90.7798C87.38 79.5898 85.68 66.5098 84.53 55.3198C83.59 45.6598 79.41 35.0298 68.8 35.0298C57.04 35.0298 52.87 47.1698 50.22 53.7998C47.37 61.5698 45.48 67.4498 35.99 95.8898C33.15 104.23 31.06 105.18 29.92 105.18C28.6 105.18 25.75 103.1 21.77 95.1298C14.76 81.2898 10.96 59.2998 10.96 33.3198C10.96 30.2898 8.29996 27.6298 5.26996 27.6298C2.23996 27.6298 -0.420044 30.2898 -0.420044 33.3198C-0.420044 35.8898 -0.350045 38.3798 -0.280045 40.8698C-0.370045 41.2498 -0.420044 41.6398 -0.420044 42.0298C-0.420044 69.1498 3.37995 92.2798 11.53 108.77C15.14 115.97 19.87 125.27 29.92 125.27C39.97 125.27 44.15 115.6 46.61 108.02C56.09 79.5698 57.99 74.0798 60.83 66.6798C63.86 58.5298 66.9 55.1198 68.8 55.1198C69.56 55.1198 72.21 55.8798 73.16 65.1698C74.29 76.7298 76.38 90.1998 78.66 101.76C79.99 108.58 82.64 119.58 93.45 119.58C104.26 119.58 107.29 109.15 109.38 102.33C115.07 83.3698 124.36 51.3298 137.26 29.5198C137.83 28.5698 138.02 27.6198 138.02 26.6798C138.02 25.1698 137.37 23.6698 136.25 22.5898L136.23 22.5998Z" fill="#183a68"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="header-btn__container d-none d-lg-flex">
                  <a
                    href={`https://wa.me/${PHONES_BY_COUNTRY[geo?.country as PhonesKey || 'US']}`}
                    id="go_to_whatsapp"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="header-btn btn -secondary"
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6542 3.17227C14.8772 1.36758 12.5107 0.375 9.99576 0.375C4.80469 0.375 0.58058 4.65469 0.58058 9.91406C0.58058 11.5941 1.01317 13.2355 1.83594 14.6836L0.5 19.625L5.49174 18.2973C6.86585 19.0578 8.41384 19.4574 9.99152 19.4574H9.99576C15.1826 19.4574 19.5 15.1777 19.5 9.91836C19.5 7.37031 18.4312 4.97695 16.6542 3.17227ZM9.99576 17.8504C8.58772 17.8504 7.20937 17.468 6.00915 16.7461L5.725 16.5742L2.76473 17.3605L3.55357 14.4344L3.36696 14.1336C2.58237 12.8703 2.17098 11.4137 2.17098 9.91406C2.17098 5.54414 5.68259 1.98633 10 1.98633C12.0908 1.98633 14.0545 2.81133 15.5304 4.31094C17.0062 5.81055 17.9138 7.8 17.9096 9.91836C17.9096 14.2926 14.3089 17.8504 9.99576 17.8504ZM14.2877 11.9121C14.0545 11.7918 12.8967 11.216 12.6804 11.1387C12.4641 11.057 12.3071 11.0184 12.1502 11.259C11.9933 11.4996 11.5437 12.0324 11.4038 12.1957C11.2681 12.3547 11.1281 12.3762 10.8949 12.2559C9.51228 11.5555 8.60469 11.0055 7.69286 9.41992C7.45112 8.99883 7.9346 9.02891 8.38415 8.11797C8.46049 7.95898 8.42232 7.82148 8.36295 7.70117C8.30357 7.58086 7.83281 6.40781 7.63772 5.93086C7.44687 5.4668 7.25179 5.53125 7.10759 5.52266C6.97187 5.51406 6.81495 5.51406 6.65804 5.51406C6.50112 5.51406 6.24665 5.57422 6.03036 5.81055C5.81406 6.05117 5.20759 6.62695 5.20759 7.8C5.20759 8.97305 6.05156 10.1074 6.16607 10.2664C6.28482 10.4254 7.82433 12.8316 10.1866 13.8672C11.6795 14.5203 12.2647 14.5762 13.0112 14.4645C13.465 14.3957 14.4022 13.8887 14.5973 13.3301C14.7924 12.7715 14.7924 12.2945 14.733 12.1957C14.6779 12.0883 14.521 12.0281 14.2877 11.9121Z" fill="white"></path>
                    </svg>
                  </a>
                  <a href="https://t.me/sbobrik777" id="go_to_telegram" rel="nofollow noopener noreferrer" target="_blank" className="header-btn btn -secondary" aria-label="Telegram">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.63241 12.916L8.2685 18.0346C8.78916 18.0346 9.01466 17.811 9.28508 17.5424L11.7262 15.2095L16.7843 18.9137C17.712 19.4307 18.3656 19.1585 18.6158 18.0603L21.936 2.50263L21.9369 2.50171C22.2312 1.13038 21.441 0.594129 20.5372 0.930546L1.02133 8.4023C-0.310587 8.9193 -0.29042 9.6618 0.794913 9.99821L5.78433 11.5501L17.3737 4.29838C17.9192 3.93721 18.4151 4.13705 18.0072 4.49821L8.63241 12.916Z" fill="white"></path>
                    </svg>
                  </a>
                  <a
                    id="go_to_booking"
                    rel="nofollow"
                    href={isServicePage ? '#booking_service' : '/#booking'}
                    className="header-btn btn -secondary go_to_booking"
                    aria-label="Book now"
                    on={
                      isServicePage
                        ? "tap:booking_service.scrollTo(duration=400)"
                        : "tap:booking.scrollTo(duration=400)"
                    }
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <g>
                        <g>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M9.77533 18.6236H3.93381C3.30832 18.6236 2.81045 18.0898 2.81045 17.4445V5.42453C2.81045 4.77833 3.30832 4.24452 3.93381 4.24452H18.3129C18.9384 4.24452 19.4363 4.77833 19.4363 5.42453V11.2094C19.4363 11.5815 19.7382 11.8834 20.1103 11.8834C20.4823 11.8834 20.7843 11.5815 20.7843 11.2094V5.42453C20.7843 4.02345 19.6717 2.89648 18.3129 2.89648H3.93381C2.57499 2.89648 1.4624 4.02345 1.4624 5.42453V17.4445C1.4624 18.8447 2.57499 19.9717 3.93381 19.9717H9.77533C10.1474 19.9717 10.4494 19.6697 10.4494 19.2976C10.4494 18.9256 10.1474 18.6236 9.77533 18.6236Z"
                                fill="white"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M4.6084 2.22285V4.91891C4.6084 5.29097 4.91036 5.59293 5.28242 5.59293C5.65448 5.59293 5.95644 5.29097 5.95644 4.91891V2.22285C5.95644 1.85079 5.65448 1.54883 5.28242 1.54883C4.91036 1.54883 4.6084 1.85079 4.6084 2.22285Z"
                                fill="white"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M16.291 2.22285V4.91891C16.291 5.29097 16.593 5.59293 16.965 5.59293C17.3371 5.59293 17.6391 5.29097 17.6391 4.91891V2.22285C17.6391 1.85079 17.3371 1.54883 16.965 1.54883C16.593 1.54883 16.291 1.85079 16.291 2.22285Z"
                                fill="white"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M10.4487 2.22285V4.91891C10.4487 5.29097 10.7507 5.59293 11.1228 5.59293C11.4948 5.59293 11.7968 5.29097 11.7968 4.91891V2.22285C11.7968 1.85079 11.4948 1.54883 11.1228 1.54883C10.7507 1.54883 10.4487 1.85079 10.4487 2.22285Z"
                                fill="white"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M2.13643 9.18788H20.1103C20.4823 9.18788 20.7843 8.88592 20.7843 8.51386C20.7843 8.1418 20.4823 7.83984 20.1103 7.83984H2.13643C1.76437 7.83984 1.4624 8.1418 1.4624 8.51386C1.4624 8.88592 1.76437 9.18788 2.13643 9.18788Z"
                                fill="white"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M15.8413 10.9854C13.1128 10.9854 10.8984 13.1998 10.8984 15.9282C10.8984 18.6566 13.1128 20.871 15.8413 20.871C18.5697 20.871 20.7841 18.6566 20.7841 15.9282C20.7841 13.1998 18.5697 10.9854 15.8413 10.9854ZM15.8413 12.3334C17.8256 12.3334 19.436 13.9439 19.436 15.9282C19.436 17.9125 17.8256 19.5229 15.8413 19.5229C13.857 19.5229 12.2465 17.9125 12.2465 15.9282C12.2465 13.9439 13.857 12.3334 15.8413 12.3334Z"
                                fill="white"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M15.167 13.9055V15.7028C15.167 15.8601 15.2227 16.0129 15.3234 16.1342L16.4467 17.4822C16.6849 17.768 17.1099 17.8067 17.3957 17.5685C17.6815 17.3303 17.7202 16.9053 17.482 16.6195L16.515 15.4584V13.9055C16.515 13.5334 16.2131 13.2314 15.841 13.2314C15.469 13.2314 15.167 13.5334 15.167 13.9055Z"
                                fill="white"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  </a>
                  <button
                    id="get_in_touch"
                    className="header-btn btn"
                    on="tap:AMP.setState({ui:{menuOpened:false, modalOpen:true}}),getInTouchModal.open"
                  >
                    <span>Get In Touch</span>
                  </button>
                </div>
                <div className="header-burger__container d-flex d-lg-none">
                  <button
                    type="button"
                    id="mobileMenuBtn"
                    className="header-burger__btn navbar-toggler"
                    aria-label="menu"
                    on="tap:AMP.setState({ ui: { menuOpened: !ui.menuOpened } })"
                    data-amp-bind-class={'"header-burger__btn navbar-toggler" + (ui.menuOpened ? " -active " : "")'}
                    data-amp-bind-aria-expanded={'ui.menuOpened ? "true" : "false"'}
                  >
                    <span> </span>
                    <span> </span>
                    <span> </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderComponent>
    );
  }
};
