import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import { TaskbarContainer } from "./style";

export default function Taskbar() {
  return ( 
    <TaskbarContainer>
        <List
        sx={{
            width: '50%',
            maxWidth: 360,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 900,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`}>
              <ul>
                <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                {[0, 1, 2].map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`Item ${item}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
            
        </List>
    </TaskbarContainer>
  )
}
