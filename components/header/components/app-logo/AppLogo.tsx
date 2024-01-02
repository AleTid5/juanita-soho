import MainLogo from 'assets/icons/MainLogo';
import MainLogoText from 'assets/icons/MainLogoText';
import { Logo } from 'constants/logo';

type AppLogoProps = {
  className?: string;
  isSnap?: boolean;
  type?: Logo;
};

const LogoType = {
  [Logo.LOGO]: MainLogo,
  [Logo.TEXT]: MainLogoText,
};

const AppLogo = ({ className, isSnap, type = Logo.TEXT }: AppLogoProps) => {
  const LogoComponent = LogoType[type];

  return <LogoComponent className={className} primaryColor={!isSnap} />;
};

export default AppLogo;
