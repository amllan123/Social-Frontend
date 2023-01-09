import React from 'react'
import './sidebar.css'
import {RssFeed,Chat,OndemandVideo, Group, EventOutlined} from '@mui/icons-material/';
import {Users} from '../../dummyData'
const Sidebar = () => {
  return (
    <div className="sidebar">
       <div className="sideWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Feed</span>

            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>

            </li>
            <li className="sidebarListItem">
              <OndemandVideo className='sidebarIcon'/>
              <span className="sidebarListItemText">Videos</span>

            </li>
            <li className="sidebarListItem">
              <Group className='sidebarIcon'/>
              <span className="sidebarListItemText">Groups</span>

            </li>
            <li className="sidebarListItem">
              <EventOutlined className='sidebarIcon'/>
              <span className="sidebarListItemText">Events</span>

            </li>
        </ul>
        
          <ul className="sidebarFriendList">

              { Users.map((u)=>(

                <li key={u.id} className="sidebarFriend">
                  <img className='sidebarFriendImg' src={u.profilePicture} alt="" />
                  <span className="sidebarFriendName">{u.username}</span>

              </li>
              ))


              }

              
             
          </ul>

       </div>

    </div>
  )
}

export default Sidebar