import { useNavigate } from "react-router";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

export function MenuItemComponent({ item }: any) {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setShowSubmenu(true)}
      onMouseLeave={() => setShowSubmenu(false)}
    >
      <ListItem button onClick={() => navigate(item.path)}>
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.name} />
      </ListItem>

      {showSubmenu && item.subItems && (
        <div style={{ marginLeft: "20px" }}>
          {item.subItems.map((subItem: any) => (
            <ListItem button key={subItem.name} onClick={() => navigate(subItem.path)}>
              {subItem.icon && <ListItemIcon>{subItem.icon}</ListItemIcon>}
              <ListItemText primary={subItem.name} />
            </ListItem>
          ))}
        </div>
      )}
    </div>
  );
}
