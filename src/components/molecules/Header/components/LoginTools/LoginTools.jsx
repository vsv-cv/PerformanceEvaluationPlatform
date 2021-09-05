import React from 'react';
import styles from './loginTools.module.scss';
import { authorizedUser } from './const';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import HeaderImg from '../HeaderImg/HeaderImg';
import { TYPES } from '../HeaderImg/const';
import userIcon from '../../../../../icons/user.svg';
import classNames from 'classnames';

export default function LoginTools({ classes }) {
  const { isAuthorized } = authorizedUser;
  const toolsClasses = classNames(classes, styles.header__btn_container);
  return isAuthorized ? (
    <div className={toolsClasses}>
      <HeaderBtn link="/logout">Log out</HeaderBtn>
      <HeaderImg link="/profile" image={userIcon} type={TYPES.circle} />
    </div>
  ) : (
    <div className={toolsClasses}>
      <HeaderBtn link="/registration">Sign up</HeaderBtn>
      <HeaderBtn link="/login">Sign in</HeaderBtn>
    </div>
  );
}
