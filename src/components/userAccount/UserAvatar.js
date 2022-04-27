import React from 'react';
import Avatar from "@mui/material/Avatar";
import {config} from "../../api/config";
import {stringToColor} from "../../utils/userAccount";

const width = 'w500';

export function UserAvatar({accountResponse}) {
  const userAvatar = accountResponse.avatar.tmdb.avatar_path;

  function makeAvatarInitials(name) {
    let nameAsArray = name.split(' ');
    return nameAsArray.length < 2 ? `${name.slice(0, 1)}` : `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: makeAvatarInitials(name)
    };
  }

  return(
    <>
      {userAvatar &&
        <Avatar src={config.api_img_url + width + userAvatar}/>
      }
      {!userAvatar &&
      <Avatar {...stringAvatar(accountResponse.name || accountResponse.username)} />
      }
    </>
  );
}
