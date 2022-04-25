import React from 'react';
import Avatar from "@mui/material/Avatar";
import {config} from "../../api/config";

const width = 'w500';

export function UserAvatar({accountResponse}) {
  const userAvatar = accountResponse.avatar.tmdb.avatar_path;
  function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return(
    <>
      {userAvatar &&
        <Avatar src={config.api_img_url + width + userAvatar}/>
      }
      {!userAvatar &&
      <Avatar {...stringAvatar(accountResponse.name)} />
      }
    </>
  );
}
