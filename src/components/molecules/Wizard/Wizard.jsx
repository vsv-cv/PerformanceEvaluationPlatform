import React from 'react';
import PropTypes from 'prop-types';
import { BaseModal } from '../../atoms/BaseModal';
import { Button } from '../../atoms/Button';
import classes from './styles/index.module.scss';
import classNames from 'classnames';
import { CloseSvgIcon } from './CloseSvgIcon';
import { Breadcrumbs } from '../../atoms/Breadcrumbs/Breadcrumbs';

export const Wizard = ({
  isOpen,
  onRequestClose,
  size,
  previousButtonText,
  nextButtonText,
  successButtonText,
  screens,
  activeScreenId,
  allowPrevious,
  allowNext,
}) => {
  const isFirstScreen = activeScreenId === screens[0].id;
  const isLastScreen = activeScreenId === screens[screens.length - 1].id;
  const getNextButtonText = () => {
    if (isLastScreen) {
      return successButtonText || 'confirm';
    }

    return nextButtonText || 'next';
  };

  const activeScreen = screens.find(screen => screen.id === activeScreenId);
  const activeScreenComponent = activeScreen.component;
  const screenTitlesBreadcrumbs = screens.map(screen => ({
    text: screen.title,
    isSelected: screen.id === activeScreenId,
  }));

  const buttonWrapperClassNames = classNames(classes.buttonWrapper, {
    [classes.buttonWrapper_atFirstScreen]: isFirstScreen,
  });

  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose} size={size}>
      <div className={classes.wizardContainer}>
        <div className={classes.closeSvgIconContainer}>
          <Breadcrumbs items={screenTitlesBreadcrumbs} />
          <button
            onClick={onRequestClose}
            className={classes.closeSvgIconButton}
          >
            <CloseSvgIcon className={classes.closeSvgIcon} />
          </button>
        </div>
        {activeScreenComponent}
        <div className={buttonWrapperClassNames}>
          {!isFirstScreen && (
            <Button disabled={!allowPrevious}>
              {previousButtonText || 'previous'}
            </Button>
          )}
          <Button
            onClick={() => activeScreen.handleClickOnNextStep(onRequestClose)}
            disabled={!allowNext}
          >
            {getNextButtonText()}
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};

Wizard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'fullscreen']),
  previousButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  successButtonText: PropTypes.string,
  screens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object,
      ]), // React component
      handleClickOnNextStep: PropTypes.func,
    })
  ),
  activeScreenId: PropTypes.string,
  allowNext: PropTypes.bool,
  allowPrevious: PropTypes.bool,
};
