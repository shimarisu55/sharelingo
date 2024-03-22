import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

interface SidebarListProps {
    listItem: {id: string, seriesTitle: string};
    clickListItems: (id: string, seriesTitle: string) => void;
  }

export default function SidebarList(props: SidebarListProps) {
  const { listItem, clickListItems } = props;
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem key={listItem.id} disablePadding onClick={
          () => clickListItems(listItem.id, listItem.seriesTitle)
          }>
          <ListItemButton>
            <ListItemText primary={listItem.seriesTitle} />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
      <Divider />
    </Box>
  );
}