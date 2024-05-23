import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ToggleProp {
    dicideContentNumber: (toggle: string) => void ;
    toggleText: string;
}

export default function ToggleButtons(props: ToggleProp) {
  const { dicideContentNumber, toggleText } = props;
  const [alignment, setAlignment] = React.useState<string>(toggleText);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    dicideContentNumber(newAlignment)
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        絵本全体
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        見開き
      </ToggleButton>
    </ToggleButtonGroup>
  );
}