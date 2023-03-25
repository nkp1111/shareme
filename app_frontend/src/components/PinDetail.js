import React, { useState, useEffect } from 'react'
import { MdDownloadForOffline } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { client, urlFor } from '../client'
import MasonryLayout from './MasonryLayout'
import { pinDetailQuery, pinDetailMorePinQuery } from '../utils/data'
import Spinner from './Spinner'

const PinDetail = ({ user }) => {
  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState("");
  const [addingComment, setAddingComment] = useState(false);
  const { pinId } = useParams()

  const fetchPinDetail = () => {
    let query = pinDetailQuery(pinId)
    if (query) {
      client.fetch(query)
        .then(data => {
          setPinDetail(data[0])

          if (data[0]) {
            query = pinDetailMorePinQuery(data[0])
            client.fetch(query)
              .then(data => {
                setPins(data)
              })
          }
        })
    }
  }

  useEffect(() => {
    fetchPinDetail()
  }, [pinId]);

  if (!pinDetail) {
    return <Spinner message="Loading pin." />
  }

  return (
    <div className='flex xl-flex-row flex-col m-auto bg-white'
      style={{ maxWidth: "1500px", borderRadius: "32px" }}>
      <div className="flex justify-center items-center md:items-start flex-initial">
        <img
          src={pinDetail?.image && urlFor(pinDetail.image).url()} alt="user-post"
          className='rounded-t-3xl rounded-b-lg' />
      </div>
    </div>
  )
}

export default PinDetail
