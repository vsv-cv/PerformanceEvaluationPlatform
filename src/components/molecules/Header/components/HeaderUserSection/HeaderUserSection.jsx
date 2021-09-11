import React from 'react';
import classNames from 'classnames';
import { HeaderItem } from '../HeaderItem';
import { BaseButton } from '../../../../atoms/BaseButton';
import { user } from '../../const';
import classes from './styles/index.module.scss';

export const HeaderUserSection = ({ className }) => {
  const userSectionClasses = classNames(classes.userSection, className);

  return (
    <div className={userSectionClasses}>
      {user && (
        <>
          <HeaderItem>Log out</HeaderItem>
          <BaseButton>
            <img src="/images/defaultProfileIcon.svg" alt="" />
          </BaseButton>
        </>
      )}
      {!user && (
        <>
          <HeaderItem>Sign up</HeaderItem>
          <HeaderItem>Sign in</HeaderItem>
        </>
      )}
    </div>
  );
};
