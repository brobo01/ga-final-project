import React from 'react'
import { useHistory } from 'react-router-dom'
import { getOwnProfile } from '../../lib/api'
import useFetch from '../../utils/useFetch'

function ProfilePage() {
  const history = useHistory()
  const { data: profile } = useFetch(getOwnProfile)

  const toBasket = () => {
    history.push(`/basket/${profile.users_basket[0].id}`)
  }

  const handleEditButton = () => {
    history.push('/profile/edit/')
  }

  const handleTicketButton = () => {
    history.push('/tickets')
  }

  if (!profile) return null
  return (
    <div className="body">
      <div className="prof-stats">

      <div id="prof-pic-box">
        <img id="prof-pic" src={profile.profile_images[0]?.image} alt={profile.name} loading="lazy" />

      </div>
      <p id="prof-username">{profile.username}</p>
      <p>{profile.first_name} {profile.last_name}</p>
      <p id="prof-email" >{profile.email}</p>
      <p id="stats">Stats</p>
      <p id="prof-age">{profile.age}</p>
      <p id="prof-gender">{profile.gender}</p>
      <p id="prof-industry">{profile.industry}</p>
      <p id="prof-ethnicity">{profile.ethnicity}</p>
      </div>
      

      <button className="edit-prof-button" onClick={handleEditButton}>Edit my profile</button>

      <div className="profile-buttons">
      <button className="my-tickets-button" onClick={handleTicketButton}>My Tickets</button>
      <button className="user-basket-button" onClick={toBasket}>My Basket</button>
      </div>
    </div>

  )
}



export default ProfilePage