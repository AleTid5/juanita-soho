import Colors from '../../constants/colors';

const MainLogo = ({ className, primaryColor = true }) => (
  <svg className={className} viewBox="0 0 32 32" width={32} height={32}>
    <g transform="matrix(.119805 0 0 0.119805-1.929066-1.97075)">
      <ellipse
        rx="16"
        ry="64"
        transform="translate(150 214)"
        fill="none"
        stroke={primaryColor ? Colors.PRIMARY : Colors.WHITE}
        strokeWidth="4"
      />
      <ellipse
        rx="16"
        ry="64"
        transform="matrix(0 1-1 0 218.304161 150)"
        fill="none"
        stroke={primaryColor ? Colors.PRIMARY : Colors.WHITE}
        strokeWidth="4"
      />
      <ellipse
        rx="16"
        ry="64"
        transform="matrix(0 1-1 0 81 150)"
        fill="none"
        stroke={primaryColor ? Colors.PRIMARY : Colors.WHITE}
        strokeWidth="4"
      />
      <ellipse
        rx="16"
        ry="64"
        transform="translate(150 86)"
        fill="none"
        stroke={primaryColor ? Colors.PRIMARY : Colors.WHITE}
        strokeWidth="4"
      />
      <ellipse
        rx="16"
        ry="16"
        transform="translate(102.649937 102)"
        fill="none"
        stroke={primaryColor ? Colors.PRIMARY : Colors.WHITE}
        strokeWidth="4"
      />
      <ellipse
        rx="16"
        ry="16"
        transform="translate(202.304161 102)"
        fill="none"
        stroke={primaryColor ? Colors.PRIMARY : Colors.WHITE}
        strokeWidth="4"
      />
      <ellipse
        rx="16"
        ry="16"
        transform="translate(97 198)"
        fill="none"
        stroke={primaryColor ? Colors.PRIMARY : Colors.WHITE}
        strokeWidth="4"
      />
      <ellipse
        rx="16"
        ry="16"
        transform="translate(202.304161 198)"
        fill="none"
        stroke={primaryColor ? Colors.PRIMARY : Colors.WHITE}
        strokeWidth="4"
      />
    </g>
  </svg>
);

export default MainLogo;
