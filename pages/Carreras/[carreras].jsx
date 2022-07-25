import React from 'react'
import { useRouter } from 'next/router';
const carreras = () => {
  const router = new useRouter();
  const nameCarrera = router.query.carreras;
  console.log(router)
  return (
    <div >{router["query"].carreras}</div>
  )
}
export default carreras;
