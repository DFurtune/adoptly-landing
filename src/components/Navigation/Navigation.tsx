import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  className = '',
  onLinkClick,
}) => {
  const { t } = useTranslation();
  const listClass = `list ${className}`.trim();

  return (
    <nav>
      <ul className={listClass}>
        <li className="item">
          <a href="#aboutus" onClick={onLinkClick}>
            {t('nav.aboutus')}
          </a>
        </li>
        <li className="item">
          <a href="#ourStory" onClick={onLinkClick}>
            {t('nav.ourStory')}
          </a>
        </li>
        <li className="item">
          <a href="#roadmap" onClick={onLinkClick}>
            {t('nav.roadmap')}
          </a>
        </li>
        <li className="item">
          <a href="#team" onClick={onLinkClick}>
            {t('nav.team')}
          </a>
        </li>
        <li className="item">
          <a href="#shelters" onClick={onLinkClick}>
            {t('nav.shelters')}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
