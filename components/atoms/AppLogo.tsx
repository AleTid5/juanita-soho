import MainLogo from 'assets/icons/MainLogo';
import MainLogoText from 'assets/icons/MainLogoText';

export enum EAppLogo {
  LOGO = 'logo',
  TEXT = 'text',
}

type AppLogoProps = {
  className?: string;
  isSnap?: boolean;
  type?: EAppLogo;
};

const LogoType = {
  [EAppLogo.LOGO]: MainLogo,
  [EAppLogo.TEXT]: MainLogoText,
};

const AppLogo = ({ className, isSnap, type = EAppLogo.TEXT }: AppLogoProps) => {
  const Logo = LogoType[type];

  return <Logo className={className} primaryColor={!isSnap} />;
};

export default AppLogo;
