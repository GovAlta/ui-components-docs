import { Sandbox } from "@components/sandbox";
import { GoabButtonGroup, GoabIconButton, GoabTooltip } from "@abgov/react-components";

export const ShowALabelOnAnIconOnlyButton = () => {
  return (
    <Sandbox fullWidth>
      <GoabButtonGroup alignment="center">
        <GoabTooltip content="Edit">
          <GoabIconButton icon="pencil" ariaLabel="Pencil icon"/>
        </GoabTooltip>
        <GoabTooltip content="Alerts">
          <GoabIconButton icon="notifications" ariaLabel="Alert icon"/>
        </GoabTooltip>
        <GoabTooltip content="Settings">
          <GoabIconButton icon="settings" ariaLabel="Settings icon"/>
        </GoabTooltip>
      </GoabButtonGroup>
    </Sandbox>
  )
}

export default ShowALabelOnAnIconOnlyButton;
