import React from 'react';
import Text from '@app/components/text/Text';
import BaseHeader from './BaseHeader';
import { fp, getFontFamily } from '@app/lib/utils';
import Visibility from '@app/components/Visibility';
import { FontWeight } from '@app/lib/enums';
import { headerIconSize } from '@app/components/headers/header.const';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  style?: any;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <BaseHeader>
      <Visibility on={Boolean(title)} flex={1} marginLeft={'s'}>
        <Text
          fontSize={fp(2.4)}
          lineHeight={headerIconSize}
          color='text'
          fontFamily={getFontFamily(FontWeight.Medium)}>
          {title}
        </Text>
        {subtitle ? (
          <Text
            variant='subheading'
            fontFamily={getFontFamily(FontWeight.Medium)}>
            {subtitle}
          </Text>
        ) : null}
      </Visibility>
    </BaseHeader>
  );
};

export default Header;
