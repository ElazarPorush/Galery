import Details from './Details'

interface Props {

}

export default function Card({}: Props) {
  const handleDetails = () => {
    <Details />
  }
  return (
    <div className='card'>
      <img src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d" alt="" />
      <button onClick={() => handleDetails()}>Details</button>
      <button>👍</button>
    </div>
  )
}
