import React from 'react'
import { createImage } from '../../lib/api'
import useForm from '../../utils/useForm'

import { useParams } from 'react-router-dom'

function PollForm() {
  const { id: eventId } = useParams()

  const onSubmitSuccess = () => {

  }
  const { data, handleChange, formErrors, handleSubmit } = useForm({
    image: '',
    talk: eventId
  }, createImage, null, onSubmitSuccess)




  return (
    <div className="event-form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            name="question"
            label="Question"
            placeholder="Your question"
            onChange={handleChange}
            value={data}
            error={formErrors}
          />
        </div>
        <div className="form-item">
          <input
            name="option_a"
            label="Option A"
            placeholder="Option A"
            onChange={handleChange}
            value={data}
            error={formErrors}
          />
        </div>
        <div className="form-item">
          <input
            name="option_b"
            label="Option B"
            placeholder="Option B"
            onChange={handleChange}
            value={data}
            error={formErrors}
          />
        </div>
        <div className="form-item">
          <input
            name="option_c"
            label="Option C"
            placeholder="Option C"
            onChange={handleChange}
            value={data}
            error={formErrors}
          />
        </div>
        <div className="form-item">
          <input
            name="option_d"
            label="Option D"
            placeholder="Option D"
            onChange={handleChange}
            value={data}
            error={formErrors}
          />
        </div>
        <button>Submit your Image</button>
      </form>
    </div>
  )
}

export default PollForm