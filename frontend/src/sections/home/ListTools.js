import {Grid, ListItem, List, ListItemIcon, ListItemText } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TOOLS_FRAMEWORKS_1 = [
    "Python - Django",
    "Go - Gin Gonic",
    "Solidity - Web3",
    "MySQL - PostgreSQL",
    "Docker",
  ]
  
  const TOOLS_FRAMEWORKS_2 = [
    "JavaScript - Node.js",
    "React - Next.JS",
    "Tailwind CSS",
    "C++",
    "Open to Work Remotely",
  ]

export default function ListTools(){
    return(
        <Grid container>
                
                <Grid item xs={12} sm={6}>
                  <List>
                    {TOOLS_FRAMEWORKS_1.map((item) =>(
                      <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                    ) )}
                    
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List>

                  {TOOLS_FRAMEWORKS_2.map((item) =>(
                      <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                    ) )}
                    

                  </List>
                </Grid>
              </Grid>
    )
}