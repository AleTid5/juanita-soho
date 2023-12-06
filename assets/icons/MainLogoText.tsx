import Colors from '../../constants/colors';

const MainLogoText = ({ className, primaryColor = true }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `<svg viewBox="0 0 78 32" height="32" width="78"><g transform="matrix(.119805 0 0 0.119805-1.929066-1.97075)">
<ellipse rx="16" ry="64" transform="translate(150 214)" fill="none" stroke="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="4"/>
<ellipse rx="16" ry="64" transform="matrix(0 1-1 0 218.304161 150)" fill="none" stroke="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="4"/>
<ellipse rx="16" ry="64" transform="matrix(0 1-1 0 81 150)" fill="none" stroke="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="4"/>
<ellipse rx="16" ry="64" transform="translate(150 86)" fill="none" stroke="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="4"/>
<ellipse rx="16" ry="16" transform="translate(102.649937 102)" fill="none" stroke="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="4"/>
<ellipse rx="16" ry="16" transform="translate(202.304161 102)" fill="none" stroke="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="4"/>
<ellipse rx="16" ry="16" transform="translate(97 198)" fill="none" stroke="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="4"/>
<ellipse rx="16" ry="16" transform="translate(202.304161 198)" fill="none" stroke="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="4"/>
</g>
<text dx="0" dy="0" font-family="&quot;Handlee&quot;" font-size="14" font-weight="400" transform="translate(37.584042 13.734431)" fill="${
        primaryColor ? Colors.PRIMARY : Colors.WHITE
      }" stroke-width="0">
<tspan y="0" font-weight="400" stroke-width="0"><![CDATA[Juanita]]></tspan>
<tspan x="0" y="14" font-weight="400" stroke-width="0"><![CDATA[Soho]]></tspan></text></svg>`,
    }}
  />
);

export default MainLogoText;
