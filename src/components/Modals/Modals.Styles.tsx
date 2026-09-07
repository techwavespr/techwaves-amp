import styled from 'styled-components';
import AmpLightbox from '@/types/AmpLightbox';

export const ModalsComponent = styled(AmpLightbox)`
  margin: 0 auto;
  
  .modal-body {
    position: relative;
  }

  .modal-card {
    position: relative;
    width: auto;
    margin: 1.75rem 0.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    transition: transform .3s ease-out;
    transform: translate(0, -50px);

    &.-show {
      transform: none;
    }
  }

  .modal-form__wrap {
    padding: 1rem;
  }

  .modal-icon__wrap {
    text-align: center;
    margin-bottom: 1rem;
  }

  .modal-texts {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1rem;
  }

  .modal-form__line {
    margin-bottom: 1rem;
  }

  .modal-form__input {
    padding: 9px 14px;
    width: 100%;
    color: var(--secondary);
    background: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    border: 0.5px solid var(--secondary-light);
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transition: box-shadow 0.3s ease-in-out;
    cursor: text;
  }

  .modal-form__textarea {

  }

  .modal-form__input::placeholder {
    opacity: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--gray);
    transition: opacity 0.3s ease-in-out;
  }

  .modal-form__input:focus::placeholder {
    opacity: 0;
  }

  .modal-form__input:disabled {
    color: var(--gray);
  }

  .modal-form__input.user-invalid {
    border: 1px solid #FF7D00;
    border-radius: 10px;
  }

  .modal-form__checkboxes {
    display: flex;
    position: relative;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  .modal-form__checkboxes input {
    display: none;
  }

  .modal-form__checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .modal-form__checkbox label {
    display: inline;
  }

  .modal-form__checkbox input + label {
    padding: 10px;
    display: inline-block;
    position: relative;
    float: left;
    margin-right: 7px;
    cursor: pointer;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(158, 158, 215, 0.4);
    border-radius: 2px;
    margin-bottom: 0;
  }

  .modal-form__checkbox input.user-invalid + label {
    border: solid 1px #ff0000;
    border-radius: 2px;
  }

  .modal-form__checkbox input + label:active,
  .modal-form__checkbox input:checked + label:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .modal-form__checkbox input:checked + label {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    border: 1px solid var(--primary);
  }

  .modal-form__checkbox input:checked + label:after {
    content: '';
    background-image: url(/static/images/checkbox_check.svg);
    background-position: 0;
    width: 13px;
    height: 9px;
    position: absolute;
    top: 6px;
    left: 3px;
    color: #00adff;
  }

  .modal-form__checkbox_text {
    margin-bottom: 0;
    font-size: 0.85rem;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 2.75rem;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0;

    &.-show {
      opacity: 0.5;
    }
  }

  /* 576px */
  @media only screen and (min-width: 36rem) {
    width: 18.75rem;
  }
`;
