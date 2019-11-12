import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SvgIcons from './SvgIcons';


const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[
          { id: 1, nome: 'Menu Inicial', icon: <SvgIcons />},
          { id: 2, nome: 'Anotações Importantes' },
          { id: 3, nome: 'Besteirol' },
          { id: 4, nome: 'Imagens' }
        ].map((item, index) => (
          <ListItem button key={index}>
          {item.icon &&
          <ListItemIcon>{item.icon}</ListItemIcon>
          }
            <ListItemText primary={item.nome} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <div>
      <Button 
      onClick={toggleDrawer('left', true)}
      startIcon={<SvgIcons/>}
      color="secondary"
      >
       <h3> Menu </h3>
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}