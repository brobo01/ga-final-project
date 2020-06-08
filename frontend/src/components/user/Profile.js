import React from 'react'

import { getOwnProfile } from '../../lib/api'
import useFetch from '../../utils/useFetch'

function ProfilePage() {

  const { data: profile } = useFetch(getOwnProfile)
  console.log(profile)
  if (!profile) return null
  return (
    <div className="body">
      <div>{profile.username}</div>
      <button>Edit my profile</button>
    </div>

  )
}



export default ProfilePage